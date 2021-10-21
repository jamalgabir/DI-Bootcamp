let fill = document.querySelector(".fill");
let div = document.querySelectorAll(".diva");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);
for(dive of div){
dive.addEventListener("dragover",dragOver)
dive.addEventListener("dragenter",dragEnter)
dive.addEventListener("dragleave",dragLeave)
dive.addEventListener("drop",dragDrop)
	
}
 
function dragStart(){
	this.className += ' hold';
	setTimeout(() => (this.className = ' invisible'),0)
}
function dragEnd(){
	
	this.className =' fill';
}

function dragOver(e){
	e.preventDefault();
	

}
function dragEnter(e){
	e.preventDefault();
	this.className += ' hovered';
}
function dragLeave(){
	this.className = " diva";
	
}
function dragDrop(){
	this.className = " diva";
	this.append(fill);

	
}