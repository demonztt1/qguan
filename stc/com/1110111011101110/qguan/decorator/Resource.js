import  ApplicationContext from '../ApplicationContext'
export function Resource(...list) {
    return function (target) {
        let context =ApplicationContext.getInstance();
      let obj=new target()
        for(let i=0;i<list.length;i++){
            obj[list[i]]= context.findBend(list[i])
        }
        context.saveBend(target.name,obj) ;
    }
}