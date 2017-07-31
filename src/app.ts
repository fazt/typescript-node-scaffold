import * as http from 'http';

const server = http.createServer((req, res) => {

    if(req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Hello World');
        res.end();
    } else {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write('{"message": "Hello Json!"}');
        res.end();
    }
});

const port = 3000;

server.listen(port, () => console.log(`server on port ${port}`));