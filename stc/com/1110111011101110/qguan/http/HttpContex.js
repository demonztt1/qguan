import ApplicationContext from "../ApplicationContext";
class HttpContex{
    constructor(){
        this.context=ApplicationContext.getInstance();
    }

    findBend(req,res,url,type){
        let urlw=req.url;
        for(let i=0;i<this.context.bendArray.length;i++){
            let bend=this.context.bendArray[i];

            if(bend.reg==urlw&&bend.type=="http"){
               let obj= this.context.findBend(bend.className);

                httpRun  (obj,obj[bend.method],req,res,url,type)
               /*let httpProxy =new HttpProxy(obj,bend.method);
               let httpObj=   new Proxy(httpRun, httpProxy)
                httpObj.run(req,res,url,type);*/

            }
        }
    }
}
function   httpRun(obj,method, req,res,url,type) {
    method.call(obj,req,res,url,type)
}
class    HttpProxy    {
    constructor(obj,method){
        this.obj=obj
        this.method=method;
    }
    get(trapTarget, key, receiver) {
        let oldValue = this.obj[this.method];

        trapTarget[key] = function () {
            return   oldValue.apply(obj, arguments);
        };
        debugger;
        let res= Reflect.get(this.obj, this.method, this.obj);
        return res;
    }

    set(trapTarget,proName,proValue,receiver) {
        let oldValue = this.obj[this.method];

        trapTarget[proName] = function () {
            return   oldValue.apply(this, arguments);
        };
        let res= Reflect.get(this.obj, this.method,proValue,receiver);
        return res;
    }



}


module.exports =  HttpContex;