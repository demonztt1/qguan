import AopProxy from './AopProxy'

//  生成对象工厂
class AopFactory{

    findFun(){

        import bind from   bindPath
        let  aopProxy= new  AopProxy;
        aopProxy.iocs=new Array();

        let bindClass=new Proxy(bind, aopProxy)
        aopProxy.aopFuns={}
        let bindImpl=new bindClass();
        let sopImpn=new Proxy(  bindImpl ,  aopProxy  )
    }
}


module.exports = AopFactory;