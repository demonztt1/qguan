
import  ApplicationContext from '../ApplicationContext'
import  AopFactory  from  '../AopFactory';

export function Service(...list) {
    return function (target) {
        let aopFactory=new AopFactory();
        let context =ApplicationContext.getInstance();
        let obj= aopFactory.createAopObj({},new target())
        obj.findA()
        context.addBind(list[0],obj) ;

    }
}