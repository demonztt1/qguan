var proxy = require("Proxy");

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