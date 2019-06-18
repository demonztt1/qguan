
var springProxy = require("../../../../stc/com/1110111011101110/qguan/Proxy");




var loadDir = require('../../../../stc/com/1110111011101110/qguan/utils/Load_dir');
/*var springProxy = require("./proxy");
*/
var Module = loadDir('../../../../../test/com/1110111011101110/module');

//Module.a(); // print module a
//Module.b(); // print module b
//Module.index();

var obj =new springProxy(new Module.b() )
obj.run("c",[])





/*class  A{
    ss(a,b){
        console.log("A..ss"+a+b)
    }

}*/
//动态代理对象
/*new springProxy(new A(),"ss",["1","2"]);*/

