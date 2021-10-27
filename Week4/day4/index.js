












//---------------------
//Object Prototype
// -------------------

// OBJECT LITERAL
// let firstCharacter = {
//   name: 'Hermione Granger',
//   house: 'Gryfindor',
//   friends: {
//     friendName : "Harry",
//   }
// };

// console.log(Object)
// console.log(Object.prototype)
// console.log(Object.prototype.constructor)
// console.log("keys", Object.keys(firstCharacter))
// console.log("values", Object.values(firstCharacter))
// console.log("entries", Object.entries(firstCharacter))

// //---------------
// // Object.entries
// // -------------

// //REVIEW ON ARRAY DESTRUCTURING

// // // array destructuring
// // let [first, second] = ["blue", "yellow"]
// // ==> MEANING first = "blue"
// // ==> MEANING second = "yellow"

// let thirdCharacter = {
//   name: 'Hermione Granger',
//   house: 'Gryfindor',
//   age: 20,
// };

// let arrayCharacter = Object.entries(thirdCharacter)
// console.log(arrayCharacter)

// // (3) [Array(2), Array(2), Array(2)]
// // 0: (2) ['name', 'Hermione Granger']
// // 1: (2) ['house', 'Gryfindor']
// // 2: (2) ['age', 20]

// // destruture inside the loop
// for (let element of arrayCharacter){
//   console.log("element : ", element)
//   let [key, value] = element
//     console.log("key : ", key, " , value: ", value)
// }

// // THE SAME
// //destruture inside the statement of the loop
// for (let [key,value] of arrayCharacter){
//     console.log("key : ", key, " , value: ", value)
// }



// //---------------------
// //Copy objects
// //--------------------------

// let fourthCharacter = {
//   name: 'Hermione Granger',
//   house: 'Gryfindor'
// };

// let newCharacter = fourthCharacter; //they point to the same adress
// newCharacter["name"] = "Harry";
// console.log("newCharacter : ", newCharacter, ", fourthCharacter", fourthCharacter)

// let person = { ...fourthCharacter};// they point to different adress
// person["house"] = "Meet in place"
// console.log("person house = ", person["house"], "fourthCharacter house", fourthCharacter["house"]) //unchanged

// // NESTED DESTRUCTURING
// let fifthCharacter = {
//   name: 'Hermione Granger',
//   house: 'Gryfindor',
//   friend :  {
//     name : 'Harry Potter',
//   }
// };

// let secondPerson = {...fifthCharacter};
// console.log(secondPerson)
// secondPerson["friend"]["name"] = "Hagrid"
// console.log("secondPerson friend = ", secondPerson["friend"]["name"], "fifthCharacter friend", fifthCharacter["friend"]["name"]) //changed

// // Solution : Deep COPYING

// let thirdPerson = { 
//   ...fifthCharacter,
//   friend :{
//     ...fifthCharacter.friend
//   }
// };
// console.log(thirdPerson)
// thirdPerson["friend"]["name"] = "Hagrid"
// console.log("thirdPerson friend = ", thirdPerson["friend"]["name"], "fifthCharacter friend", fifthCharacter["friend"]["name"]) //unchanged


// //---------------------
// // Destructuring
// // -----------------------

// let sixCharacter = {
//   name: 'Hermione Granger',
//   house: 'Gryfindor',
//   friend :  {
//     username : 'Harry Potter',
//   }
// }

// // an object is not ORDERED
// // an array is ORDERED

// // In object destructuring the name of the variables
// //need to equal to the name of the keys inside the object
// let {name,house, ...others} = sixCharacter;
// console.log("name : ", name, " , house :" , house, ", others", others)

// //----------------
// //WITH ALIAS FOR THE VARIABLE NAME
// //----------------

// let sevenCharacter = {
//   name: 'Hermione Granger',
//   house: 'Gryfindor',
//   friend :  {
//     username : 'Harry Potter',
//   }
// }
// // // Syntax
// // //let {keyname : varname} = object
// let {name : wizardname , house : wizardhouse} =  sevenCharacter
// console.log("wizardname =", wizardname)
// console.log("wizardhouse =", wizardhouse)

// //----------------
// //NESTED DESTRUCTURING
// //----------------

// let eightCharacter = {
//   name: 'Hermione Granger',
//   house: 'Gryfindor',
//   friend :  {
//     username : 'Harry Potter',
//   }
// }

// let {name : eightwizardname , house : eightwizardhouse, 
//   friend : { username: wizardfriendName }} = eightCharacter;

// // //syntax
// // let {nameKey : {nameSubKey}} = object


