const expr = require('express');
const app = expr()
const path = require("path")
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
