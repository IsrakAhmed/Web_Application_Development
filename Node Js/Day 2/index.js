const fs =  require('fs');

// fs.writeFile('demo1.txt',"eta ekta text",(err) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Success");
//     }
// })

// fs.appendFile('demo1.txt'," -eta arekta ekta text",(err) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Success");
//     }
// })

// fs.readFile('demo1.txt','utf-8',(err,data) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// })

// fs.rename('abc.js','student.js',(err) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Success");
//     }
// })

fs.exists('demo1.txt',(result) => {
    if(result){
        console.log("found");
    }
    else{
        console.log("Not Found");
    }
})

