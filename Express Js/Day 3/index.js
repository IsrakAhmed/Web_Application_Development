require("dotenv").config();
const express = require('express');
const app = express(); 
const PORT = process.env.PORT || 3000;



/*app.get('/products/:id([0-9]{3})',(req,res) => {
    res.send(`ID : ${req.params.id}`);
});

app.get('/products/:name([a-zA-Z]+)',(req,res) => {
    res.send(`Name : ${req.params.name}`);
});


app.use('*',(req,res) => {
    res.statusCode = 404;
    res.send("Error 404 !!!");
});*/



app.listen(PORT,() => {
    console.log(`Server is running at http://localhost:${PORT}`);
});