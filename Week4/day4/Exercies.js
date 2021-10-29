
console.log('it is work');
// //-------------------------------------------
// //isplay Student Info
// //----------------------------------------------
// function displayStudentInfo({first, last}){
// 	console.log(`your full name is ${first} ${last}`);
// };
// displayStudentInfo({first: "jamal",last:"ismail"});

// //--------------------------------------------------
// //Exercise 3: User & Id
// //---------------------------------------------------
// const users = { user1: 18273, user2: 92833, user3: 90315 };



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
// Exercise
// 1) Create a TV class with properties brand, channel and volume. Channel should be 1 by default. Volume should be 50 by default.
// 2) Add methods to increase and decrease volume. Whe the methods are called it will increase or decrease the volume by 1.
// 3) Create an Object for the LG TV
// 4) Create a subclass for Smart TV
// 5) It overrides the method increase, so it increase the volume by 10 and not by 1
// 6) Add a attribute of Netflix that should be equal to true by default
class Tv{
	constructor(channel=1,volume=50){
		this.volume=volume-1;
		this.channel=channel;
		console.log(`value: ${this.volume}  channel: ${this.channel}`)
	}
	SmartTv(){
		console.log(`${this.volume+10}`)
	}
	Netflix(ll=true){
		this.ll=ll
		console.log(`${this.ll}`)
	}
}
let all = new Tv();
all.SmartTv();
all.Netflix();
