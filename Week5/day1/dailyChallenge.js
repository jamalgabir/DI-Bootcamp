console.log('it is work!');


let form = document.getElementById("forms");


form.addEventListener("submit", (event) =>{
	event.preventDefault()
	let num1 = event.target.value;
	
	console.log(JSON.stringify(num1))

});