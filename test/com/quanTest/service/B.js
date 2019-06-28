import { Resource } from './stc/com/1110111011101110/qguan/decorator/Resource.js'

@Resource("a")
class  B {
    constructor(){
        console.log("创建B")
    //   this.a.findA();
      //  this.runA();
    }
    runA(){
       if(this.a){
           this.a.findA();
       }
    }

}
  module.exports =  B;