
class Context(){
    constructor(){
        this.bend={};
    }

    findBend(name){
        return   Object.assign(this.bend[name]);
    };

    addBend(name,obj){
        this.bend[name]=obj;
    };

    delBend(name){
        delete this.bend[name];
    }
    findList(name){
        return   this.bend;
    };

}