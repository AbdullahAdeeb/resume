var express = require('express');

var http = require('http');

var request = require('request');

// var fs = require('fs');

// var options = {

//     key: fs.readFileSync('key.pem'),

//     cert: fs.readFileSync('certificate.pem')

// };



var app = express();

var server = http.createServer(app);

// var server = https.createServer(options, app);



// Local web server port http://localhost:80

var port = 3000;



// MFP url, unless set in npm start arg, this is set to localhost:9080

// var mfpURL = process.argv[2] || 'https://sdadotapp.cch.pok.ibm.com:9443';

server.listen(port);




// Web server - serves the Client-side

app.use('/', express.static(__dirname + '/build'));

var livereload = require('livereload');
var lrserver = livereload.createServer();
lrserver.watch(__dirname + "/build");
console.log('serving at localhost:3000');