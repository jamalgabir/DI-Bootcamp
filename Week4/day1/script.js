// checkName();
// checkName("jamal");
// checkName('gabir',"yosif");
///////////////////////

// function checkValue(x = 0, y = 1) {
// 	console.log("x: ", x, " y: ", y)
// 	let sum = x + y;
// 	console.log(sum)
// }
// checkValue();
// checkValue(5,5);

// 
// function compare(a, b, operator) {
//     if (operator === "+") {
//         return a+b;
//     } else if (operator === "-") {
//         return a-b;
//     } else {
//     	return "ERROR";
//     }
//     console.log("end of func")
// }
// // Write next to each console log what will be the result
// // console.log("end of func") going to be displayed?

// let resultA = compare(2,3,"+");
// console.log(`The result of the function is ${resultA}`)


// let resultB = compare(2,3,"-");
// console.log(`The result of the function is ${resultB}`)

// let resultC = compare(2,3,"*");
// console.log(`The result of the function is ${resultC}`)

////////////////////////////////////////////////////////
// OBJECT DESTRUCTURING
// let {firstName, age} = {firstName:"john", age:12}
// console.log(firstName, age)

// //With function
// function detailsUser(){
// 	//local variables
// 	let username = "John";
// 	let age = 12;
// 	return {
// 		user : username,
// 		userAge : age
// 	}
// }

// let details = detailsUser();
// let {user, userAge} = details
// console.log(user, userAge)

// // ARRAY DESTRUCTURING
// let [nameUser, ageUser] = ["John", 12]
// console.log(nameUser, ageUser)

// //With functions
// function detailsUser(){
// 	//local variables
// 	let username = "John";
// 	let age = 12;
// 	return [username, age]; //["John", 12]
// }

// let details = detailsUser();
// let [person, personAge] = details;
// console.log(person, personAge)

// Create an object let family = {name:"Smith", members:3, pet: true}
// Use object destructuring to save the 3 values into 3 differents variables



// Exercise:
// 1. Greet the user (ie. using the username as an argument),
// * first by using function declarations
// * then function expression,
// * then arrow function
// let username = "john";
// const user=(u)=>{
// 	console.log(u)
// }
// const user2=(u)=> u;
// const user3 = u => u;
// console.log(user2("jamal"));
// console.log(user3("jamal"));
// console.log(user("jama"));
// let btn =document.getElementsByTagName("button")[0];
// btn.addEventListener("click", func);

// function func(){
// 	console.log(3*3)
// }



/////////////////////////
//Exercise2:
// 1.Create a button in the HTML file
// 2.In the JS file, add an event listener to this button, 
// do the exercise 3 times
// a.the callback function should be a function declaration
// b.the callback function should be an anonymous function
// c. the callback function should be an anonymous ARROW function
// function singleTaxes(a,y=6){
// 	let k = 17*a/100;
// 	console.log(`taxes of ${a} is ${k}`)
// }
// singleTaxes(1000);
// function marrigtaxes(a, chailld=0){
// 	let tax = (chailld*10*a)/100
// 	console.log(tax)
// 	console.log(`taxes of ${a} for some one marrig and have ${chailld} chuildren is ${tax} `)
// }
// marrigtaxes(1000,5);
// const my = (a,y) =>{
// 	return a*y

// }
// console.log(my(6,5));
// function check(year){
// 	return (year>2000 ? "You are in the 21st century":"You live in the Middle Age" )
// }
// console.log(check(2000));
// function user1(a,y,operator){
// 	if(operator==="+"){
// 		return a+y
// 	}else if(operator==="*"){
// 		return a*y
// 	}else if(operator==="-"){
// 		return a-y
// 	}else {
// 		return "error"
// 	}
// }
// let result1 = user1(3,6,"+");
// let result2 = user1(8,6,"-");
// let result3 = user1(3,6,"*");
// console.log(result1);
// console.log(result2);
// console.log(result3);

