import  ApplicationContext from '../ApplicationContext'
import  AopFun from '../entity/AopFun'
/**
 * 异常通知
 */
export function AfterThrowing(reg) {
    return function (target, name, descriptor) {
        if(reg){
            console.log("reg   " + reg);
        }
    }
}



