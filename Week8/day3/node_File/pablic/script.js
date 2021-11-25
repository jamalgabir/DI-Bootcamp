function sendData() {
  let user = document.getElementById('user').value;
  let last = document.getElementById('last').value;
  
  let numos = document.getElementById('numos').value;
  let salry = document.getElementById('salry').value;
  let userdata = {
     user,
     last,
     numos,
     salry,
  }
  console.log(userdata);
  fetch('http://localhost:3000/all',{
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(userdata)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    document.getElementById('root').innerText = `${data.first_nam}`
  })
  .catch(err => {
    console.log('problem',err);
  })
}

console.log('it work')


function getData() {
  
  fetch('http://localhost:3000/all')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    showUsers(data)
  })

};

function showUsers(data) {
  let root = document.getElementById('root');
  root.innerText = "";
  data.forEach(item =>{
    let div = document.createElement('div');
    div.innerText= `firstname: ${item.first_nam} || lastname: ${item.last_name}`;
    root.appendChild(div)
  })
}

function findData() {
  let user = document.getElementById('user').value;
  let last = document.getElementById('last').value;
  let numos = document.getElementById('numos').value;
  let salry = document.getElementById('salry').value;
  let userdata = {
     user,
  }
  fetch('http://localhost:3000/all',{
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(userdata)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    document.getElementById('root').innerText = `${data.last_name} ok ok`
  })
  .catch(err => {
    console.log(err);
  })
}