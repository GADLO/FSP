const http = require('http');

http.createServer(function (req, res) {
	res.write('On the way to being full stack engineer! test githun.sh');
	res.end();
}).listen(3000);
console.log("Server started on port 3000")
