

const knex = require('knex');
const env = require('dotenv');
env.config({path:'./env'});


const db = knex({
  client:'pg',
  connection:{
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: 'Gabir1990',
    database: 'Hollywood'
  }
});

function createUser({user,last,numos,salry}){
  return db('actors').insert(
    {
      first_nam:user,
      last_name:last,
      number_oscars:numos,
      salary:salry
    }
  )
  .returning('*')
}

module.exports = {
  createUser
}




