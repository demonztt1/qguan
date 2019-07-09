


//初始加载

import path from 'path';
import  fs from  'fs';

import  ApplicationContext from '../ApplicationContext'


function RunLoad(resolve,isTestable) {

    let myPath = path.resolve()+'/qguan.config';
    let context=ApplicationContext.getInstance();
    fs.readFile(myPath ,'utf-8', function(err, data) {
        // 读取文件失败/错误
        if (err) {
            throw err;
        }
        // 读取文件成功
        let lint=data.split(/[\r\n]/);
        for (let i=0;i<lint.length;i++){
            let word =lint[i].split(',');
            let load;
            if(word.length>3){

                load =context.findBend(word[3].trim());
            }
            if(load){
                load.load(word[0].trim(),word[1].trim(),word[2].trim(),word[3].trim());
            }
        }
        return resolve('200 OK');
    });
}

module.exports =RunLoad ;