const fs = require("fs");

// fs.writeFileSync("text.txt", "hellow world");

// fs.writeFile("text.txt", 'hellow world', (err, res)=>{
//     console.log("error", err);
//     console.log("result", res);
// })

// fs.mkdir("new folder", "Hellow", (err, res) =>{
//     console.log("error", err);
//     console.log("result", res);
// })

const http = require("http");

const server = http.createServer((res, err)=>{
    return res.end("Server Responded")
});

server.listen(5000, () => {
    console.log("server is running, port: 5000");
});