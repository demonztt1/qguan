/**
 * 上下文
 */
class ApplicationContext {

    constructor(){
        this.bends={}
    }

    static getInstance( ) {
        if(!this.instance) {
            this.instance =new ApplicationContext();
        }
        return this.instance;
    }

    /**
     * 获取bend
     * @param name
     * @param obj
     * @param value
     * @param type
     */
    findBend(name,obj,value,type){
        if(type){
            let typeObj= this.bends.findBend(type);
            return typeObj.findBend(name,obj,value,type);
        }
         return this.bends[name];
    }

    /**
     * 添加 bend
     * @param name
     * @param obj
     * @param value
     * @param type
     */
    saveBend(name,obj,value,type){
        if(type){
            let typeObj= this.bends.findBend(type);
            typeObj.saveBend(name,obj,value,type);
            return;
        }
        this.bends[name]=obj;
    }
    /**
     * 删除bing
     * @param name
     * @param obj
     * @param value
     * @param type
     */
    removeBend(name,obj,value,type){
        if(type){
            let typeObj= this.bends.findBend(type);
            typeObj.removeBend(name,obj,value,type);
            return;
        }
          delete  this.bends[BendName];
    }


}




module.exports = ApplicationContext;