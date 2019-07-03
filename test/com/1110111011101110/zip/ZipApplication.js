import JSZip from  'jszip'

import fs from  'fs'



var contentPromise = new JSZip.external.Promise(function (resolve, reject) {
    fs.readFile("out.zip", function(err, data) {
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
