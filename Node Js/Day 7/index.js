const http = require('http');
const PORT = 5000;
const hostName = '127.0.0.1';

const fs = require('fs');

const server = http.createServer((req,res) => {

    console.log(req.url);

    const handleReadFile = (statusCode, fileName) => {
        fs.readFile(fileName,(err,data)=>{
            res.writeHead(statusCode,{"Content-Type": "text/html"});
            res.write(data);
            res.end();
        });
    } 
    
    if(req.url === "/"){
        // fs.readFile("index.html",(err,data)=>{
        //     res.writeHead(200,{"Content-Type": "text/html"});
        //     res.write(data);
        //     res.end();
        // });
        handleReadFile(200,"index.html");
    }

    else if(req.url === "/about"){
        // fs.readFile("about.html",(err,data)=>{
        //     res.writeHead(200,{"Content-Type": "text/html"});
        //     res.write(data);
        //     res.end();
        // });
        handleReadFile(200,"about.html");
    }
    else if(req.url === "/contact"){
        // fs.readFile("contact.html",(err,data)=>{
        //     res.writeHead(200,{"Content-Type": "text/html"});
        //     res.write(data);
        //     res.end();
        // });
        handleReadFile(200,"contact.html");
    }
    else{
        // fs.readFile("error.html",(err,data)=>{
        //     res.writeHead(404,{"Content-Type": "text/html"});
        //     res.write(data);
        //     res.end();
        // });
        handleReadFile(404,"error.html");
    }
})

server.listen(PORT, hostName, ()=> {
    console.log(`Server is running at http://${hostName}:${PORT}`);
})