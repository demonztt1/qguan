import ApplicationContext from "../ApplicationContext";
class HttpContex{
    constructor(){
        this.context=ApplicationContext.getInstance();
    }

    findBend(req,res,url,type){
        let urlw=req.url;
        for(let i=0;i<this.context.bendArray.length;i++){
            let bend=this.context.bendArray[i];
            debugger;
            if(bend.reg==urlw&&bend.type=="http"){
               let obj= this.context.findBend(bend.className);
                obj[bend.method](req,res,url,type);

            }
        }
    }
}

module.exports =  HttpContex;