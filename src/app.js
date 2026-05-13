const express = require("express");

const app = express();


app.use("/hello", (req, res) => {
    res.send("App testing");
});


app.use("/", (req, res) => {
    res.send("Hello")
});

app.listen(5000, () => {
    console.log("server is listening on the port 5000")
});