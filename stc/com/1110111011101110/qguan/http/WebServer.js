import http  from "http";

import ApplicationContext from "../ApplicationContext";
class WebServer{


    load(port){
        http.createServer(function(req,res){

            // 获取请求主体内容
            let body = 'xxxxxxxxxx';
            req.on('data', function (thunk) {
            });
            req.on('end', function () {
                res.setHeader('Content-Type', 'text/html');
                this.context= ApplicationContext.getInstance()
                this.context.findBend(req,res,null,"http")
                res.end();
            });
        }).listen(port);
    }
}

module.exports = WebServer;