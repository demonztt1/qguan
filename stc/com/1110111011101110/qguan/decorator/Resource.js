import  ApplicationContext from '../ApplicationContext'
export function Resource(...list) {
    return function (target) {
        let context =ApplicationContext.getInstance();
        target[list[0]]= context.findBind(list[0])
      let obj=new target()
        for(let i=0;i<list.length;i++){
            obj[list[i]]= context.findBind(list[i])
        }
        context.addBind(target.name,obj) ;
    }
}