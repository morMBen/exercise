const url = require('url');
var fs = require('fs');

const HOST = '127.0.0.1';
const PORT = 3000;
const users = require('./users.json')
const http = require('http');
// var path = require('path');

// console.log(url)

const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(http.STATUS_CODES(405))
    } else {
        if (req.url === '/users') {
            res.writeHead(200, {
                "Content-type": "application/json",
            })
            return res.end(JSON.stringify(users))
        }
        if (req.url === '/') {
            res.writeHead(200, {
                "Content-type": "text/html",
            })
            res.write("<h1>Hi there... :)<h1>")
            return res.end()
        }
    }

    let parseUrl = url.parse(req.url, true);
    let path = parseUrl.path.replace(/^\/+|\/+$/g, "");
    if (path === "") {
        path = "index.html";
    }
    let file = __dirname + "/public/" + path;
    fs.readFile(file, (err, content) => {
        if (err) {
            res.writeHead(404)
            res.end(err);
        } else {
            switch (path) {
                case "index.html":
                    res.writeHead(200, { "Content-type": "text/html" })
                    break;
                case "style.css":
                    res.writeHead(200, { "Content-type": "text/css" })
                    break;
            }
        }
        return res.end(content);
    })
});

server.listen(PORT, HOST, () => {
    console.log('listening')
})
