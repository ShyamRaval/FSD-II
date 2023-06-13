var expr = require('express')
var app = expr()
var cp = require('cookie-parser')
app.use(cp())
app.get('/', (req, res, next) => {
    res.cookie('uname', 'abc')
    res.cookie('1name', 'xyz')
    res.cookie('contact', 1234, { expires: new Date(Date.now() + 10000) })
    next()
})
app.get('/', (req, res, next) => {
    console.log(req.cookies)
    next()
})
app.get('/', (req, res) => {
    res.clearCookie('uname')
    res.send('cookie deleted')
})
app.listen(7000)