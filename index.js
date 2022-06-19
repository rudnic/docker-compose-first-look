const http = require("http");

http.createServer((req, res) => {
    res.end(`Hello from  ${process.env.PORT} port\n`)
}).listen(process.env.PORT);