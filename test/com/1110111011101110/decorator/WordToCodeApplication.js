import qguan from '../../../../stc/com/1110111011101110/qguan/utils/qguan.js'
var  s=`@testable("/config/spring.config")
class WebPdfApplication { constructor(){ }}`


function testable(isTestable) {
    console.log(isTestable);
    return function(target) {
        target.isTestable = isTestable;
    }
}
//字符串转字节码
/*
可惜不支持 @注解
让我好惆怅
 */
function requireFromString(src, filename) {
    var Module = module.constructor;
    var m = new Module();
    m._compile(src, filename);
    return m.exports;
}



 let rr=requireFromString(
     'class WebPdfApplication { constructor(){ }}' +
     'module.exports = WebPdfApplication','WebPdfApplication' )



console.log(rr.isTestable)
; // true

