const http = require('http');
const PORT = 5000;
const hostName = '127.0.0.1';

const fs = require('fs');

const server = http.createServer((req,res) => {
    // res.write(req.url);
    console.log(req.url);
    
    
    if(req.url === "/"){
        fs.readFile("index.html",(err,data)=>{
            res.writeHead(200,{"Content-Type": "text/html"});
            res.write(data);
            res.end();
        });
    }
    else if(req.url === "/about"){
        fs.readFile("about.html",(err,data)=>{
            res.writeHead(200,{"Content-Type": "text/html"});
            res.write(data);
            res.end();
        });
    }
    else if(req.url === "/contact"){
        fs.readFile("contact.html",(err,data)=>{
            res.writeHead(200,{"Content-Type": "text/html"});
            res.write(data);
            res.end();
        });
    }
    
    res.end("Welcome to the server");
})

server.listen(PORT, hostName, ()=> {
    console.log(`Server is running at http://${hostName}:${PORT}`);
})






// const fs = require('fs');

// fs.writeFile('new.txt',"eta ekta text",(err) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Success");
//     }
// })

// fs.readFile('new.txt','utf-8',(err,data) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// })