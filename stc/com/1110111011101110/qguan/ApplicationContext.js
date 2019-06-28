/**
 * 上下文
 */
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

    //获取bing
    findBind(bindName){
        if(this.binds[bindName] == null){
            throw  new Error();
        }
        return  this.binds[bindName];
    }
    //添加bing
    addBind(bindName,obj){
        if(this.binds[bindName]!=null){
            throw  new Error();
        }
        this.binds[bindName]=obj;
    }
    //删除bing
    removeBind(bindName){
      delete  this.binds[bindName];
    }

}




module.exports = ApplicationContext;