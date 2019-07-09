/**
 * 规则信息
 * 执行前的条件
 */
class Rule{
    constructor(className,method,reg,type){
        this.className=className?className:"";//类
        this.method=method?method:"";// 方法
        this.reg=reg?reg:"*" ;//方法正则
        this.type=type?type:"http";
    }

}

module.exports = Rule;