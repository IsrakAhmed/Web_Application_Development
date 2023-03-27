/*console.log("Hi");*/

/*var http = require('http');
var dt = require('./firstModule');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    //res.write("The time and date is currently : " + dt.getDate());
    res.write(req.url);
    res.end('Shei World!');
}).listen(8080);*/

/*var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);*/

/*var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {

    fs.readFile('demo.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });

    fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

}).listen(8080);*/

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {

    fs.rename('renamedFile.txt', 'mynewfile1.txt', function (err) {
        if (err) throw err;
        console.log('File Renamed!');
        res.write('File Renamed!');
        return res.end();
    });

}).listen(8080);