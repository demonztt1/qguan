import JSZip from  'jszip'

import fs from  'fs'


var zip = new JSZip();
zip.file("Hello.", "hello.txt");
 //zip.file("file", content);
// ... and other manipulations

zip
    .generateNodeStream({type:'nodebuffer',streamFiles:true})
    .pipe(fs.createWriteStream('out.zip'))
    .on('finish', function () {
        // JSZip generates a readable stream with a "end" event,
        // but is piped here in a writable stream which emits a "finish" event.
        console.log("out.zip written.");
    });
; // true

