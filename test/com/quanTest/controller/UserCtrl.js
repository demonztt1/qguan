 import { Controller } from './stc/com/1110111011101110/qguan/http/Controller'
 import { Resource } from './stc/com/1110111011101110/qguan/decorator/Resource.js'
@Controller("/user")
 @Resource("a")
class UserCtrl{
   @Controller("/login")
    login(req,res){
        res.write('login');
        this.a.findA();
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