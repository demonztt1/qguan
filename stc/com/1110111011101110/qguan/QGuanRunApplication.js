
import  ApplicationContext from  './ApplicationContext';
import  RunLoad  from  './utils/RunLoad';
import  ZipLoad  from  './utils/ZipLoad';
import  HttpContex  from  './http/HttpContex';
import  AopContext  from  './context/AopContext';

import  DirLoad from './utils/DirLoad'


import  WebServer from './http/WebServer'



class QGuanRunApplication{

    constructor(str,resolve){
      // this.applicationContext =ApplicationContext.getInstance();
        console.log("启动 轻管")
        let context=  this.applicationContext=ApplicationContext.getInstance();

        let aopContext=new AopContext();
         context.saveBend('aop',aopContext) ;// aop
        let dirLoad=new DirLoad();
        context.saveBend('dirLoad',dirLoad) ;//文件夹扫描
        let zipLoad=new ZipLoad();
        context.saveBend('zipLoad',zipLoad) ;//文件夹扫描

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
         /*   let httpContex=  new HttpContex()
            debugger;
            let bends=httpContex.findBend();
           debugger;
            webServer.use('user',bends[0])*/
            webServer.load(8080)
        }).then(function () {
            console.log("启动成功")
        });


    }
}
