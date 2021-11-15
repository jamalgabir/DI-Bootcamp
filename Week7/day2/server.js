const exp = require('express');
//const users = require('./fetchUsers');

const app = exp();

app.listen(5000, ()=>{
  console.log('listen to port 5000');
})
// console.log(__dirname);
app.use('/',exp.static(__dirname + '/public'));

app.get('/robots',(req,res)=>{
  users.getUsers()
  .then(data => {
    res.json(data);
  })
  .catch(e => {
    console.log(e);
  })
})
