const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain'});

    res.end('Hell World\n');
});

server.listen(3000, () => {
    console.log('server is running on http://localhost:3000')
});