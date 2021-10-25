// 
// const cool  = (a,b) => a*b;
// console.log(cool(6)); 
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
const multy = (a,b)=> a*b;
const multy2 = (a) => (b) => a*b;
const multy3 = multy2(3);
console.log(multy(3,4));
console.log(multy2(3)(4))
const func = () =>{
	
	const num1 = () =>{

	} 
	return num1;
}
console.log(func());
//------------------------------------------
//Exercise 1 : Function With Two Parameters
//------------------------------------------
// Create a one line function that 
// receives two numbers as parameters and returns the sum.
// const Exercies1 = (a,b) => a+b;
// console.log(Exercies1(4,6));
//--------------------
//Exercise 2 : Closure
//--------------------
// Analyse the code below, 
// and before executing it, predict the outcome of the last line.
//IT WILL BE 13
// const addTo = x => y => x + y;
// var addToTen = addTo(10);
// addToTen(3);
//OUTPUT = 13;
//---------------------
//Exercise 3 : Currying
//---------------------
// Analyse the code below, 
// and before executing it, predict the outcome of the last line.
// const sum1 = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// curriedSum(30)(1);
// //OUTPUT = 31;
//----------------------------
//Exercise 4 : Currying
//---------------------------
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// const add5 = curriedSum(5)
// add5(12)
//OUTPUT = 17;
//---------------------------------
//Exercise 5 : Composing
//-------------------------------
// const compose = (f, g) => (a) => f(g(a));
// const add1 = (num) => num + 1;
// const add5 = (num) => num + 5;
// compose(add1, add5)(10);
////OUTPUT = 16;
//------------------------------
//GREAT EXERCIESE
//--------------------------

//---------------------------
//Exercises XP Gold
//-------------------------

let landscape = function()
{
 let result = "";
 let flat = function(x)
 {
   for(let count = 0; count<x; count++)
   {
     result = result + "_";
   }
 }
 let mountain = function(x)
 {
   result = result + "/"
   for(let counter = 0; counter<x; counter++)
   {
     result = result + "'"
   }
   result = result + "\\"
 }

flat(4);
mountain(4);
flat(4)
return result;
}

console.log(landscape());