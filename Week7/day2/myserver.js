const exp = require('express');
// const resul = require('./user.js');
const data = require('./date');
const body = require('body-parser');


const app = exp();
let m =JSON.stringify(data.da);

console.log(JSON.parse(m));

    

app.get('/items',(req,res)=>{
	
	res.send(`<h3>${m}</h3>`)

});
app.listen(5000,()=>{
	console.log('ok')
});
app.get('/items/:id',(req,res)=>{
	
	res.send('<h1>Second</h1>')
	
});
app.get('/item',(req,res)=>{
	
	res.send('hooooo')
	
});