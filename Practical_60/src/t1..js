var expr = require("express")
var app = expr()
var p = require("path")

const staticp = p.join(__disname, "../public")
app.use(expr.static(staticp, { index: "t1.html" }))
app.get("/login", (req, res, next) => {
    res.set(

    )
})
{
    app.use("/hello", (req, res, next) => {
        console.log("request recieved at" + new Date())
        next()
    })
    app.use("/hello", (req, res, next) => {
        next()
    })
    app.use("/hello", (req, res, next) => {
        res.write("how are you?")
        next()
    })
    app.use("/hello", (req, res) => {
        res.write("stop now")
        res.send()
    })
}
app.listen(5000)
console.log("running")
