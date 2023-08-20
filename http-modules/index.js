const http = require('http');
const Controller = require('./controller');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        Controller.basePath(req, res);
    } else if (req.url === '/about') {
        Controller.aboutUsPath(req, res);
    } else {
        Controller.notFoundPath(req, res);
    }
});
server.listen(3000, () => {
    console.log('Server is running');
});
