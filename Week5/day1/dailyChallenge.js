console.log('it is work!');


let form = document.getElementById("forms");


form.addEventListener("submit", (event) =>{
	event.preventDefault()
	let num1 = JSON.stringify(form.first.value);
	let num2 =JSON.stringify( form.last.value);
	console.log({num1,num2});
	
	//console.log(JSON.parse(num1,num2));

});