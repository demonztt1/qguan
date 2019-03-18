/**
 * 把xml文件解析成 数组
 *  @param dataStr  字符串
 *  @param  {StactNode}
 *  @returns {Array|any[]&XmlNode}
 */
class LexXML{
    /**
     * 解析
     * @param dataStr  字符串
     * @returns {Array|any[]&XmlNode}
     */
    lex(dataStr){
        this.heap =new Array();
        this.stact=new Array();
        this.pid=null;
        let sertC= this.lexNames(dataStr)
        this.regContrast(sertC);
        return this.heap;
    }


    //词法解析
    lexNames(strs) {
        var ch = '';
        var text;
        var dotID = [  '<', '>','\\','?' ]
        var sertConst = [];

        text = strs.toString().split('');

        for (var i = 0; i < text.length;) {
            var strToken = '';
            ch = text[i];
            var tag = 0;
            if(ch == '<' || ch == '>' || ch == '\/' || ch =='?'){
                sertConst.push(ch);
                i += 1;
                ch = text[i];

            } else if( ch == '\n' || ch == '\t'|| ch == " ") {
                i += 1;
                ch = text[i];
            } else   {
                while (ch != '<' && ch != '>' && ch != '\/' && ch != '?' && ch != '\n' && ch != '\t'&& ch != " ") {
                    strToken += ch;
                    i ++;
                    ch = text[i];
                }
                if (sertConst.length != 0 && tag === 0) {
                    for (var t = 0; t < sertConst.length; t++) {

                        if (sertConst[t] === strToken && tag === 0) {
                            tag = 1;
                            break;
                        }
                        else {
                            sertConst.push(strToken);
                            tag = 1;
                            var put = sertConst.length - 1
                            break;
                        }
                    }
                }
            }
        }

        return sertConst;
    }
    //词法
    FLEX (str) {
        switch(str)
        {
            case "<":
                return 'GREATER';
                break;
            case ">":
                return 'LESS';
                break;
            case "?":
                return 'QUESTION';
                break;
            case "\/":
                return 'SLASH';
                break;
            default:
                return 'STRING';
        }
    }
    /**
     * 清空栈
     * @returns {string}
     */
    emptyStact(){
        let res=new StactNode();
        let str="";
        let token="";
        let restoken="";
        let frontToken="";
        for(;this.stact.length>0;){
            if(this.stact[this.stact.length-1].token=="STRING"&&token=="STRING"){
                str=this.stact[this.stact.length-1].str+" "+str;
            }else {
                if((this.stact[this.stact.length-1].token == "SLASH"|| "SLASH" == token)){
                    if  (this.stact[this.stact.length-1].token == "SLASH") {
                        if(  "LESS" == token){
                            str=this.stact[this.stact.length-1].str+str;
                            restoken=this.stact[this.stact.length-1].token+""+restoken;
                        }else if(this.stact[this.stact.length-2].token == "GREATER"){
                            str=this.stact[this.stact.length-1].str+str;
                            restoken=this.stact[this.stact.length-1].token+""+restoken;
                        }else {
                            str=this.stact[this.stact.length-1].str+""+str;
                        }

                    } else {
                        if((this.stact[this.stact.length-1].token == "GREATER"&&"SLASH"  == token)||(frontToken == "LESS"&&"SLASH"  == token)){
                            str=this.stact[this.stact.length-1].str+str;
                            restoken=this.stact[this.stact.length-1].token+""+restoken;
                        }else {
                            str=this.stact[this.stact.length-1].str+""+str;
                        }
                    }
                } else {
                    str=this.stact[this.stact.length-1].str+str;
                    restoken=this.stact[this.stact.length-1].token+""+restoken;
                }
            }
            frontToken=token;
            token=this.stact[this.stact.length-1].token;
            this.stact.splice(this.stact.length-1,this.stact.length);
        }
        res.token=restoken;
        res.str=str;
        return res;
    }

    /**
     * 操作堆
     * @returns {string}
     */
    emptyHeap(str){
        if (""==str.token||null==str.token){
            return ;
        }
        let xnode= new XmlNode();
        let nodeid;
        switch(str.token)
        {
            case "GREATERQUESTIONSTRINGQUESTIONLESS": //<?xxxx?>
                xnode.dataHead=str.str;
                nodeid= this.heap.push(xnode)-1;
                this.heap[nodeid].id=nodeid;
                break;
            case "GREATERQUESTIONQUESTIONLESS":  //<??>
                xnode.dataHead=str.str;
                nodeid=this.heap.push(xnode)-1;
                this.heap[nodeid].id=nodeid;
                break;
            case "GREATERSTRINGLESS": //<sss>
                xnode.dataHead=str.str;
                xnode.pid=this.pid;
                nodeid =this.heap.push(xnode)-1;
                this.heap[nodeid].id=nodeid;
                this.pid=nodeid;
                break;
            case "GREATERSTRINGSLASHLESS": //<sss/>
                xnode.dataHead=str.str;
                xnode.pid=this.pid;
                nodeid =this.heap.push(xnode)-1;
                this.heap[nodeid].id=nodeid;
                break;
            case "GREATERSLASHSTRINGLESS": //</sss>
                console.log("pid " + this.pid + "    str" +str.str)
                this.heap[this.pid].dataTail=str.str;
                this.pid=this.heap[this.pid].pid;
                break;
            case "STRING":
                this.heap[this.pid].dataText=str.str;
                break;
            default:
                return "err";
        }


    }

    /**
     *  语法解析
     * //@param sertC
     */
    regContrast(sertC){
        let  ch = '';
        for (var i = 0; i < sertC.length;) {
            ch = sertC[i];

            if(ch == '<'){
                while (ch != '>'){
                    this.stact.push(new StactNode(ch,this.FLEX(ch)))
                    i ++;
                    ch = sertC[i];
                }
                this.stact.push(new StactNode(ch,this.FLEX(ch)))
                let sta=this.emptyStact()
                this.emptyHeap(sta)
                i ++;
            }else {
                do {
                    this.stact.push(new StactNode(ch,this.FLEX(ch)))
                    i ++;
                    ch = sertC[i];
                }  while (ch != '<')
                let sta=this.emptyStact()
                this.emptyHeap(sta)
            }

        }
    }


}

