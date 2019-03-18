
class ApplicationContext {

    constructor(){
        this.binds={}
    }

    static getInstance( ) {
        if(!this.instance) {
            this.instance =new ApplicationContext()
        }
        return this.instance;
    }


    findBind(bindName){
        if(this.binds[bindName] == null){
            throw  new Error();
        }
        return  this.binds[bindName];
    }

    addBind(bindName,obj){
        if(this.binds[bindName]!=null){
            throw  new Error();
        }
        this.binds[bindName]=obj;
    }
}




module.exports = ApplicationContext;