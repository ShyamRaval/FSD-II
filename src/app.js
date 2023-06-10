const expr = require('express');
const path = require("path")
const app = expr()

const staticpath = path.join(__dirname, "../public")

app.use(expr.static(staticpath))

app.listen(5000, (e, data) => {
    console.log("Done")
})