let div = document.getElementById("dive1");
let answer = document.getElementById("input1");




function submite(){
	let pr = document.createElement("p");
	let txt = answer.value;
	let result = txt.replace(/[^a-zA-Z]/g,"");
	console.log(result)

}
