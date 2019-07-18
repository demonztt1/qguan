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

               let httpRun =new HttpRun();
               let httpProxy =new HttpProxy(obj,bend.method);
                debugger;
               let httpObj=   new Proxy(httpRun, httpProxy)

                debugger;
                httpObj.run(req,res,url,type);

            }
        }
    }
}
class HttpRun{
    run(req,res,url,type){
    }
}
class    HttpProxy    {
    constructor(obj,method){
        this.obj=obj
        this.method=method;
    }
    get(trapTarget, key, receiver) {
        let oldValue = this.obj[this.method];

        trapTarget[key] = function () {
            return   oldValue.apply(this, arguments);
        };
        let res= Reflect.get(this.obj, this.method, receiver);
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