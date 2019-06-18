/**
 * js 动态代理
 */

class QGuanProxy{
    constructor(obj ){
        this.loader=Object.assign(obj);
    }
    ergodic (par){
            let res=""
            if(par.length>0){
                res="args[0]"
            }
           for(let w=1;w<par.length;w++){
            res=res+",args["+w+"]"
         }
     return res;
    }
    run(method,args){
        eval("this.loader."+ method + "(" + this.ergodic(args)+")")
    }
}

module.exports = QGuanProxy
