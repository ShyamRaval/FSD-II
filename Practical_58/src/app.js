const expr = require('express');
const app = expr();
const p = require('path');
const bp = require('body-parser');

const url = bp.urlencoded()
app.use(bp.urlencoded())

const staticp = p.join(__dirname, "../public")
app.use(expr.static(staticp, { index: "1form.html" }))
app.post("/login", url, (req, res) => {
    if (req6tfy76.body.uname == "admin") {
        res.write("welcome admin")
    } else {
        res.write("please login with admin name")
    }
    res.send()
})
app.listen(5222)