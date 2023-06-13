var expr = require('express')
var app = expr()
const cp = require('cookie-parser');
app.use(cp())
app.get('/', (req, res) => {
    console.log(__dirname)
    res.sendFile(__dirname + '/index.html')
})
app.get('/process-get', (req, res, next) => {
    const response = { U: req.query.uname, P: req.query.pwd }
    res.cookie("uname", response.U)
    next()
})
app.get('/process-get', (req, res) => {
    console.log(req.cookies)
    res.send('username stored')
})
app.listen(3434)