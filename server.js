const http = require('http');
const url = require('url');
const fs = require("fs");
const router = require("./src/router/web.router")
const home = require("./src/controllers/home")
const PORT = 2000

const Server = http.createServer((req, res) => {

    let urlPath = url.parse(req.url).pathname;

        let chooseRouter;
        chooseRouter = ((typeof router[urlPath]) !== "undefined") ? router[urlPath] : home.getNotFoundPage;
        chooseRouter(req, res)
});

Server.listen(PORT, 'localhost', () => {
    console.log('Server is running at http://localhost:2000');
});

