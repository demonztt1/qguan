import  ApplicationContext from  './ApplicationContext';
import  RunLoad  from  './utils/RunLoad';
import  ZipLoad  from  './utils/ZipLoad';
import  HttpContex  from  './http/HttpContex';
import  AopContext  from './aopDecorator/AopContext';
import  {Aop}  from './aopDecorator/Aop';
import  DirLoad from './utils/DirLoad'


import  WebServer from './http/WebServer'
import  {Service}   from  './decorator/Service';
import  {Resource}   from  './decorator/Resource';

import  {Controller}   from  './http/Controller';
const inBrowser = typeof window !== 'undefined'

class QGuanRunApplication{

    constructor(str,resolve){
      // this.applicationContext =ApplicationContext.getInstance();
        console.log("启动 轻管")
        let context=  this.applicationContext=ApplicationContext.getInstance();

        if(inBrowser){
            window.qGuan=context
        }else {
            global.qGuan =context
        }

        let aopContext=new AopContext();
         context.saveBend('aopContext',aopContext) ;// aop
        let dirLoad=new DirLoad();
        context.saveBend('dirLoad',dirLoad) ;//文件夹扫描
        let zipLoad=new ZipLoad();
        context.saveBend('zipLoad',zipLoad) ;//文件夹扫描
       // let service=new Service();
        context.saveBend("service",Service);

        context.saveBend("controller",Controller);

        context.saveBend("resource",Resource);

        context.saveBend("aop",Aop);
        let http=new HttpContex();
        context.saveBend('http',http) ;//文件夹扫描



        return  RunLoad(resolve,str);


    }

}





export function runApplication(...list) {
    return function (target) {
        new Promise(function(resolve ){
           return new QGuanRunApplication(list,resolve)
        }).then(function(){
           let webServer= new WebServer()
            webServer.load(8080)
        }).then(function () {
            console.log("启动成功")
        });


    }
}
