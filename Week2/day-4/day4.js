/*
function pets(name, color,breed) {
	console.log(`your name is: ${name} and your color is: ${color}`)
}
pets("jamal","black","something spicial");
function youInfo(age,farcolor=["blue","yellow","red"]){
	let twiceAge = age*2;
	console.log(`your age is: ${age} and your favorite colors is: ${farcolor}`);
	console.log(`this is all the colors: ${farcolor}`);

}
youInfo(30,"green,blue");
*/
////////////////////////////////////////
// This is my Daly EXCERSES for Day4//
//////////////////////////////////////
/*
function infoAboutMe(){
	let name = "jamal";
	let age = 30;
	let MyHobbies = ["developer","runner","driver"];
	//console.log(`my name is: ${name} I am: ${age} years old and my hobbies: ${MyHobbies}`);


}
infoAboutMe()
//////////////
function infoAboutPerson(perName,perAge,peFaColor,MyHobbies){
	console.log(`your name is: ${perName} you are: ${perAge} years old, your Favorite color is: ${peFaColor}`);
    for (v in MyHobbies){
    	console.log(MyHobbies[v]);
    }

}
//infoAboutPerson("David", 45, "blue");
//infoAboutPerson("Josh", 12, "yellow");
infoAboutPerson("David", 45, "blue", ["tennis", "painting"]);
infoAboutPerson("Josh", 12, "yellow", ["videoGame", "hanging out with friends", "playing cards"]);
*/
//////////////////////////////////////////////
//EXERCISE 2: KEYLESS CAR
/////////////////////////////////////////////
/*
let x = prompt("how old are you?");
let user = parseInt(x)
function checkDriverAge(){
	if (user<18){
		alert("sorry you are too young to drive this car Powering off");

	}else if (user>18){
		alert("You are old enough to drive, Powering On. Enjoy the ride!");

	}else if (user==18){
		alert("Congratulations on your first year of driving. Enjoy the ride!");

	}

}
checkDriverAge();*/
//////////////////////////////////////////////////
//Exercise 3: Odd Or Even
//////////////////////////////////////////////////
/*
function checkNumber(){
	for(let i = 0; i<=100;i++){
		if (i%2==0){
			console.log(`the number: ${i} is even`);
		}else {
			console.log(`the number: ${i} is odd`);
		}

	}
}
checkNumber();
*/
////////////////////////////////////////////////////
//Exercise 4: Find The Numbers Divisible By 23
/////////////////////////////////////////////////////
/*
function isDivisible(){
	for(let i=0; i<=500;i++){
		if(i%23==0){
			console.log(i);
		}
	}
}
isDivisible();
*/
//NOT COMPLETED YET!
/////////////////////////////////////////////////
//Exercise 5 : Amazon Shopping
/////////////////////////////////////////////////
/*
let amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
}
function checkBasket(i){
	for(i in amazonBasket){
		console.log(`you have: ${amazonBasket[i]} ${i}`);
	}
}
checkBasket(amazonBasket);
*/
/////////////////////////////////////////////////////////////
//Exercise 6 : What’s In My Wallet ?
////////////////////////////////////////////////////////////////
/*
Instructions
Prompt the user for several words (separated by commas).
Put the words into an array.
Console.log the words one per line, in a rectangular frame as seen below.
Check out the Hints and Requirements below.
For example, if the user gives you:
Hello, World, in, a, frame
you will transform it to : ["Hello", "World", "in", "a", "frame"]
that will get displayed as:
*/
let x = "Hello world in a frame";
let words = x;
function myfuc(){
	let myarray= words.split(" ");
	for(i of myarray){
		
		console.log("*********");
		console.log(`*  ${i} *`);
	}
}
myfuc();

