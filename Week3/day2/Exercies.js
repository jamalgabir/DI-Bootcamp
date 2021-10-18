/*
1. Create two buttons - id of "red", id of "blue"
2. When we click on the red button -> Change the backgroundcolor of the page to red
3. the same for blue
*/
//let body = document.getElementByTagName("body");
/*
let redbutton = document.getElementById("red");
let bluebutton = document.getElementById("blue");
redbutton.addEventListener("click",function(){
	document.body.style.backgroundColor = "red";
})
bluebutton.addEventListener("click",function(){
	document.body.style.backgroundColor = "blue";
	bluebutton.textContent= "new";
	bluebutton.style.fontSize ="30px";
})
*/
let container = document.getElementById("container");

let colors = ["blue", "yellow", "green", "pink"];
function creatbutton(){

	for(let color of colors){

        let butt = document.createElement("button");
        let netext = document.createTextNode(color);
        butt.classList.add("btn");
        butt.addEventListener("click",changingColor);

        butt.appendChild(netext);
	    container.appendChild(butt);
    }
}
creatbutton();
let bt = document.getElementsByClassName("btn");
//console.log(bt);
//bt.style.backgroundcolor = "red";

function changingColor(r){
	let colorButton = r.target.textContent.toLowerCase();
	
	//bt.style.textSize= "90px";
	document.body.style.backgroundColor = colorButton;

}