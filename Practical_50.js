const expr = require('express');
const app = expr()

app.get("/", (req, res) => {
    res.set("content-type", "text/html")
    res.send("hello")
})
app.listen(8005)