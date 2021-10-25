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



//-------------------------
