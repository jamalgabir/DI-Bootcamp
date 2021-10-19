let container = document.getElementById("container");
let div = document.getElementById("animate");
let btn = document.getElementsByTagName("button")[0];

var margin = 0;


function myMove(){
	margin += 5;
    div.style.marginLeft = margin + "px";
    //div.style.marginTop = margin+"px";
    let myvar = setInterval(myMove,1000); 	
}
