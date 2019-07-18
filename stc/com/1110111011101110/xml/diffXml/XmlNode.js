/**
 *xml节点
 */
class XmlNode{
    constructor(){
        this.id=null;
        this.pid=null;
        this.r=null;
        this.l=null;

        this.dataHead="";
        this.dataTail="";
        this.dataText="";
        this.resAid=null;
        this.resBid=null;
        this.result=null;
        this.uiHead="";
        this.uiTail="";
        this.li="";
    }
    set setId(ids){
        this.id=ids;
    }
    get getId(){
        return this.id;
    }
    set  setPid(pid){
        this.pid=pid;
    }
    get getPid(){
        return this.Pid;
    }
    set setR(r){
        this.r=r;
    }
    get getR(){
        return this.r;
    }
    set  setL(l){
        this.l=l;
    }
    get getL(){
        return this.l;
    }
    set setDataHead(dataHead){
        this.dataHead=dataHead;
    }
    get getDataHead(){
        return this.dataHead;
    }
    set setDataText(dataText){
        this.dataText=dataText;
    }
    get getDataText(){
        return this.dataText;
    }
    set setDataTail(dataTail){
        this.dataTail=dataTail;
    }
    get getDataTail(){
        return this.dataTail;
    }
    set  setResult(result){
        this.result=result;
    }
    get  getResult(){
        return  this.result;
    }
    set  setresLid(result){
        this.resLid=result;
    }
    get  getresLid(){
        return  this.resLid;
    }

    set  setresRid(result){
        this.resRid=result;
    }
    get  getresRid(){
        return  this.resRid;
    }
    set  setUiHead(result){
        this.uiHead=result;
    }
    get  getUiHead(){
        return  this.uiHead;
    }
    set  setUiTail(result){
        this.uiTail=result;
    }
    get  getUiTail(){
        return  this.uiTail;
    }
    set  setLi(result){
        this.li=result;
    }
    get  getLi(){
        return  this.li;
    }
}


/**
 * xml树结构
 */
class XmlTree{
    constructor(){
        this.list = new Array() ;
    }
    getlist(){
        return this.list.length();
    }
    addNode(){
        let node=new XmlNode();
        node.setId=this.list.length;
        this.list.push(node);
        return node.getId;
    }

    setNodeVal(id,key,val){
        this.list[id][key]=val;
    }

    getNodeVal(id,key){
        return this.list[id][key];
    }

    toLR(){
        let leng=this.list.length;
        for (let i=0;i<leng;i++){
            this.list[i].r = this.toR(this.list[i].id);
            this.list[i].l = this.toL(this.list[i].pid,i);
        }
    }

    toR(id){
        for (let i in this.list) {
            if (this.list[i].pid== id) {
                return i;
            }
        }
        return null;
    }
    toL(pId,l){
        for (var i = l; i < this.list.length; i++) {
            if (this.list[i].pid== pId && i != l) {
                return i;
            }
        }
        return null;
    }

    toTree(w){
        if (this.list[w].l == null) {
            var li=this.liMounld(this.list[w]);
            this.n = this.n +li;
            if (this.list[w].r != null) {
                this.toTree(this.list[w].r);
            }
        } else {
            this.n = this.n + this.ulFront(this.list[w] );
            this.toTree(this.list[w].l);
            this.n = this.n + this.ulAfter(this.list[w]) ;
            if (this.list[w].r != null) {
                this.toTree(this.list[w].r);
            }
        }
        return;
    }
}

/**
 * 对比xml文件
 */
class ContrastXml{
    constructor(aTree,bTree){
        this.LTree=aTree;
        this.RTree=bTree;
        this.resTree=new XmlTree();

    }

