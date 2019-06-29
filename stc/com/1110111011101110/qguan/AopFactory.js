import AopProxy from './AopProxy'
var babel = require("@babel/core");
import  ApplicationContext from './ApplicationContext'
/**
 * aop工厂
 *
 * 处理类一个
 * 实体类一个
 *
 * 返回被aop过的处理过的类
 */
class AopFactory{
    constructor(){
        //es5转 es6的选项  import 加 注解 @ decorator
        this. options= { presets: [ '@babel/env' ],
            "plugins": [
                ["@babel/plugin-proposal-decorators", { "legacy": true }],
                ["@babel/plugin-syntax-dynamic-import"]

            ]
        }
        this.applicationContext=ApplicationContext.getInstance();

    }
    //nodejs 字符串动态加载
    requireFromString(src, filename) {
        var Module = module.constructor;
        var m = new Module();
        m._compile(src, filename);
        return m.exports;
    }
    //生成普通实体类
    createObj(name,code){
        //es6代码转换 es5代码
         babel.transformAsync(code,this.options).then(result => {
            return     this.requireFromString( result.code,name );
        });
    }

    //生成 aop 的实体类
    createAopObj(name,obj,reg){
        let  regf = this.applicationContext.findBendByPathRegular(reg)
        let  aopProxy= new  AopProxy();
        aopProxy.aopFuns=regf
        return new Proxy(obj, aopProxy)

    }
}


module.exports = AopFactory;