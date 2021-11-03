console.log('it work!');
async function game(){
	const rest = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await rest.json();
	// for(let i = 0; i<data.length;i++){
 //        let myemail = [];
		
	// 	myemail.push(data[i].email);
	// 	console.log(myemail);
	// }
	console.log(data);
	//console.log(data.username);
};
//game();
const urls = [
'https://jsonplaceholder.typicode.com/users',
'https://jsonplaceholder.typicode.com/albums',
'https://jsonplaceholder.typicode.com/posts',
'https://jsonplaceholder.typicode.com/todos'

];

Promise.all(urls.map(url =>{
	return fetch(url).then(people => people.json());
}))
.then(array =>{
	console.log('array 0:',array[0])
	console.log('array 1:',array[1])
	console.log('array 2:',array[2])
	console.log('array 3:',array[3])
})
.catch(error => console.log('where is problem',error));



//----------------------------------------------------------------
//-------------------------------------------------------------
fetch('https://jsonplaceholder.typicode.com/users',{
  method: "POST"})
  .then(response => {
    return response.json()
  })  // convert to json
 .then(data => {
    console.log(data)
  })    // print data to console
 .catch(err => {
    console.log('Request Failed', err)
  }); // Catch error
//---------------------------
// POST
// ---------------------------


// let btn = document.getElementById("btn");
// btn.addEventListener("click", requestData)

// function requestData(){
// 	let url = 'https://reqres.in/api/users'

// 	//set the data we want to post
// 	let data = {
// 	    "name": "John",
// 	    "job": "Coder"
// 	}

// 	//But, as we're going to send JSON, we use headers option to send application/json instead, 
// 	//the correct Content-Type for JSON-encoded data.
// 	// Since you're sending JSON data, you'll need to set a header of Content-Type set to application/json. 
	
//     let fetchData = {
// 	  method: 'POST',
// 	  headers: {
// 	    'Content-Type': 'application/json'
// 	  },
// 	  body: JSON.stringify(data),
// 	}


// 	fetch(url, fetchData)
// 	.then(response => {
// 		console.log(response);
// 		if(response.ok){
// 			console.log("great");
// 		} else{
// 			console.log("bad")
// 			throw new Error ("not working")
// 		}
// 		return response.json()
// 	})
// 	.then(res => console.log("res = ", res))
// 	.catch(error => console.log("error", error))
// }