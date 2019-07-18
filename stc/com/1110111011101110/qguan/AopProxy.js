

class AopFun{
    before(){
        console.log(" before 执行")
    }
    after(){
        console.log(" after 执行")
    }
    afterReturning(){
        console.log(" afterReturning 执行")
    }
    afterThrowing(){
        console.log(" afterThrowing 执行")
    }
    around(){
        console.log(" around 执行")
    }

}

  class    AopProxy    {
    findFuns(key){

        let aopFun=this.aopFuns

        if(null==aopFun){
            return new AopFun();
        }
        return aopFun;
    }
    get(trapTarget, key, receiver) {
        let oldValue = trapTarget[key];
        let fun=  this.findFuns(key);
        trapTarget[key] = function () {
            fun.before.apply(this, arguments);
            let ret;
            try {
                 ret = oldValue.apply(this, arguments);
            }catch (err){
                fun.afterThrowing(err);
            }

            fun.after.apply(this, arguments);
            return ret
        };
        let res= Reflect.get(trapTarget, key, receiver);
        return res;
        }

     set(trapTarget,proName,proValue,receiver) {
         let oldValue = trapTarget[proName];
         let fun=  this.findFuns(proName);
         trapTarget[proName] = function () {
             fun.before.apply(this, arguments);
             let ret;
             try {
                 ret = oldValue.apply(this, arguments);
             }catch (err){
                 fun.afterThrowing(err);
             }
             fun.after.apply(this, arguments);
             return ret
         };
         let res= Reflect.get(trapTarget,proName,proValue,receiver);
         return res;
     }



}

module.exports = AopProxy;