    //对比 并返回一个合并树
    contrast(id){
        let alist=new Array();
        let blist=new Array();
        let clist=new Array();
        let aid=null;
        let bid=null;
        if(null==id){
            aid=0;
            bid=0;
            do{
                alist.push(this.LTree.getNodeVal(aid,"dataHead"));
                aid=this.LTree.getNodeVal(aid,"l")
            }while (aid!=null);
            do{
                blist.push(this.RTree.getNodeVal(bid,"dataHead"));
                bid=this.RTree.getNodeVal(bid,"l")
            }while(bid !==null);
            clist= this.LCS(alist,blist,0);
            this.addNode(id,clist);
            id=0;
            alist=new Array();
            blist=new Array();
            clist=new Array();
        }
        let telaid=this.resTree.getNodeVal(id,"resLid")
        if(telaid!=null){
            aid=this.LTree.getNodeVal(telaid,"r");
            while (aid!=null){
                alist.push(this.LTree.getNodeVal(aid,"dataHead"));
                aid=this.LTree.getNodeVal(aid,"l")
            };
        }
        let telbid= this.resTree.getNodeVal(id,"resRid")
        if(telbid!=null) {
            bid = this.RTree.getNodeVal(telbid, "r");
            while (bid!=null) {
                blist.push(this.RTree.getNodeVal(bid,"dataHead"));
                bid=this.RTree.getNodeVal(bid,"l")
            };
        }
        clist= this.LCS(alist,blist,0);
        if(0<clist.length){
            this.addNode(id,clist);
        }


        if(this.resTree.getNodeVal(id,"l")!=null){
            this.contrast(this.resTree.getNodeVal(id,"l"))
        }
        if(this.resTree.getNodeVal(id,"r") !=null){
            this.contrast(this.resTree.getNodeVal(id,"r"))
        }
        return this.resTree;
    }

