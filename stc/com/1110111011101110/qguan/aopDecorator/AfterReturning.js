
//后置通知

export function AfterReturning(reg) {
    return function (target, name, descriptor) {
        if(reg){
            console.log("reg   " + reg);
        }
    }
}
