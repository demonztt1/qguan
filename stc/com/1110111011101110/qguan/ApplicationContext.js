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
        return  this.binds[bindName];
    }
    //通过class名称获取Bing
    findBindByClssName(className){
        return  this.binds[className];
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

    //通过路径正则获取对象
    findBendByPathRegular(reg){
        return  this.binds[reg];
    }

}




module.exports = ApplicationContext;