
//前置通知
export function Before(reg) {
    return function (target, name, descriptor) {

        if(reg){
            console.log("reg   " + reg);
        }
    }
}
