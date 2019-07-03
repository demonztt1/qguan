
import  ApplicationContext from '../ApplicationContext';

export function Aop(...list) {
    return function (target) {
        let context =ApplicationContext.getInstance();
        context.aop=true;
        context.saveBend(list[0],new target()) ;
    }
}