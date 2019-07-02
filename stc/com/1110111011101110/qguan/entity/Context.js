import Square from './Square'

class  Context{
    constructor(){
        bends={}
    }
    saveBend(name,bend,type){
         let square=new Square(type);
        square.saveBend(bend)
        this.bends[name]=bend;
    }

    findBendRunMsg(name){
        return  this.bendBase.bend;
    }
}


module.exports = Bends;