    /**
     * 给返回树添加节点
     */
    addNode(id,clist){

        let cid=null;
        let aid=null;
        let bid=null;
        for(let p=0;p<clist.length;p++) {
            if (clist[p].op == 1) { //没变
                for (let l=0;l<clist[p].length;l++){
                    let telid=this.resTree.addNode();
                    if(null==aid||null==bid){
                        if( cid==null){
                            if(null==id){
                                aid=0;
                                bid=0;
                            }else {
                                aid=this.LTree.getNodeVal(this.resTree.getNodeVal(id,"resLid"),"r");
                                bid=this.RTree.getNodeVal(this.resTree.getNodeVal(id,"resRid"),"r");
                                this.resTree.setNodeVal(id,"r",telid);
                            }

                        }else {
                            if(null==aid){
                                aid=this.LTree.getNodeVal(this.resTree.getNodeVal(id,"resLid"),"r");
                                bid=this.RTree.getNodeVal(bid,"l")
                            }
                            if(null==bid){
                                bid=this.RTree.getNodeVal(this.resTree.getNodeVal(id,"resRid"),"r");
                                aid=this.LTree.getNodeVal(aid,"l") ;
                            }
                            this.resTree.setNodeVal(cid,"l",telid);
                        }
                    } else {
                        aid=this.LTree.getNodeVal(aid,"l") ;
                        bid=this.RTree.getNodeVal(bid,"l")
                        this.resTree.setNodeVal(cid,"l",telid);
                    }
                    this.resTree.setNodeVal(telid,"resLid",aid);
                    this.resTree.setNodeVal(telid,"resRid",bid);
                    cid=telid;
                }
            } else if (clist[p].op == 2) { //添加
                for (let l=0;l<clist[p].length;l++) {
                    let telid = this.resTree.addNode();
                    if (null == bid) {
                        if (cid == null) {
                            if(null==id){
                                bid=0;
                            }else {
                                bid = this.RTree.getNodeVal(this.resTree.getNodeVal(id,"resRid"),"r");
                                this.resTree.setNodeVal(id, "r", telid);
                            }

                        } else {
                            bid = this.RTree.getNodeVal(this.resTree.getNodeVal(id,"resRid"),"r");
                            this.resTree.setNodeVal(cid, "l", telid);
                        }
                    }else {
                        this.resTree.setNodeVal(cid, "l", telid);
                        bid = this.RTree.getNodeVal(bid,"l");
                    }
                    this.resTree.setNodeVal(telid, "resRid", bid);
                    cid = telid;
                }
            } else if (clist[p].op == 3) { //减少
                for (let l=0;l<clist[p].subTpl.length;l++) {
                    let telid = this.resTree.addNode();
                    if (null == aid) {
                        if (cid == null) {
                            if(null==id){
                                aid=0;
                            }else {
                                aid = this.LTree.getNodeVal(this.resTree.getNodeVal(id,"resLid"),"r");
                                this.resTree.setNodeVal(id, "r", telid);
                            }

                        } else {
                            aid = this.LTree.getNodeVal(this.resTree.getNodeVal(id,"resLid"),"r");
                            this.resTree.setNodeVal(cid, "l", telid);
                        }
                    }else {
                        this.resTree.setNodeVal(cid, "l", telid);
                        aid = this.LTree.getNodeVal(aid,"l");
                    }
                    this.resTree.setNodeVal(telid, "resLid", aid);
                    cid = telid;
                }
            }
        }
    }
    setid(){

    }
    LCS( tpl,  str,  strSt) {
        if (tpl.length == 0 && str.length == 0) {
            return new Array();
        } else if (tpl.length == 0) {
            let let5= new XmlDillNode()
            let5.setNode(strSt, str.length, 2)
            return   [ let5];
        } else if (str.length == 0) {
            let let4= new XmlDillNode()
            let4.setNode(strSt, tpl.length, 3, tpl)
            return  [let4];
        }

        let dp = new Array(tpl.length + 1);         //先声明一维
        for(let i=0;i<dp.length ;i++){          //一维长度为5
            dp[i]=new Array(str.length + 1);    //在声明二维
            for(let j=0;j<str.length + 1  ;j++){      //二维长度为5
                dp[i][j]=0;
            }
        }

        let maxi, maxj, maxk;
        maxi = maxj = maxk = 0;
        for (let i = 1; i <= tpl.length; i++) {
            for (let j = 1; j <= str.length; j++) {
                if (tpl[i - 1] == str[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                    if (dp[i][j] >= maxk) {
                        maxk = dp[i][j];
                        maxi = i;
                        maxj = j;
                    }
                }
            }
        }

        let list = new Array();
        if (maxk == 0) {
            let tel1=new XmlDillNode()
            let tel2= new XmlDillNode()
            tel1.setNode(strSt, tpl.length, 3, tpl)
            tel2.setNode(strSt, str.length, 2)
            list.push(tel1);
            list.push(tel2);
        } else {
            let s=tpl.slice(0, maxi - maxk);
            let w=str.slice(0, maxj - maxk);
            let red=this.LCS(s, w, strSt);

            if(null!=red&&0<red.length){
                list=  list.concat(red );
            }

            let tel3= new XmlDillNode();
            tel3.setNode(maxj - maxk, maxk, 1);
            list.push(tel3);
            let red2 =this.LCS(tpl.slice(maxi, tpl.length), str.slice(maxj, str.length), maxj);
            if(null!=red2&&0<red2.length){
                list=    list.concat(red2  );
            }

        }
        return list;
    }
    //  return resTree;
}

/**
 * xml对比差异，用的节点
 */
class XmlDillNode{
    setNode( st,  length,  op) {
        this.st = st;
        this.length = length;
        this.op = op;
    }

