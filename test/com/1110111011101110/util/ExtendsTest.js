

class A  {
    a(){
    console.log("A.a")}
    b(){
        console.log("A.b")}
}

class B extends A {
    a(){
        console.log("B.a")
    }
}

b= new B();

b.a()
b.b();
