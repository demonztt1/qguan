
import  ApplicationContext from  './ApplicationContext';
import  RunLoad  from  './utils/RunLoad';
import  AopFactory  from  './AopFactory';
import fs from  'fs'
import path  from  'path'
import  DirLoad from './utils/DirLoad'

class QGuanRunApplication{

    constructor(str){
      // this.applicationContext =ApplicationContext.getInstance();
        console.log("启动 轻管")

        console.log(str)
        DirLoad(str[0])
       /* this.aopFactory=new AopFactory();

        var A=fs.readFileSync(path.resolve()+'/test/com/quanTest/service/A.js','utf8');
        var B=fs.readFileSync(path.resolve()+ '/test/com/quanTest/service/B.js','utf8');
          this.aopFactory.createObj("a",A);

      this.aopFactory.createObj("b",B);*/
   /*    let classB= ApplicationContext.getInstance().findBind("B")
        classB.runA()*/
         //  debugger;

    }

}



export function runApplication(...list) {
    return function (target) {
        new QGuanRunApplication(list)
    }
}
