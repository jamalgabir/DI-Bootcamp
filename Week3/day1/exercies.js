/*
let divelement = document.body.firstElementChild;
console.log(divelement);
let seconway = document.getElementsByTagName("div");
console.log(seconway[0]);
//////////////////////////////////////////
let ul = document.getElementsByTagName("ul");
console.log(ul);
//////////////////////////////////////////////////////
let names = ["John", "Lola", "Tom"];
1. Create a function that adds the name of each students to 
a paragraph
2. each paragraph needs to be background yellow, font-size 25px
3. Add the 3 paragraph to the div already on the page
*/
let names = ["John", "Lola", "Tom"];
let divContainer = document.getElementById('container'); 


function addStudents(){
	//create a paragraph PER name
	for (let index = 0; index<names.length; index++){
		// create a paragraph
		let newP = document.createElement("p");
		// create a text node, with the value = to the name of the student
		let newText = document.createTextNode(names[index]);
		// style the paragraph
		newP.style.backgroundColor = "yellow";
		newP.style.fontSize = "25px";
		// add the newText to the newP
		newP.appendChild(newText)
		// add the newP to the divcontainer
		divContainer.appendChild(newP);
	}
}

addStudents();