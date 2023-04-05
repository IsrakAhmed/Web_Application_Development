const http = require("http");
const port = 3000;
const hostname = "127.0.0.1";

// http.createServer((req,res)=>{
//     res.end("I Hate You");
// }).listen(5000);

const myServer = http.createServer((req,res)=>{
    res.writeHead(202)
    res.write("<h1>mejaj kharap</h1>");
    res.write("<h1>mejaj kharap</h1>");
    res.write("<h1>mejaj kharap</h1>");
    res.end();
});
myServer.listen(port,hostname,()=>{
    console.log(`server is running succesfully at http://${hostname}:${port}`);
});

