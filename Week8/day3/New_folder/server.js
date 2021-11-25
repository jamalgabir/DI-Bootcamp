const exp = require('express');
const bp = require('body-parser');
const knex = require('knex');
const cors = require('cors');
const env = require('dotenv');
env.config();
const app = exp();
app.use(cors());
app.set('view engine', 'ejs');

const fs = require('fs');


app.use(bp.urlencoded({ extended: false }))
// parse application/json
app.use(bp.json());

// app.set('port',9000);
// console.log(__dirname);
app.use('/',exp.static(__dirname+'/pablic'));





app.route('/login')
  .get( (req,res)=> {
    console.log('query.body',req.query);
    const user = req.query.u;
    const pass = req.query.p;
    const data = {
      message: 'Welcome',
      user
    }
    console.log((data));
    res.send(data)
  })
  .post( (req,res) => {
    console.log(req.body);
    let user = req.query.u;
    let pass = req.body.password;
    const data = {
      message: 'Welcome',
      user
    }
    console.log('POST',data);
    res.send(data)
  })

app.get('/user/:ziv',(req,res)=>{
  console.log(req.params);
  res.send('bla bla')
})

app.listen(5000,()=>{
  console.log('runing on ')
});
// app.listen(app.get('port'), ()=>{
  // console.log('listen on port 9000');
// })