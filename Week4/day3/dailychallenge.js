//console.log("hello");
let inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];
function getCarHonda(inventory){
	for(i in inventory){
		console.log(inventory[i].car_make)
	}
}
getCarHonda(inventory);











































// let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
// { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
// { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
// { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
// { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
// { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
// { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// let newusers = users.map(element => (` Hello ${element.firstName}`));
// console.log(newusers);

// //let users2 = users.filter(word => (word.role==="Full Stack Resident"));
// //console.log(users2);
// let fs = [];
// let fullstack = users.filter(name => (`Congratulations ${name.firstName}`));
// console.log(fullstack.push(fs));