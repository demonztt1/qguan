var aopProxy = require("../../../../stc/com/1110111011101110/qguan/AopProxy");
class A{
    constructor(){
        this.s=0;
    }
    findId(){
        console
        return this.s;
    }
    setId(wwww){
        this.s=100;
    }
}
function  www() {
    console.log("www")
}

 let a=new A();
let proxy=new Proxy(a,{
    get(trapTarget, key, receiver){

        trapTarget.s=   a;
        return Reflect.get(trapTarget, key, receiver);
    }

})


class Funs{
    before(){
        console.log("before")
    }
    after(){
        console.log("after")
    }
    afterReturning(){

    }
    afterThrowing(){

    }
    around(){

    }
}
let funwws=new Funs();
funwws.after=function () {
    console.log("after111111")
}
funwws.before=function () {
    console.log("before11111")
}
let  sw=   aopProxy;
let aopFuns={};
aopFuns['findId']=funwws
sw.aopFuns=aopFuns;

let aopProxyImpn=new Proxy(  A ,    sw   )
/*aopProxyImpn.addFuns( 'findId','after',www)*/
let sop=new aopProxyImpn();

let sopImpn=new Proxy(  sop ,  sw  )
sopImpn.setId('wwwwww');
console.log( sopImpn.findId())