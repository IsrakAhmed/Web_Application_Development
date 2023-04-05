const express = require('express');
const app = express();
const userRouter = require('./routes/users.route');

app.use("/api/user",userRouter);

// app.get("/about",(req,res) => {
//     res.send("I am a get req at about route");
// });

// app.post("/",(req,res) => {
//     res.send("I am a post req at home route");
// });

// app.put("/",(req,res) => {
//     res.send("I am a put req at home route");
// });

// app.delete("/",(req,res) => {
//     res.send("I am a delete req at home route");
// });

app.get("/register",(req,res) => {
    // res.status(200).json({
    //     "name" : "Israk Ahmed",
    //     "message" : "I am in register page",
    //     statusCode : 200
    // });
    //res.redirect("/login");

    
    res.statusCode = 200;
    res.sendFile(__dirname+ "/views/register.html");
    
});

app.get("/login",(req,res) => {
    res.send("This is login page");
});

app.get("/",(req,res) => {
    // res.send("This is home page");
    res.statusCode = 200;
    res.sendFile(__dirname+ "/views/index.html");
});

app.use((req,res) => {
    //res.send("404 !!! Invalid url");

    res.statusCode = 404;
    res.sendFile(__dirname+ "/views/error.html");
});


module.exports = app;