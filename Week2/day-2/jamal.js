

/*switch(userName){
	case "jamal":
	console.log("Hello :",userName);
	break;
	case "gabir":
	console.log("Hello :",userName);
	break;
	default:
	console.log("error");
}*/
/*
let user = prompt("How old are you");
if (user == 18){
	console.log("Congratulations on your first year of driving. Enjoy the ride!");
}
else if (user >18){
	console.log("Powering On. Enjoy the ride!");
}
else {
	console.log("Sorry, you are too young to drive this car.Powering off");
}
*/
////
///line 2
///
//let x = 68946;
//let y = 9999;
//if (x>y){
//	console.log(`${x} is bigest number`);
//}else if(y>x){
//	console.log(`${y} is begist number`);
//}
/*let newDog = "Chihuahua";
console.log(newDog.length);
console.log(newDog.toUpperCase(),newDog.toLowerCase())
if (newDog == "Chihuahua"){
	console.log("I love Chihuahuas, it’s my favorite dog breed ");

}else{
	console.log("I dont care, I prefer cats");
}
let x = prompt("Enter your number");
if (x %2 == 0){
	console.log(x,"Is even");

}else{
	console.log(x,"Is odd");
}*/
//
/*
let shopping = ["apple", "pear", "melon", "banana"];
1. Loop over this array, and add transferm the words in plural
("s" at the end) of every fruit

output = ["apples", "pears", "melons", "bananas"];

let prices = [23, 15, 34, 10];
1. Loop over this array, and console.log the sum of the prices
2. Where should you console log*/
let shopping = ["apple", "pear", "melon", "banana"];
let addcha = shopping.split(-1,"s");
console.log(addcha);
let arr = [1, 4, 7, 10]
for (let i=0; i<arr.length; i++) {
    console.log(arr[i]);
}


let guestList = {
	germany : "randy",
	spain : "lonardo",
	france : "kala",
}
	
for (let country in guestList){

	console.log(guestList[country])
	guestList[country] = "lise"
}
if (country==="germany"){
	guestList[country] = "lise";
}	
	
//key
if (country.includes("r")){
	guestList[country] = "lise";
}

// // value
if (guestList[country].includes("r")){
   guestList[country] = "lise";
}
console.log(guestList)