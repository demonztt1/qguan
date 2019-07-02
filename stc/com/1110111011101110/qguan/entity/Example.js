/**
 * 实例信息
 */
class Example(){
    constructor(bend,type ,status,example){
        this.example=example:example?0;// 实例数量
        this.status=status?status:true;// 状态
        this.bend=bend; //实例
        this.type=type?type:"Example";
    }
    setBend(bend){
        this.bend=bend;
    };
    getBend(){
        return this.bend;
    }
    setStatus(status){
        this.status=status;
    }
    getStatus(){
        return this.status;
    }
   setExample(example){
        this.example=example;
    }

    getExample(){
        return this.example;
    }
    setType(type){
        this.type=type;
    }

    getType(){
        return this.type;
    }

}

module.exports = Example;