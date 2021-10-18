/*
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
*/
let solar = [
  {
    name: "Mercury",
    moon: 0,
    color: "Grey",
  },
  {
    name: "Venus",
    moon: 0,
    color: "Brown",
  },
  {
    name: "Earth",
    moon: 1,
    color: "lightBlue",
  },
  {
    name: "Mars",
    moon: 2,
    color: "Red",
  },
  {
    name: "Jupiter",
    moon: 79,
    color: "orange",
  },
  {
    name: "Saturn",
    moon: 82,
    color: "Gold",
  },
  {
    name: "Uranus",
    moon: 27,
    color: "green",
  },
  {
    name: "Neptune",
    moon: 14,
    color: "Blue",
  },
];
let main = document.querySelector(".listPlanets");
console.log(main);
for (let item of solar) {
  let newDiv = document.createElement("div");
  let newText = document.createTextNode(item.name);
  newDiv.appendChild(newText);
  newDiv.classList.add("planet");
  newDiv.style.backgroundColor = item.color;
  for (let i = 0; i < item.moon; i++) {
    let newMoon = document.createElement("div");
    newMoon.classList.add("moon");
    let newText2 = document.createTextNode(i + 1);
    newMoon.appendChild(newText2);
    newDiv.appendChild(newMoon);
  }
  main.appendChild(newDiv);
}
    
    



