var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/'));
// });

app.use("/", express.static(__dirname + '/'))

app.listen(8080);
console.log('serving on: localhost:8080');