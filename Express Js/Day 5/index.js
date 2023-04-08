require("dotenv").config();
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});