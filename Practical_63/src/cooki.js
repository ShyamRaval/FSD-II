const session = require('express-session');
var expr = require('express')
var app = expr()

app.use(session({
    resave: false,
    saveUninitialize: false,
    secret: "hello"
}))

app.get('/', (req, res) => {
    if (req.session.page_views) {
        req.session.page_views++
        res.send(`you have visited the page ${req.session.page_views} times`)
    }
    else {
        req.session.page_views = 1
        res.send(`you have visited page ${req.session.page_views}times`)
    }
})
app.listen(8989)