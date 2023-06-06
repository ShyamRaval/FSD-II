const expr = require('express');
const app = expr()

app.get("/student", (req, res) => {
    res.set("content-type", "text/html")
    res.write("<b>Student<b>")
    res.write("hi")
    res.send()
})
app.listen(8005)