// let sum = (a,y=67)=> a*y;
// console.log(sum(9));
// const you = h => h*10;
// console.log(you(5));
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }


// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );



// myArray.forEach((number, index) => { 
//     console.log("number: ", number) // logs each element of the array
//     console.log("index: ", index) // logs each index of the array
// }); 
// let myArray = [1,2,3,4,5,6,7,8,9];
// let mysum = 0;
// myArray.forEach((number, i, arr) => { 
//     mysum +=number
// });
// console.log(mysum); 

//console.log(myArray)
//output : [ 4, 6, 8, 10, 12 ]


// myArray.forEach(function(number, i, arr) { 
//     arr[i] = number * 2; 
// }); 

// console.log(myArray)
// //output : [ 4, 6, 8, 10, 12 ]
// let array = [1,2,3,4,5,6,7,8,];
// array.some((value)=>{return console.log(value%2==0);})
// let myArr = ["how","hey","bye"];
// let key1 = "h";
// let test1 = myArr.some(function(title, index){
// 	console.log(title,index)
// 	return title.indexOf(key1)>-1
// })
// const str = '   JavaScript  jamal  gabir  ';
// const result = str.trimRight();

// console.log({ str });
// console.log({ result });
//--------------------------
// Exercise 1 : Scope
//--------------------------
// function q1() {
//     var a = 5;
//     if(a > 1) {
//         var a = 3;
//     }
//     alert(a);
// }

// //#2
// var a = 0;
// function q2() {
//    let a = 5;
// }

// function q22() {
//     alert(a);
// }


// //#3
// function q3() {
//     window.a = "hello";
// }


// function q32() {
//     alert(a);
// }

// //#4
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a);
// }

// //#5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert( a);
// }
// alert(a);
//-------------------------------
//Exercise 2 : Ternary Operator
//---------------------------------
// 1. You need to modify the function called experiencePoints()
// 2. Create a variable called experiencePoints.
// Assign to this variable, a ternary operator (ie. change the 
//conditional block into a ternary operator).

// function winBattle(){
//     return true;
// }

// function experiencePoints() {
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// }
// experiencePoints()


// let newexperiencePoints = experiencePoints();

// //-------------------------------
// //Exercises XP Gold
// //----------------------------
// // Exercise 1: Sum Elements
// // Instructions
// // Write a JavaScript program to find the sum of all elements in an array.
// // Don’t use the sum method !
// let myArray = [1,2,3,4,5,6,7,8,9];
// let mysum = 0;
// myArray.forEach((number, i, arr) => { 
//     mysum +=number
// });
// console.log(mysum); 

// //--------------------------
// //Exercise 2 : Remove Duplicates
// //------------------------------

// let chars = ['A', 'B', 'A', 'K', 'K','A','B','C','C'];
// let newChar = [...new Set(chars)];

// console.log(newChar);

// //--------------------------------------------
// //Exercise 3 : Remove Certain Values
// //----------------------------------------

// // Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// // Expected result : [15, -22, 47]
// let aarray= [NaN, 0, 15, false, -22, '',undefined, 47, null];
// const removeNullFromArray = (arrayToClean) => {
//   const cleanedArray = [];
//   arrayToClean.forEach((val) => {
//     if(val !== null||val!==NaN||val!==undefined||val!==false||val!==''){
//       cleanedArray.push(val);
//     }
//   });

//   return cleanedArray;
// }


// console.log(removeNullFromArray(aarray));

// //-----------------------------
// //Exercise 4 : Repeat Please !
// //-------------------------------
// // Write a JavaScript function to concatenate a given string n times (default is 1).
// // Create the repeat function yourself:

// function repea (x){
// 	let ret= x.repeat(3)
// 	console.log(ret)


// }
// repea('Ha!');
// //--------------------------------------------------
// //Exercise 4 : Turtle & Rabbit
// //----------------------------------------------------
// const startLine = '     ||<- Start line';
// let turtle = '🐢';
// let rabbit = '🐇';
// console.log(`'  ${startLine}'`);
// console.log(`'         ${turtle}'`);
// console.log(`'         ${rabbit}'`);

