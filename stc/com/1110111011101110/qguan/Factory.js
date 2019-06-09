var proxy = require("stc/com/1110111011101110/qguan/Proxy");

/*
before,after,afterReturning,afterThrowing,around
 */
class Factory(){
    constructor(obj){
        this.loader= new proxy(Object.assign(obj))
    }
    run(method,args){
        this.loader.run(method,args);
    }
}
module.exports = Factory;