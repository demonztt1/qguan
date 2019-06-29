
import  ApplicationContext from '../ApplicationContext';

export function Aop(...list) {
    return function (target) {
        let context =ApplicationContext.getInstance();
        context.addBind(list[0],new target()) ;
    }
}