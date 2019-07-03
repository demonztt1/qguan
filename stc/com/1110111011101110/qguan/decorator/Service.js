
import  ApplicationContext from '../ApplicationContext'
import  AopFactory  from  '../AopFactory';

export function Service(...list) {
    return function (target) {
        let aopFactory=new AopFactory();
        let context =ApplicationContext.getInstance();
        let obj= aopFactory.createObj(list[0], target)
        context.saveBend(list[0],obj) ;
    }
}