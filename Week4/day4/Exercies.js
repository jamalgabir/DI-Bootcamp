
console.log('it is work');
//-------------------------------------------
//isplay Student Info
//----------------------------------------------
function displayStudentInfo({first, last}){
	console.log(`your full name is ${first} ${last}`);
};
displayStudentInfo({first: "jamal",last:"ismail"});

//--------------------------------------------------
//Exercise 3: User & Id
//---------------------------------------------------
const users = { user1: 18273, user2: 92833, user3: 90315 };



//--------------------------------------------------------------
//Exercise 6 : Challenges
//Evaluate these (ie True or False)
//----------------------------------------

// [2] === [2] ==false
// {} === {} == false
//----------------------------
//What is the value of property “number” for each object.
//------------------------------------------------------
// const object1 = { number: 5 }; ==4
// const object2 = object1;== 4
// const object3 = object2;== 4
// const object4 = { number: 5}; ==5
// object1.number = 4;=== 4
//----------------------------------------
// class Animal{
// 	constructor(name,type,color){
// 		this.type = type;
// 		this.color = color;
// 		this.name = name;
// 	}
// }
// class Mamal extends Animal{
// 	constructor(){
// 		super(name)

// 	}
// 	sound(se){
// 		this.se = se;
// 		console.log(`${this.name} ${this.type} ${this.color} ${this.se}`)

// 	}


// }
// let cow = { g:"frizen","unknow?","red"}
// let mycow = new Animal(cow);
// mycow.sound("moo's")

