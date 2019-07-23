
 let Controller =qGuan.find("controller")
 let Resource =qGuan.find("resource")
@Controller("/user")
 @Resource("a")
class UserCtrl{
   @Controller("/login")
    login(req,res){
      // console.log(this )
   this.a.findA();
        res.write('login');

        return;
    }

   @Controller("/getList")
    getList(req,res){
        res.write('getList');
        return;
    }


    @Controller("/register")
    register(req,res){
        res.write('register');
        return;
    }
}


module.exports =  UserCtrl;