// console.log("eightwizardname =", eightwizardname)
// console.log("eightwizardhouse =", eightwizardhouse)
// console.log("wizardfriendName =", wizardfriendName)


// // ---------------
// // WITH FUNCTIONS
// // -----------------

// //DESTRUCTURING WITH ARRAYS
// function getColors ([first, second]){
//   console.log("first :", first);
//   console.log("second : ", second)
// }

// getColors(["blue", "red"])

// //Exercise1
// function getDetails({name,house,goodstudent}) {
//   console.log(name, house, goodstudent)
// }

// getDetails({name: 'Harry Potter',house: 'Gryfindor',goodstudent : false})

// //Exercise2
// function getMoreDetails({name, house, friend : {friendName, age}}) {
//   console.log(name, house, friendName, age)
// }

// getMoreDetails({name: 'Hermione Granger', 
//         house: 'Gryfindor', 
//         friend :  {
//           friendName : 'Harry Potter', age : 20
//         }
//         })

// //Exercise3
// const elonPerson = {
//     first: 'Elon',
//     last: 'Musk',
//     housesLocation : ["new york", "paris"],
//     twitter: '@elonmusk',
//     company: 'Space X',
//     houses : {
//       amount: 2,
//       value : "5Million"
//     }
// }

// function getElonMuskDetails({first, last, housesLocation : [usa, france], houses : {value}}){
//   console.log(first, last, value)
//   console.log(usa, france)

// }
//-----------------------------------------------------------
// getElonMuskDetails(elonPerson)

// const address = {
//   street: 'Evergreen Terrace',
//   number: '742',
//   city: 'Springfield',
//   state: 'NT',
//   zip: '49007',
// };

// const { street: s, city: c } = address;
// console.log(s); //Evergreen Terrace
// console.log(c); //Springfield
//----------------------------------------------------------
//
//----------------------------------------------------------
// class Rabbit {
//     constructor(type) {
//         this.type = type;
//     }
//     speak(line) {
//         console.log(`The ${this.type} rabbit says '${line}'`);
//     }
// }
// let killerRabbit = new Rabbit("killer");
// let blackRabbit = new Rabbit("black");
// console.log(killerRabbit.speak("hello"));
// console.log(blackRabbit.speak("i am Here"));
// class Animal { 
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     console.log(`${this.name} makes a noise.`);
//   }
// }
//-------------------------------------------------------------

// class Dog extends Animal {
//   constructor(name,noise) {
//     super(name); // call the super class constructor and pass in the name parameter
//     // Add a new property
//     this.noise = noise;
//   }

//   speak() {
//     console.log(`${this.name} barks.It says ${this.noise}`);
//   }
// }

// let d = new Dog('Mitzie', "Wouaf");
// console.log(d.name) // Mitzie
// d.speak(); // Mitzie barks.It says Wouaf
// console.log(d)
// //Dog {name: "Mitzie", noise: "Wouaf"}
// //__proto__: Animal
// //  constructor: class Dog
// //  speak: ƒ speak()
// //__proto__: Object
//----------------------------------------------------------------

// let date = document.getElementById('datetime');
// date.addEventListener("change",function(event){
//     let date = new Date(event.target.value);
//     console.log(date);
//   }
// );

// let now = new Date();
// console.log(now);

// let dateString = now.toString();
// console.log('toString',dateString);

// let day = now.getDay();
// console.log('getDay',day);

// let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// let dayName = dayNames[day];
// console.log('dayNames',dayName);

// console.log('getMonth',now.getMonth() + 1)
// //returns the month of the date from 0 to 11,
// //with 0 being January and 11 being December.

// console.log('getDate',now.getDate())
// // gives us the number for the dat of the month.

// console.log('getFullYear',now.getFullYear())
// // returns the 4 digit version of the year.

// console.log('getHours',now.getHours())
// // gives us a number from 0 to 23,
// //which corresponds to midnight and 11pm.

// console.log('getMinutes',now.getMinutes())
// // returns the minutes of the hour from 0 to 59.

// console.log('getSeconds',now.getSeconds())
// // returns the seconds of the minute from 0 to 59.

// console.log('getMilliseconds',now.getMilliseconds())
// // returns a number from 0 to 999.

// console.log('getTime',now.getTime())
// // gives us the number of milliseconds that have elapsed since Jan 1, 1970 midnight UTC.

// let today = new Date();
// let anotherDay = new Date(2021,1,19, 11, 55)
// let diff = anotherDay - today;
// console.log('diff',diff);
// let days = diff / (1000 * 60 * 60 * 24);
// console.log('days',days);
// console.log(Math.floor(days));
