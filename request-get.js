var request = require("request");
var fs = require("fs");

console.log("Downloading image...");

  request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log('Response Status Code: ', response.statusCode, ' congratulations!');
       })
       .pipe(fs.createWriteStream('./future.jpg'));

console.log("Download complete");
