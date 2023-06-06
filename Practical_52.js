const expr = require('express');
const app = expr()

app.get("/", (req, res) => {
    res.set("content-type", "text/html")
    res.send("<h1>Hello from here</h1>")
})
app.get("/about", (req, res) => {
    res.get("content-type", "text/html")
    res.write("hello")
    res.send()

})
app.listen(8008, () => {
    console.log("series sorted")
})
