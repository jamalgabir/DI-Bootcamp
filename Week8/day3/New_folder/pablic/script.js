console.log('okokok');



// };const submit = ()=>{
//   //e.preventDefault()
//   let item1 = document.getElementById('v1').value;
//   let item2 = document.getElementById('v2').value;
//   let data={
//     item1,
//     item2
//   }
//   console.log(data);


function submit() {
  let username = document.getElementById('v1').value;
  let password = document.getElementById('v2').value;

  let userdata = {
    username,
    password
  }
  //console.log(userdata);

  fetch('http://localhost:5000/login',{
    method:'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userdata)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    document.getElementById('result').textContent = `${data.message} ${data.user}`
  })
  .catch(e => console.log(e))
};