
import { Service } from './stc/com/1110111011101110/qguan/decorator/Service.js'

@Service("a")
class  A{
    constructor (){
        console.log("创建 A")
}
    findA(){
        console.log("执行 A")
       // throw Error('参数1、参数2不能为空');
    }
}


module.exports =  A;