    setNode( st,  length,  op,  subTpl) {
        this.length = length;
        this.op = op;
        this.st = st;
        this.subTpl = subTpl;

    }
    toString() {
        return "Node{" +
            "length=" + this.length +
            ", st=" + this.st +
            ", op=" +this.op +
            '}';
    }
}




/**
 * @param LTree L 树
 * @param RTree R 树
 * @param ifTree 中间树
 * @param uiId  显示ui的id
 * @param LR    显示 L 还是R
 */
class  ShowTree{
    constructor(LTrees,RTrees,diffTree){
        this.LTree=LTrees;
        this.RTree=RTrees;
        this.diffTree=diffTree;
    }
    buildTree(LR) {
        this.resStr=""
        if(LR=="L"){
            this.produceL();
        }else {
            this.produceR();
        }


        this.make(0);
        return this.resStr;
    }
    //生成 ui li 需要显示的内容
    produceL(){
        let leng=this.diffTree.list.length;
        let uiHead="";
        let uiTail="";
        let li="";
        for(let l=0;l<leng;l++){
            uiHead="";
            uiTail="";
            li="";
            let telLid =this.diffTree.list[l].resLid;
            let telRid =this.diffTree.list[l].resRid;
            if(this.diffTree.list[l].r==null){
                if(telLid!=null&&telRid!=null){
                    if(this.LTree.getNodeVal(telLid,"dataText") ==this.RTree.getNodeVal(telRid,"dataText")){
                        li=`<li>${this.LTree.getNodeVal(telLid,"dataHead").replace("<","&lt;")} ${this.LTree.getNodeVal(telLid,"dataText") }${this.LTree.getNodeVal(telLid,"dataTail").replace("<","&lt;")} </li>`;
                    }else {
                        li=`<li>${this.LTree.getNodeVal(telLid,"dataHead").replace("<","&lt;")} <span class="diff">${this.LTree.getNodeVal(telLid,"dataText") }</span>${this.LTree.getNodeVal(telLid,"dataTail").replace("<","&lt;")} </li>`;
                    }
                }else if(telLid==null){
                    li=`<li class="diff"> &#62;&#62;</li>`;
                }else {
                    li=`<li class="diff">${this.LTree.getNodeVal(telLid,"dataHead").replace("<","&lt;")} ${this.LTree.getNodeVal(telLid,"dataText") } ${this.LTree.getNodeVal(telLid,"dataTail").replace("<","&lt;")} </li>`;
                }
                this.diffTree.list[l].li=li;
            }else {
                if(telLid!=null&&telRid!=null){
                    if(this.LTree.list[telLid].dataText==this.RTree.list[telRid].dataText){
                        uiHead=`<li>${this.LTree.getNodeVal(telLid,"dataHead").replace("<","&lt;")}${this.LTree.list[telLid].dataText}<ul>`;
                        uiTail=`</ul>${this.LTree.getNodeVal(telLid,"dataTail").replace("<","&lt;")}</li>`;
                    }else {
                        uiHead=`<li>${this.LTree.getNodeVal(telLid,"dataHead").replace("<","&lt;")}<span class="diff">${this.LTree.getNodeVal(telLid,"dataText") }</span><ul>`;
                        uiTail=`</ul>${this.LTree.getNodeVal(telLid,"dataTail").replace("<","&lt;")}</li>`;
                    }
                }else if(telLid==null){
                    uiHead=`<li><span class="diff">&#62;&#62;</span><ul>`;
                    uiTail=`</ul><span class="diff">&#62;&#62;</span></li>`;
                }else {
                    uiHead=`<li class="diff">${this.LTree.getNodeVal(telLid,"dataHead").replace("<","&lt;") }<span class="diff">${this.LTree.getNodeVal(telLid,"dataText") }</span><ul>`;
                    uiTail=`</ul>${this.LTree.getNodeVal(telLid,"dataTail").replace("<","&lt;")}</li>`;
                }
                /*let uiHead="";//"ui头<ul>"
           let uiTail=""; // "</ul>ui尾"*/
                this.diffTree.list[l].uiHead=uiHead;
                this.diffTree.list[l].uiTail=uiTail;
            }
        }
    }

