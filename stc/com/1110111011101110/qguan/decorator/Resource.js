import  ApplicationContext from '../ApplicationContext'
export function Resource(...list) {
    return function (target) {
        let context =ApplicationContext.getInstance();
        let obj= context.find(target.name);
        if(!obj){
            obj=   new target();
        }
        for(let i=0;i<list.length;i++){
            obj[list[i]]= context.find(list[i])
        }
        context.saveBend(target.name,obj) ;
    }
}