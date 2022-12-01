const http = require("http");
const fs = require('fs');

//create a server object:
http.createServer(function (req, res) {
	console.log(req.headers.host + " " + req.url);
	if (req.url == '/' || req.url == '/index.html') {
		fs.readFile(__dirname + '/data/index.html', function (err, data) {
			res.writeHead(200);
			res.end(data);
		});
	} else if (req.url == '/style.css') {
		fs.readFile(__dirname + '/data/style.css', function (err, data) {
			res.setHeader('Content-type', 'text/css')
			res.writeHead(200);
			res.end(data);
		});
	} else if (req.url == '/script.js') {
		fs.readFile(__dirname + '/data/script.js', function (err, data) {
			// res.setHeader('Content-type', 'application/json')
			res.setHeader('Content-type', 'text/javascript')
			res.writeHead(200);
			res.end(data);
		});
	} else if (req.url == '/data.json') {
		fs.readFile(__dirname + '/data/content.json', function (err, data) {
			// res.setHeader('Content-type', 'application/json')
			res.setHeader('Content-type', 'text/javascript')
			res.writeHead(200);
			res.end(data);
		});
	} else {
		res.writeHead(404)
		res.end("Not Found")
	}
}).listen(80); //the server object listens on port 8080