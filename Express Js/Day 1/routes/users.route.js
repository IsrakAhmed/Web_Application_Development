const express = require('express');
const router = express.Router();

// router.get("/",(req,res) => {
//     res.send("<h1>Welcome to home page</h1>");
// });

router.get("/register",(req,res) => {
    res.send("<h1>Welcome to register page</h1>");
});

router.get("/login",(req,res) => {
    res.send("<h1>Welcome to login page</h1>");
});

module.exports = router;