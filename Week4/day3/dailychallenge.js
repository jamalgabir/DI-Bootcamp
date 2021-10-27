//console.log("hello");


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





