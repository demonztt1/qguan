
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




console.log(MyTestableClass.isTestable)
; // true

