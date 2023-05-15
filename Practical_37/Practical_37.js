// write a node js programm to load a simple html file on node js web server and print it's content as html content


var h = require('http');
var ps = require('fs');
var u = require('url');


var addr = 'http://localhost:8080/Practical_37.html'

var tq = u.parse(addr, true)
data = ps.readFileSync(".", tq.pathname)

var server = h.createServer(
    function (req, res) {
        res.writeHead(200, { 'content-type': "text/html" })
        res.write(data)
        res.end()
    }
)

server.listen(5054)