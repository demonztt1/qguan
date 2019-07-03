import  fs  from  'fs';
import path from  'path';
import glob from  'glob';
import  AopFactory  from  '../AopFactory';
/**
 * 扫描路径
 * @param path
 * @param name
 * @returns {*}
 */
class DirLoad{
    load(dir){
        let aopFactory=new AopFactory();
        var jsDir =path.resolve()+"/" +dir
        let entryFiles = glob.sync(jsDir + '/*.js')
        for (let i = 0; i < entryFiles.length; i++) {
            let filePath = entryFiles[i];
            let filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'));
            filename = filename.replace(filename[0],filename[0].toLowerCase()); //首字母转小写
            let code=fs.readFileSync(filePath,'utf8');
            aopFactory.createCodeObj(filename,code);
        }
    }
}


module.exports = DirLoad;