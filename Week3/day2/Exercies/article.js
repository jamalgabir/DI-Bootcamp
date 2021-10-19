var art = document.getElementsByTagName("article");


//console.log(h2);
/////////////////////////////
//remove the last paragraph in the <article>
///////////////////////////////////
let p = document.getElementsByTagName("p")[3];
p.remove();
////////////////////////////////////////
///change the background color of the h2 tag from the DOM when clicked on.
////////////////////////////////////////
let h2 = document.getElementsByTagName("h2")[0];
h2.addEventListener("click", changeback);
function changeback(e){
	h2.style.backgroundColor = "red";
}
///////////////////////////////
//h1 TAG TO random pixel size between 0 to 100
//////////////////////////////////////////////
let h1 = document.getElementsByTagName("h1")[0];
let pix = Math.random()*100+1;
//h1.style.fontSize = pix+"px";
//////////////////////////////////////////
//Add an event listener which will hide the h3 when it’s clicked on 
////////////////////////////////////////////
let h3 = document.getElementsByTagName("h3")[0];
h3.addEventListener("click",hideh3);
function hideh3(){
	h3.style.display = "none";
}
////////////////////////////////////////
//Add a <button> to the HTML file, that when clicked on, 
//should make the text of all the paragraphs, bold
////////////////////////////////////
let p1 = document.getElementsByTagName("P");
let bodyElement = document.body;
let newbtn = document.createElement("button");
let btntex = document.createTextNode("click Here to bold all p");
newbtn.appendChild(btntex);
bodyElement.appendChild(newbtn);
let btn = document.getElementsByTagName("button")[0];
btn.addEventListener("click",chang);
let boldElement = document.createElement("b");

function chang(){
	console.log("need help");
}


/////////////////////////////////
//“Submit” button of the form is clicked
/////////////////////////////////////////
// let bookForm = document.forms[0]; //select by index
// let bookForm = document.forms['add-book'] //select by id

// console.log(bookForm)
// console.log("elements", bookForm.elements.title)

// bookForm.addEventListener("submit", addBook)

// let div = document.getElementById("container")

// function addBook (event) {
// 	event.preventDefault();
// 	let inputTitle = event.target.elements.title
// 	let inputAuthor = event.target.elements.author

// 	let titleValue = inputTitle.value;
// 	let authorValue = inputAuthor.value;

// 	let pOne = document.createElement("p")
// 	let pTwo = document.createElement("p")
// 	let textOne = document.createTextNode(titleValue)
// 	let textTwo = document.createTextNode(authorValue)


// 	pOne.appendChild(textOne)
// 	pTwo.appendChild(textTwo)

// 	div.appendChild(pTwo)
// 	div.appendChild(pOne)

// 	inputTitle.value = "";
// 	inputAuthor.value = ""
// }
// <form id="add-book">
// 				<label for="title">Title</label>
// 				<input type="text" name="title" id="title">
// 				<label for="author">Author</label>
// 				<input type="text" name="author" id="author">
				
// 				<button>Add book</button>
// </form>

//<div id="container"></div>

// fname.setAttribute("required","");
// lname.setAttribute("required","");
let subm = document.getElementById("submit");
let form = document.forms[0];
form.addEventListener("submit", submitfunc);
let div = document.getElementsByClassName("usersAnswer")[0];
console.log(div);
let lname = document.getElementById("lname");
let fname = document.getElementById("fname");


function submitfunc(event){
	
   let inputTitle = event.target.elements.fname;
   let inputAuthor = event.target.elements.lname;
   let titleValue = inputTitle.value;
	let authorValue = inputAuthor.value;

   let pOne = document.createElement("p")
 	let pTwo = document.createElement("p")
 	let textOne = document.createTextNode(titleValue);
 	let textTwo = document.createTextNode(authorValue);

 	pOne.appendChild(textOne);
	pTwo.appendChild(textTwo);

	div.appendChild(pTwo)
 	div.appendChild(pOne)

 	inputTitle.value = "";
 	inputAuthor.value = "";



   // let text = document.createTextNode(lname.value,fname.value);
   // div.appendChild(text);
   // return div;	
}
//submitfunc();
