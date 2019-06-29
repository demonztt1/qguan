
/**
 * 环绕通知
 */

export function Around(reg) {
    return function (target, name, descriptor) {
        if(reg){
            console.log("reg   " + reg);
        }
    }
}