// let hh = turtle.trim().padEnd(9, '=');
// console.log(hh);

//-------------------------------------
//Daily Challenge : Go Wildcats
//Daily Challenge : Go Wildcats
//--------------------------------------

const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];

//-------------------------------------------------------
// gameInfo.forEach((element,i,index) =>{
// 	index[i].username +="!"
// 	console.log(index[i].username)
// 	let v = []
// 	let score = index[i].score
//     console.log(v+=score)
// 	//console.log(score)
// })


// function test(user){
// 	let div = document.getElementsByClassName("container")[0]
// 	let p = document.createElement("p")
// 	p.textContent=`hello ${user}`
// 	div.appendChild(p)
// }
// test("jsmsl");

// First Part
// 1. Create a function named `starWars` that takes no parameter.
// 2. The function should declare a variables `characters` equal to an empty array
// 3. In the startWars function, create a function named `createCharacter`.
// It receives two parameters, the first name and last name of a character.
// If the character doesn't have a last name, the default should be "Smith"
// 4. The createCharacter function should console.log the fullname of the character,
// and push it to the `characters` array.
// 5. Call the `createCharacter` function a few times inside the starWars function
// and console.log the `characters` array
// Second Part
// 6. Change the `starWars` function, to take one parameter, the name of the
// spaceship the characters are in
// 7. The `createCharacter` function should now console.log the fullname and spaceship
// of the character
// 8. Call the `starWars` function once with the spaceship "The Devastator", and another times
// with the spaceship "Republic Attack Cruiser". what happens?

// function starWars(call){
// 	let characters = ""
// 	function createCharacter(firstname,lastname="Smith"){
// 		console.log([characters+=firstname,lastname])
// 	}
// 	createCharacter("tom");
// 	createCharacter("tom");
// 	createCharacter("tom","jamal");

// }
// starWars("j");


//=-------------------------------------
//-----------------------
// CLOSURE
//------------------------

// let name = "John";

// function checkName() {
//     let nameUppercase = name.toUpperCase();
//     console.log("in outer", nameUppercase)

//     function addExclamation() {
//         nameUppercase += "!";
//         console.log("in inner,", nameUppercase);
//     };
 
//     return addExclamation
// }

//let inner = checkName(); // => JOHN
// THE INNER FUNCTION, EVEN IF CALLED IN THE GLOBAL SCOPE
// STILL HAS ACCESS TO THE SCOPE OF THE OUTER FUNCTION
// inner() // => JOHN!
// inner() //=> JOHN!!



//OTHER EXAMPLE

// function multiply(number) {
//     //"private" variables
//     let myNumber = number;
//     console.log("in outer", myNumber)

//     function numberToMultiply (n) {
//         myNumber *= n;
//         console.log("in inner,", myNumber);
//     };
 
//     return numberToMultiply;
// }

// let multiplication = multiply(10); 
// console.log("multiplication is equal to : " , multiplication) 
// // //reference of the numberToMultiply function
// multiplication(2)
// //calling the inner function 

// // the same as 
// multiply(10)(2)

// Exercise 1
// Write a function called specialMultiply which accepts two parameters.
// If the function is passed both parameters,
// it should return the product of the two.
// If the function is only passed one parameter -
// it should return a function which can later
// be passed another parameter to return the product.
// You will have to use closure and arguments to solve this.
// Examples:
// specialMultiply(3,4); // 12
//specialMultiply(3)(4); // 12
//specialMultiply(3); // function(){}....
function specialMultiply(one,tow=0){
	let sum1 = one;
	let sum2 = tow;
    console.log(sum1*sum2)
	function second(n){
		let lol = n*=sum1
		console.log(lol)
	}
	return second;

}
specialMultiply(3,4);
specialMultiply(3)(4);
// specialMultiply(3)(4);
// specialMultiply(3);

//console.log(newfunc);
