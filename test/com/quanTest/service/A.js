
import { Service } from './stc/com/1110111011101110/qguan/decorator/Service.js'

@Service("a")
class  A{
    constructor (){
        console.log("创建 A")
}
    findA(){
        console.log("执行 A")
    }
}


module.exports =  A;