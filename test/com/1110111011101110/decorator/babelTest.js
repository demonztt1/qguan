var babel = require("@babel/core");

function testable(isTestable) {
    console.log(isTestable);
    return function(target) {
        target.isTestable = isTestable;
    }
}


let code=`

function testable(isTestable) {
    console.log(isTestable);
    return function(target) {
        target.isTestable = isTestable;
    }
}

@testable("x","xxxx")
class MyTestableClass {

    constructor(){
        //@dec("x","xxxx")
    }

}


function dec(id){
    console.log('evaluated', id);
    return (target, property, descriptor) => console.log('executed', id);
}

console.log(MyTestableClass.isTestable)
; // true
module.exports = MyTestableClass
`

let options= { presets: [ '@babel/env' ],
    "plugins": [
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ["@babel/plugin-syntax-dynamic-import"]

    ]
}



/*
 动态加载模块
 */
function requireFromString(src, filename) {
    var Module = module.constructor;
    var m = new Module();
    m._compile(src, filename);
    return m.exports;
}


//es6代码转换 es5代码
babel.transformAsync(code,options).then(result => {
console.log( result.code)

    let rr=requireFromString( result.code,'WebPdfApplication' )



    console.log(rr.isTestable)
    result.code;
    result.map;
    result.ast;
});





