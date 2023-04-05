const http = require('http');
const fs = require('fs');
const PORT = process.env.PORT;

const server = http.createServer((req,res) => {

    const handleReadFile = (statusCode, fileName) => {
        fs.readFile(fileName,(err,data)=>{
            res.writeHead(statusCode,{"Content-Type": "text/html"});
            res.write(data);
            res.end();
        });
    } 
    
    if(req.url === "/"){
        handleReadFile(200,"index.html");
    }

    else if(req.url === "/about"){
        handleReadFile(200,"about.html");
    }
    else if(req.url === "/contact"){
        handleReadFile(200,"contact.html");
    }
    else{
        handleReadFile(404,"error.html");
    }
})

server.listen(PORT, ()=> {
    console.log("Server is running");
})