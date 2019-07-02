
import {Aop} from "./stc/com/1110111011101110/qguan/aopDecorator/Aop";
@Aop("c",['findA'])
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
        console.log("异常  "+err)
    }
    around(){
        console.log(" around 执行")
    }

}



module.exports =  C;