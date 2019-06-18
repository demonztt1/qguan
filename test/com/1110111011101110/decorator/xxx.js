
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

