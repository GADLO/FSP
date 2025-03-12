const express = require('express');
const server = require('http').createServer();
const app = express();
const port = 3000;

app.get('/', function (req, res) {
	res.sendFile('index.html', { root: __dirname });
});

server.on('request', app);
server.listen(port, () => console.log('server started on port 3000')
)
