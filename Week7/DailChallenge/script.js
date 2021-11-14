
let get = require('./main.js');
const http = require('http');

const b = 5;
console.log(get.num+b);

const server = http.createServer((req,res)=>{
	res.writeHead(200,{'Content-Type': 'text/plain'});
	res.end('Hello\n');
});
server.listen(3000,'127.0.0.1');


console.log('server! Runing');

// const server = http.createServer(options,function(req,res){
// 	res.writeHead(200);
// 	res.end('Hello there at the frontend');
// }).listen(3000);



