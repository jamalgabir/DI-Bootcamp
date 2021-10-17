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
let container = document.getElementById("container");
//console.log(container);
let p = document.createElement("p");
container.appendChild(p);
for(let name of names){
    let text = document.createTextNode(names[0])
    p.appendChild(text);

}
//console.log(p)