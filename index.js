console.log("hello");
const express=require("express");
const app = express()
app.get('/', function(req, res) {
    res.send("working")
})

app.listen(8080)