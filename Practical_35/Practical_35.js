// create http webpage on which home page displays "Home Page",student page displays "Student page",and any other page shows "404:page not found"


const http = require('http');

server = http.createServer(function (req, res) {
    if (req.url == "/") {
        res.writeHead(200, { "content-type": "html" })
        res.write("Home.html")
        res.end()
    } else if (req.url == "/student") {
        res.writeHead(200, { "content-type": "text/html" })
        res.write("student.html")
        res.end()
    } else {
        res.writeHead(404, { "content-type": "text/html" })
        res.write("404 : Page not found")
        res.end()
    }
})

server.listen(5052)
