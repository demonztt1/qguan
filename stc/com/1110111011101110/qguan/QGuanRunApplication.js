
import  ApplicationContext from  './ApplicationContext';
import  RunLoad  from  './utils/RunLoad';
import  AopFactory  from  './AopFactory';
import  AopContext  from  './context/AopContext';

import fs from  'fs'
import path  from  'path'
import  DirLoad from './utils/DirLoad'

class QGuanRunApplication{

    constructor(str){
      // this.applicationContext =ApplicationContext.getInstance();
        console.log("启动 轻管")
        let context=  this.applicationContext=ApplicationContext.getInstance();

        let aopContext=new AopContext();
         context.saveBend('aop',aopContext) ;// aop
        let dirLoad=new DirLoad();
        context.saveBend('dirLoad',dirLoad) ;//文件夹扫描

        RunLoad();

    }

}



export function runApplication(...list) {
    return function (target) {
        new QGuanRunApplication(list)
    }
}
