// / Exercise 1
// Write a function called divide that takes two parameters: a numerator and a denominator.
// Your function should return the result of numerator / denominator.
// However, if denominator is zero you should throw the error, "Attempted to divide by zero."
// // Exercise 2
// Using the code below:

// 1. Which type of error will be thrown ? Look on the different types errors on the Google
// 2. Is the console.log("after") will be shown on the console ?


// const divide = ((a,b)=>{
// 	try{
// 		if(a>0 && b>0){
// 			console.log(a/b)
// 		}else{
// 			console.log('one of your number is less than zero')
// 			throw new RangeError("Attempted to divide by zero.");
// 		}
// 	}catch(error){
// 		console.log(error);

// 	}finally{
// 		console.log('Have a nice day!')
// 	}

// })
// divide(12,2);
//------------------------------------------------------

// let xml = new XMLHttpRequest();
// xml.open('GET','https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
// xml.send();
// xml.onload = function(){
// 	if(xml.status !=200){
// 		console.log('some thing wrong')
	
// 	}else{
// 		console.log('finshed')
// 		let response = JSON.parse(xml.response)
// 		console.log(response)
		

// 	}
// }

// //first function 
// const displayError = (xml) => {
// 	console.log("in display error")
// 	let error = document.getElementById("error");
// 	let h2 = document.createElement("h2");
// 	h2.textContent = `Error : ${xml.status}`
// 	h2.style.backgroundColor = 'pink';
// 	error.appendChild(h2);
// }
// const displayUser = (animals) => {
// 	let results = document.getElementById("results")
//     let h = document.getElementById("h1")
//     h.textContent = 'This is All user informations!'
//     h.style.background = 'green'
//     h.style.color = '#ffffff'
// 	animals.forEach(info => {
// 		let li = document.createElement("li");
// 		li.textContent = `${info}`
// 		//console.log(li)
// 		results.appendChild(li)
// 	});

//}


//----------------------------------------------------
let xhr = new XMLHttpRequest();
//2. Set the request
xhr.open('GET', "https://api.giphy.com/v1/stickers/search&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
//4. Send the request
xhr.send();
console.log(xhr);
//5. when the request is complete and the response is fully downloaded.
// xhr.onload = function() {
// 	if (xhr.status != 200) {
// 	 	console.log("error status")
// 		displayError(xhr)
// 	} else {
// 		console.log("Finished Loading")
// 		//console.log(xhr.response)
// 		let response = JSON.parse(xhr.response)
// 		displayUser(response) 
// 	}
// };

// const displayUser = (animals) => {
// 	let results = document.getElementById("results")
//     let h = document.getElementById("h1")
//     h.textContent = 'This is All user informations!'
//     h.style.background = 'green'
//     h.style.color = '#ffffff'
// 	animals.forEach(info => {
// 		let li = document.createElement("li");
// 		li.textContent = `${info.name} - ${info.email} - ${info.address.city}`
// 		//console.log(li)
// 		results.appendChild(li)
// 	});

// }

// const displayError = (xhr) => {
// 	console.log("in display error")
// 	let error = document.getElementById("error");
// 	let h2 = document.createElement("h2");
// 	h2.textContent = `Error : ${xhr.status}`
// 	h2.style.backgroundColor = 'pink';
// 	error.appendChild(h2);
// }