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

        if( qGuan.inBrowser){
            this.options= {
                "plugins": [
                    ["proposal-decorators" , { "legacy": true }],
                    ["syntax-dynamic-import"]

                ]
            }
            //web 字符串动态加载
            this.requireFromString=function(code, filename) {
                var head = document.getElementsByTagName('head')[0];
                var script=document.createElement('script');
                script.type="module";

                    if(script.readyState){
                        script.onreadystatechange=function(){
                            if(script.readyState == "loaded" || script.readyState == "complete"){
                                script.onreadystatechange=null;
                            }
                        }
                    }
                script.innerHTML=code
                head.appendChild(script);
            }
        }else {
            this. options= { presets: [ '@babel/env' ],
                "plugins": [
                    ["@babel/plugin-proposal-decorators", { "legacy": true }],
                    ["@babel/plugin-syntax-dynamic-import"]

                ]
            }
            //nodejs 字符串动态加载
            this.requireFromString=function(code, filename) {
                var Module = module.constructor;
                var m = new Module();
                m._compile(code, filename);
                return m.exports;
            }
        }

        this.applicationContext=ApplicationContext.getInstance();

    }


    /**
     * 通过code直接创建
     */
    createCodeObj(name,code){
        babel.transformAsync(code, this.options).then(result => {
           let codeobj=   this.requireFromString(result.code, name);
            return codeobj;
        });
    }
    //生成普通实体类
    createObj(name,target) {
        //es6代码转换 es5代码
        if (this.applicationContext.aop) {
            let obj=new  target();
            return    this.createAopObj(name,obj,{});
        }else {
            return new target();
        }
    }


    //生成 aop 的实体类
    createAopObj(name,obj,reg){
        let  regf = this.applicationContext.find(name,obj,reg,'aopContext')
        let  aopProxy= new  AopProxy();
        aopProxy.aopFuns=regf
        return new Proxy(obj, aopProxy)

    }
}


module.exports = AopFactory;