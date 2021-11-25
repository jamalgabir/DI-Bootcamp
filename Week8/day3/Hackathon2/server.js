const exp = require('express');
const bp = require('body-parser');
// const DB = require('./lib/db.js');
const cors = require('cors');
const fs = require('fs');
const ejs = require('ejs');

const knex = require('knex');

// const db = knex({
//   client:'pg',
//   connection:{
//     host: 'localhost',
//     port: '5432',
//     user: 'postgres',
//     password: 'Gabir1990',
//     database: 'Hackathon'
//   }
// });

const app = exp();
app.use(cors());
app.use(bp.urlencoded({extended:false}));
app.use(bp.json());
app.set('view engine', 'ejs');
app.use('/',exp.static(__dirname+'/public'));

app.get('/',(req,res)=>{
  let mascots = [
    { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
    { name: 'Tux', organization: "Linux", birth_year: 1996},
    { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
  ];
  let tagline = "No programming concept is complete without a cute animal mascot.";

  res.render('pages/index',{
    mascots: mascots,
    tagline: tagline
  });
});

app.get('/about',(req,res)=>{
  res.render('pages/about');

});


let i = [];
app.post('/user',(req,res)=>{
  console.log('server', req.body.user);
  i.push(req.body);

  console.log('this is i', i[0].user)
  let text = Object.entries(req.body)
  // fs.appendFile('user',`${text}\n`,arr=>{
  //   if(arr){
  //     console.log('cannot create file',arr)
  //   }
  //   console.log('ok to crate file user')
  // })
  res.send(req.body)
  
    
    
  
  // DB.createUser(req.body)
  // .then(data => {
  //   res.send({message:'OK'})
  // })
  // .catch(err => {
  //   res.send({message:err.detail})
  // })
})


app.get('/show', (req,res)=>{
  // db('users')
  // .select('*')
  // .then(data => {
  //   console.log(data);
  //   res.send(data)
  // })
  // .catch(err => {
  //   console.log(err);
  //   res.send({message:err.detail})
  // })
})

app.post('/find', (req,res)=>{
  console.log(req.body);
  const {user} = req.body;
  // db('users')
  // .select('name')
  // .where({name:user})
  // .then(data => {
  //   console.log(data.length);
  //   if(data.length>0){
  //     res.send({message:`Found=> ${data[0].name} id=> ${data[0].id}`})
  //   }
  //   else {
  //     res.send({message:'Not Found'})
  //   }
  // })
  // .catch(err => {
  //   console.log(err);
  //   res.send({message:err.detail})
  // })
})



app.listen(3000,()=>{
  console.log('listen 3000')
});