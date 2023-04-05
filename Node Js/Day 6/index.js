// const fs = require('fs');

// fs.writeFile('new.txt',"eki text baba", (err) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Success");
//     }
// })

const http = require('http');
const { CLIENT_RENEG_LIMIT } = require('tls');
const port = 3000;
const hostName = "127.0.0.1"; 

const server = http.createServer((req,res) => {
    res.write("welcome to the http server");
    res.end();
}).listen(port,hostName,() =>{
    console.log(`Server is running at http://${hostName}:${port}`);
});