    produceR(){
        let leng=this.diffTree.list.length;
        let uiHead="";
        let uiTail="";
        let li="";
        for(let l=0;l<leng;l++){
            uiHead="";
            uiTail="";
            li="";
            let telLid =this.diffTree.list[l].resLid;
            let telRid =this.diffTree.list[l].resRid;
            if(this.diffTree.list[l].r==null){
                if(telLid!=null&&telRid!=null){
                    if(this.LTree.getNodeVal(telLid,"dataText") ==this.RTree.getNodeVal(telRid,"dataText")){
                        li=`<li>${this.RTree.getNodeVal(telRid,"dataHead").replace("<","&lt;")} ${this.RTree.getNodeVal(telRid,"dataText") }${this.RTree.getNodeVal(telRid,"dataTail").replace("<","&lt;")} </li>`;
                    }else {
                        li=`<li>${this.RTree.getNodeVal(telRid,"dataHead").replace("<","&lt;")} <span class="diff">${this.RTree.getNodeVal(telRid,"dataText") }</span>${this.RTree.getNodeVal(telRid,"dataTail").replace("<","&lt;")} </li>`;
                    }
                }else if(telRid==null){
                    li=`<li class="diff"> &#60;&#60;</li>`;
                }else {
                    li=`<li class="diff">${this.RTree.getNodeVal(telRid,"dataHead").replace("<","&lt;")} ${this.RTree.getNodeVal(telRid,"dataText") }${this.RTree.getNodeVal(telRid,"dataTail").replace("<","&lt;")} </li>`;
                }
                this.diffTree.list[l].li=li;
            }else {
                if(telLid!=null&&telRid!=null){
                    if(this.LTree.list[telLid].dataText==this.RTree.list[telRid].dataText){
                        uiHead=`<li>${this.RTree.getNodeVal(telRid,"dataHead").replace("<","&lt;")}${this.RTree.list[telRid].dataText}<ul>`;
                        uiTail=`</ul>${this.RTree.getNodeVal(telRid,"dataTail").replace("<","&lt;")}</li>`;
                    }else {
                        uiHead=`<li>${this.RTree.getNodeVal(telRid,"dataHead").replace("<","&lt;")}<span class="diff">${this.RTree.getNodeVal(telRid,"dataText") }</span><ul>`;
                        uiTail=`</ul>${this.RTree.getNodeVal(telRid,"dataTail").replace("<","&lt;")}</li>`;
                    }
                }else if(telRid==null){
                    uiHead=`<li><span class="diff">&#60;&#60;</span><ul>`;
                    uiTail=`</ul><span class="diff">&#60;&#60;</span></li>`;
                }else {
                    uiHead=`<li class="diff">${this.RTree.getNodeVal(telRid,"dataHead").replace("<","&lt;") }<span class="diff">${this.RTree.getNodeVal(telRid,"dataText") }</span><ul>`;
                    uiTail=`</ul>${this.RTree.getNodeVal(telRid,"dataTail").replace("<","&lt;")}</li>`;
                }
                /*let uiHead="";//"ui头<ul>"
           let uiTail=""; // "</ul>ui尾"*/
                this.diffTree.list[l].uiHead=uiHead;
                this.diffTree.list[l].uiTail=uiTail;
            }
        }
    }
    make(id){
        if (this.diffTree.list[id].r == null) {
            let li= this.diffTree.list[id].li;//"<li class=\"diff\"> </li>";//li=`<li> &#62;&#62;</li>`;
            this.resStr= this.resStr +li;
            if (this.diffTree.list[id].l != null) {
                this.make(this.diffTree.list[id].l);
            }
        } else {
            let  uiHead=   this.diffTree.list[id].uiHead;
            let  uiTail=  this.diffTree.list[id].uiTail;
            this.resStr = this.resStr+uiHead ;
            this.make(this.diffTree.list[id].r);
            this.resStr = this.resStr + uiTail ;
            if (this.diffTree.list[id].l != null) {
                this.make(this.diffTree.list[id].l);
            }
        }
        return;
    }
}


/**
 function   LCS( tpl,  str,  strSt) {
            if (tpl.length == 0 && str.length == 0) {
                return new Array();
            } else if (tpl.length == 0) {
                let let5= new XmlDillNode()
                let5.setNode(strSt, str.length, 2)
                return   [ let5];
            } else if (str.length == 0) {
               let let4= new XmlDillNode()
                let4.setNode(strSt, tpl.length, 3, tpl)
                return  [let4];
            }

       let dp = new Array(tpl.length + 1);         //先声明一维
       for(let i=0;i<dp.length ;i++){          //一维长度为5
           dp[i]=new Array(str.length + 1);    //在声明二维
           for(let j=0;j<str.length + 1  ;j++){      //二维长度为5
               dp[i][j]=0;
           }
       }

       let maxi, maxj, maxk;
            maxi = maxj = maxk = 0;
            for (let i = 1; i <= tpl.length; i++) {
                for (let j = 1; j <= str.length; j++) {
                    if (tpl[i - 1] == str[j - 1]) {
                        dp[i][j] = dp[i - 1][j - 1] + 1;
                        if (dp[i][j] >= maxk) {
                            maxk = dp[i][j];
                            maxi = i;
                            maxj = j;
                        }
                    }
                }
            }

          let list = new Array();
            if (maxk == 0) {
                let tel1=new XmlDillNode()
                let tel2= new XmlDillNode()
                tel1.setNode(strSt, tpl.length, 3, tpl)
                tel2.setNode(strSt, str.length, 2)
                 list.push(tel1);
                 list.push(tel2);
            } else {
                let s=tpl.slice(0, maxi - maxk);
                let w=str.slice(0, maxj - maxk);
                let red=LCS(s, w, strSt);

                if(null!=red&&0<red.length){
                    list=  list.concat(red );
                }

               let tel3= new XmlDillNode();
                tel3.setNode(maxj - maxk, maxk, 1);
                 list.push(tel3);
                   let red2 =LCS(tpl.slice(maxi, tpl.length), str.slice(maxj, str.length), maxj);
                if(null!=red2&&0<red2.length){
                    list=    list.concat(red2  );
                }

            }
            return list;
      }
 **/
/*var list1=[
    {
        "id": 0,
        "pid": null,
        "dataHead": "<0>",
        "resLid":null,
        "resRid":null
    },
    {
        "id": 1,
        "pid": 0,
        "dataHead": "<1>",
        "resLid":null,
        "resRid":null
    },
    {
        "id": 2,
        "pid": 0,
        "dataHead": "<2>",
        "resLid":null,
        "resRid":null
    },
    {
        "id": 3,
        "pid": 0,
        "dataHead": "<3>",
        "resLid":null,
        "resRid":null
    },
    {
        "id": 4,
        "pid": 0,
        "dataHead": "<4>",
        "resLid":null,
        "resRid":null
    },
    {
        "id": 5,
        "pid": 0,
        "dataHead": "<5>",
        "resLid":null,
        "resRid":null
    },
    {
        "id": 6,
        "pid": 5,
        "dataHead": "<6>",
        "resLid":null,
        "resRid":null
    }
];
var list2=[
    {
        "id": 0,
        "pid": null,
        "dataHead": "<0>",
        "resLid":null,
        "resRid":null
    },
    {
        "id": 1,
        "pid": 0,
        "dataHead": "<1>",
        "resLid":null,
        "resRid":null
    },
    {
        "id": 2,
        "pid": 0,
        "dataHead": "<4>",
        "resLid":null,
        "resRid":null
    },
    {
        "id": 3,
        "pid": 0,
        "dataHead": "<3>",
        "resLid":null,
        "resRid":null
    },
    {
        "id": 4,
        "pid": 0,
        "dataHead": "<3>",
        "resLid":null,
        "resRid":null
    },
    {
        "id": 5,
        "pid": 0,
        "dataHead": "<5>",
        "resLid":null,
        "resRid":null
    }];

var kTree=new XmlTree();
var aTree=new XmlTree();


aTree.list=list1 ;
kTree.list=list2;
aTree.toLR();

kTree.toLR();
//kTree.toLR();


var contrast=new ContrastXml(aTree,kTree);
var wTree=contrast.contrast(null);
console.log(wTree.toString())


var shTree=new ShowTree();
var treTree=   shTree.buildTree(aTree,kTree,wTree,"R")

console.log(treTree)*/
/*
var list1=["<1>","<2>","<3>","<4>","<5>","<5>"]
var list2=["<1>","<4>","<3>","<3>","<5>"]
var list = contrast.LCS(list1, list2, 0);

list.forEach(function(node, index){
    if (node.op == 1) {
        console.log("没变:" + list2.slice(node.st, node.st + node.length).toString());
    } else if (node.op == 2) {
        console.log("添加:" + list2.slice(node.st, node.st + node.length).toString());
    } else if (node.op == 3) {
        console.log("减少:" + node.subTpl);
    }
})*/
