

class AopFun{
    before(){
    }
    after(){
    }
    afterReturning(){

    }
    afterThrowing(){

    }
    around(){

    }
}

  let    AopProxy =  {
    findFuns(key){
        let aopFun=this.aopFuns[key];
        if(null==aopFun){
            return new AopFun();
        }
        return aopFun;
    },
    get(trapTarget, key, receiver) {
        let fun=  this.findFuns(key);
        fun.after();
        let res= Reflect.get(trapTarget, key, receiver);
        fun.before();
        return res;
        },

     set(trapTarget, key, receiver) {
         let fun=  this.findFuns(key);
         fun.after();
         let res= Reflect.set(trapTarget, key, receiver);
         fun.before();
         return res;
     },

     construct (trapTarget, argumentList )
    {

        let res= Reflect.construct(trapTarget, argumentList);
        return res;
    }


}

module.exports = AopProxy;