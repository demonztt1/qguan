
/**
 * 最终通知
 */

export function After(reg) {
    return function (target, name, descriptor) {

        if(reg){
            console.log("reg   " + reg);
        }
    }
}
