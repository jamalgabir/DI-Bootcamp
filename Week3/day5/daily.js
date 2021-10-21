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
	right.appendChild(newdivr)
	//console.log(newdivr.length)
}
console.log(right);

for (let i = 0;i<7;i++){
	let ne = document.createElement("div");
	ne.textContent=i;
	topc.appendChild(ne)
}
