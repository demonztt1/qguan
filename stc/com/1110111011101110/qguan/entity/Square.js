import About from './About'
import Example from './Example'
import Rule from './Rule'

/*
平
 */
class Square{
    constructor(type)
        this.about=new About();
        this.example =new Example()
        this.type=type;
        this.rule =new Rule();
    };

    saveBend(bend){
        this.external.setBend(bend)
    };
    findBend(){
        return this.external.getBend
    }

        setAbout(about){
            this.about=about;
        }

        getAbout(){
            return this.about;
        }
        setExample(example){
            this.example=example;
        }

        getExample(){
            return this.example;
        }
        setRule(rule){
            this.rule=rule;
        }

        getRule(){
            return this.rule;
        }


        setType(type){
            this.type=type;
        }

        getType(){
            return this.type;
        }



}

module.exports = Square;