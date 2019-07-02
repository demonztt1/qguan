/**
 *   基本信息
 */
class About(){
    constructor(type,className ,path,module){
        this.className=className?className:"";// 类名称
        this.path=path?path:"";// 路径
        this.module=module?module:"" ;//模块 版本等
        this.type=type?type:"Abaot";
    }

    setClassName(className){
        this.className=className;
    }

    getClassName(){
        return this.className;
    }

    setPath(path){
        this.path=path;
    }

    getPath(){
        return this.path;
    }


    setModule(module){
        this.module=module;
    }

    getModule(){
        return this.module;
    }

    setType(type){
        this.type=type;
    }

    getType(){
        return this.type;
    }
}

module.exports = About;