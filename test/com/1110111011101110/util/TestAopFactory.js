import AopFactory from  '../../../../stc/com/1110111011101110/spring/util/ApplicationContext' ;


let aopFactory=AopFactory.getInstance();
let aopFactory1=AopFactory.getInstance();

console.log(aopFactory==aopFactory1)