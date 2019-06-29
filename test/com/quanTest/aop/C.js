
import {Aop} from "./stc/com/1110111011101110/qguan/aopDecorator/Aop";
@Aop("c")
class  C{
    constructor(){
        console.log(" 创建C")
    }
    before(){
        console.log(" before 执行")
    }
    after(){
        console.log(" after 执行")
    }
    afterReturning(){
        console.log(" afterReturning 执行")
    }
    afterThrowing(err){
        debugger;
        console.log(" afterThrowing 执行  "+err)
    }
    around(){
        console.log(" around 执行")
    }

}



module.exports =  C;