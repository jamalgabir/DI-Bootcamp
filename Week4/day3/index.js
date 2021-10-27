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
let inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 }, /// push to new array
  {
    id: 4,
    car_make: "Land Rover",
    car_model: "Defender Ice Edition",
    car_year: 2010,
  },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];
let getCarHonda = (carInventory) => {
  let hondaArray = inventory.filter((v) => v.car_make === "Honda");
  let firstHonda = hondaArray[0];
  console.log(hondaArray, firstHonda);
  return `This is a ${firstHonda.car_make} ${firstHonda.car_model} from ${firstHonda.car_year}`;
};
console.log(getCarHonda(inventory));
//10:01
let inventory2 = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  {
    id: 4,
    car_make: "Land Rover",
    car_model: "Defender Ice Edition",
    car_year: 2010,
  },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];
const sortCarInventoryByYear = (carInventory) =>carInventory.sort((a, b) => (a.car_year > b.car_year && 1) || -1);
console.log(sortCarInventoryByYear(inventory2));
