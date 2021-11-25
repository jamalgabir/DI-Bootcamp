const exp = require('express');
const bp = require('body-parser');
const DB = require('./pablic/db')
const cors = require('cors');
const env = require('dotenv');
const knex = require('knex');

env.config();


const db = knex({
  client:'pg',
  connection:{
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: 'Gabir1990',
    database: 'Hollywood'
  }
})

const app = exp();

app.use(cors());

app.use(exp.urlencoded({extended:false}));
app.use(exp.json());
app.use('/',exp.static(__dirname+'/pablic'));


app.get('/all',(req,res)=>{
  //console.log(req);
  //res.end('hello')
  db('actors')
  .select('*')
  .orderBy('actor_id')
  .then(data=>{
    //console.log(data)
    res.send(data)
  })
  
  
});
app.get('/users',(req,res)=>{
  db('actors')
  .select('first_nam')
  .then(data =>{
    res.send(data)
  })

});

app.post('/all',(req,res)=>{
  console.log('this is body req',req.body)
  DB.createUser(req.body)
  .then(data =>{
    res.send({message:'ok'})
  })
  .catch(err=>{
    res.send({essage:err.detail})
  })
})



// app.get('/show', (req,res)=>{
//   db('pablic')
//   .select('last_name')
//   .then(data => {
//     console.log(data);
//     res.send(data)
//   })
//   .catch(err => {
//     console.log(err);
//     res.send({message:err.detail})
//   })
// })




app.listen(3000,()=>{
  console.log('server is runing on ',3000)
})