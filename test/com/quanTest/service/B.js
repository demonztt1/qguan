
let Resource =qGuan.find("resource")
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