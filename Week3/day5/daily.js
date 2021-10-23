let right = document.getElementsByClassName("right")[0];
let lft = document.getElementsByClassName("left")[0];
let topc = document.getElementsByClassName("top")[0];


for (let i = 0;i<7;i++){
	let newdiv = document.createElement("div");
	newdiv.textContent=i;
	lft.appendChild(newdiv)
}

for(let i = 0; i<7*7;i++){
	let newdivr = document.createElement("div")
	newdivr.style.background = "black";
	newdivr.style.color = "red";
	let txt = document.createTextNode("*")
	
    if (i>1&&i<5){
    	newdivr.appendChild(txt)
    }else if(i==8||i==12||i==15||i==19){
    	newdivr.appendChild(txt)
    }else if(i>21&&i<27){
    	newdivr.appendChild(txt)
    }else if(i==29||i==33||i==36||i==40||i==43||i==47){
    	newdivr.appendChild(txt)
    }

	//console.log(newdivr.length)
	right.appendChild(newdivr)
	

}
//console.log(right);

for (let i = 0;i<7;i++){
	let ne = document.createElement("div");
	ne.textContent=i;
	topc.appendChild(ne)
}
