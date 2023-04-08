require("dotenv").config();
const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

app.get('/',(req,res) => {
    res.send('<h1>this is home route</h1>');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});