/**
 * 规则信息
 * 执行前的条件
 */
class Rule(){
    constructor(type,reg,methodReg,sort){
        this.sort=sort?sort:0;// 排序
        this.reg=reg?reg:*;// 正则
        this.methodReg=methodReg?methodReg:* ;//方法正则
        this.type=type?type:"Rule";
    }
    setSort(sort){
        this.sort=sort;
    }

    getSort(){
        return this.sort;
    }
    setReg(reg){
        this.reg=reg;
    }

    getReg(){
        return this.reg;
    }
    setMethodReg(methodReg){
        this.methodReg=methodReg;
    }

    getMethodReg(){
        return this.methodReg;
    }


    setType(type){
        this.type=type;
    }

    getType(){
        return this.type;
    }
}

module.exports = Rule;