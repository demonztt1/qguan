import express  from 'express';



class WebServer{
    constructor(){
         this.app = express();
        this.app.get('/',function(req,res){
            res.send('请求home成功');
        })
        let port =  8080;
        this. app.listen(port, () => {
            console.log('Express server listening on port ' + port);
        });
    }
}

new WebServer()
