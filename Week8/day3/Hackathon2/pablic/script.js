console.log('work');

function sendData(e) {
  // e.preventdefault();
  let myitems = [{user:'jamal',ag:65}];
  let user = document.getElementById('user').value;
  let age = document.getElementById('age').value;
  

  let userdata = {
    user,
    age
  }
  myitems.push(userdata);

  console.log('first', myitems);
  fetch('http://localhost:3000/user',{
    method: 'POST',
    
    headers: {
      'Content-Type':'application/json'
    },
    body:JSON.stringify(userdata)
  })
  .then(res => res.json())
  .then(data => {
    console.log('blabla',data);
    //let v =json.parse(data)
    document.getElementById('root').innerText = `hello: ${data.user} already good`
  })
  .catch(er => {
    console.log('noonoo',er);
  })
};

// function getData() {
//   fetch('http://localhost:3000/show')
//   .then(res => res.json())
//   .then(data => {
//     showUsers(data);
//   })
// };

// function showUsers(data) {
//   let root = document.getElementById('root');
//   root.innerText = "";
//   data.forEach(item =>{
//     let div = document.createElement('div');
//     div.innerText= item.name;
//     root.appendChild(div)
//   })
// }

// function findData() {
//   let user = document.getElementById('user').value;
//   let userdata = {
//     user,
//   }
//   fetch('http://localhost:3000/find',{
//     method: 'POST',
    
//     headers: {
//       'Content-Type':'application/json'
//     },
//     body: JSON.stringify(userdata)
//   })
//   .then(res => res.json())
//   .then(data => {
//     console.log(data);
//     document.getElementById('root').innerText = `${data.message}`
//   })
//   .catch(rr => {
//     console.log(rr);
//   })
// }