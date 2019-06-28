var express = require('express');

var bodyParser = require('body-parser');

class  ExpressLoad  {
    constructor(port){
        this. app = express();
        //处理post字段请求
        this. app.use(bodyParser.json());
        this. app.use(bodyParser.urlencoded({ extended: true }));

        if(null==port) {
            port=8080
        }
        this. app.listen(port, () => {
            console.log('Express server listening on port ' + port);
        });
    }
}

module.exports =ExpressLoad;