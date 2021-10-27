//Exercise

const studentsFootball = [
    {name: 'Rich', score: 33}, 
    {name: 'Peter', score: 55}
];

// Use map to push every student into another array. 
// Every student is an object with the key name, 
// score and average. 
// Average should be equal to true if the score is bigger than 50

// let newarray = studentsFootball.map((element, index, arr)=> arr[index]);
// console.log(newarray.push(2,Average:3.4));


//Exercise 1: filter only the positive value
// let numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];
// let newnumber = numbers.filter(ele=>ele>=0);
// console.log(newnumber);


// Exercise 2: Suppose you have a list of Star Trek characters, 
// and you want to get just the characters that appeared in 
// Star Trek: The Next Generation. 
// Use filter() to filter the array of characters below 

// const characters = [
//   { name: 'James T. Kirk', series: ['Star Trek'] },
//   { name: 'Spock', series: ['Star Trek', 'Star Trek: The Next Generation'] },
//   { name: 'Jean-Luc Picard', series: ['Star Trek: The Next Generation'] },
//   { name: 'Worf', series: ['Star Trek: The Next Generation', 'Star Trek: Deep Space Nine'] }
// ];
// let newchar = characters.filter(el => el.series[0]==='Star Trek: The Next Generation');
// console.log(newchar);
// let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
// { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
// { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
// { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
// { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
// { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
// { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// let newusers = users.map(element => (` Hello ${element.firstName}`));
// //console.log(newusers);

// let users2 = users.filter(word => (word.role==="Full Stack Resident"));
// console.log(users2);
// let fs = [];
// let fullstack = users2.filter(name => (`Congratulations ${name.firstName}`));
// console.log(fullstack.firstName);

// let newArray = [2, 3, 4, 5, 6]; 

// // newArray.forEach(function(number, i) { 
// //     newArray[i] = newArray[i]*2; 
// // }); 

// // let newArray = [2, 3, 4, 5, 6]; 

// // newArray.forEach(function(number, i) { 
// //     newArray[i] = number * 2; 
// // }); 
// console.log(newArray);

// newArray.forEach((element, index) => {
//     console.log(`Current index: ${index}`);
//     console.log(element);
// });