const express = require('express');
const app = express();
const PORT = 3000;

/*app.get("/",(req,res) => {
    // const id = req.query.id;
    // const name = req.query.name;
    // const age = req.query.age;
    const {id,name,age} = req.query;
    //res.send("This is home page");
    //res.send("Student id is : " + id);
    res.send(`<h1>ID : ${id}<br> Name : ${name}<br>Age : ${age}</h1>`);
});*/

/*app.get("/userId/:id/userAge/:age",(req,res) => {
    const id = req.params.id;
    const age = req.params.age;
    //const {id,age} = req.query;

    res.send(`<h1>Student id is : ${id} and age is : ${age}</h1>`);

});*/

/*
app.get("/",(req,res) => {
    const id = req.header("id"); 
    const name = req.header("name"); 
    res.send(`<h1>Student id is : ${id} and age is : ${name}</h1>`);
});*/


const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());


/*app.post("/user", (req,res) => {
    const name = req.body.name;
    res.send(`Welcome ${name}`);
});*/

app.get("/register", (req,res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/register", (req,res) => {
    const name = req.body.name;
    const age = req.body.age;
    res.send(`Welcome ${name} ${age}`);
});


app.listen(PORT,() => {
    console.log(`Server is running at http://localhost:${PORT}`);
})