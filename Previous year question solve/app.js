const express = require('express');
require("./config/db");
const bodyParser = require('body-parser');
const booksRouter = require("./routes/books.route");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/library/books",booksRouter);

// library route
app.get("/library", (req,res) => {
    res.sendFile(__dirname + "/views/library.html");
});

// home route
app.get("/", (req,res) => {
    res.sendFile(__dirname + "/views/index.html");
});

// route not found error
app.use((req,res,next) => {
    res.status(404).json({
        message: "Route not found"
    });
});

// server error
app.use((err,req,res,next) => {
    res.status(500).json({
        message: "Something is wrong"
    });
});

module.exports = app;