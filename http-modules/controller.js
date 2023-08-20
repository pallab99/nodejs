class Controller {
    basePath(req, res) {
        res.write('Hello Programmer');
        res.end();
    }

    aboutUsPath(req, res) {
        res.write('This is the about page');
        res.end();
    }

    notFoundPath(req, res) {
        res.write('Not found');
        res.end();
    }
}

module.exports = new Controller();
