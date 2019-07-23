import ApplicationContext from "../ApplicationContext";
import Rule from "./entity/Rule";
export function Controller(url) {
    return function (target, name, descriptor) {
        let context =ApplicationContext.getInstance();
        if(!target.name){
            let obj= context.find(target.constructor.name)
            let rule=new  Rule(target.constructor.name,name,url)
            if(!obj){
                obj=   new target.constructor();
                context.saveBend(target.constructor.name,obj) ;
            }
            context.addBend(rule);
        }else {
            for(let i=0;i< context.bendArray.length;i++){
                let bend= context.bendArray[i];
                if(bend.className==target.name&&bend.type=="http"){
                    context.bendArray[i].reg=url+context.bendArray[i].reg;
                }
            }
        }
    }
}