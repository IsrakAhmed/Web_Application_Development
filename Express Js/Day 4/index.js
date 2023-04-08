require("dotenv").config();
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

const myMiddleWare = (req, res, next) => {
    console.log('middle ware');
    req.currentTime = new Date(Date.now());
    next();
};

//app.use(myMiddleWare);

app.get('/',myMiddleWare,(req,res) => {
    console.log('hello home' + req.currentTime);
    res.send('<h1>this is home route</h1>');
});

app.get('/about',myMiddleWare,(req,res) => {
    console.log('hello about' + req.currentTime);
    res.send('<h1>this is about route</h1>');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});