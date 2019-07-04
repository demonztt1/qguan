import JSZip from  'jszip'
import path from  'path';
import fs from  'fs'


class  ZipLoad{
    load(dir){
        var contentPromise = new JSZip.external.Promise(function (resolve, reject) {
            fs.readFile(path.resolve()+'/lib/'+dir+".jsr", function(err, data) {
                if (err) {
                    reject(e);
                } else {
                    //  console.log(data);
                    resolve(data);
                }
            });
        });

        contentPromise.then(function (data) {
            JSZip.loadAsync(data).then(function (zip) {
                return zip.folder();
            }).then(function (text) {
                console.log(text);
            });
            //  return JSZip.loadAsync(data);
        })

    }
}

module.exports =ZipLoad ;