var h = require('http');

server = h.createServer(function (req, res) {
    res.write("Hello World")
    res.end()
})

server.listen(5050)
