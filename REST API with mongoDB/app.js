const express = require('express');
const cors = require('cors');
require("./config/db");
const bodyParser = require('body-parser');
const usersRouter = require("./routes/users.route");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/users",usersRouter);

// home route
app.get("/", (req,res) => {
    res.sendFile(__dirname + "/views/index.html");
});

// route not found error
app.use((req,res,next) => {
    res.status(404).json({
        message: "route not found"
    });
});

// server error
app.use((err,req,res,next) => {
    res.status(500).json({
        message: "something broke"
    });
});

module.exports = app;