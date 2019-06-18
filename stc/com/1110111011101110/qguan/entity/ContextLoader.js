import ApplicationContext from '../ApplicationContext'

class ContextLoader{

    constructor(){
        this.applicationContext =   ApplicationContext.current();
        this.binds={}
    }

    static getInstance( ) {
        if(!this.instance) {
            this.instance =new ContextLoader()
        }
        return this.instance;
    }




}