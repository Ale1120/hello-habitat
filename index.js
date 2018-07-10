const https = require('http');
const hostname = '0.0.0.0';
const port = 3000;


const server = htpp.createServer((req, res) => {
	res.statusCode= 200;
	res.serHeader('Content-Type', 'text/plain');
	res.end('Hello, World');
});



server.listen(port, hostname, () => {
	console.log('Server runnning at http://${hostname}:${port}/');

});
