console.log('it is work');

class Video{
	constructor(title,uploader,time){
		this.title = title;
		this.uploader = uploader;
		this.time = time;	
	}
	watch(){
		console.log(`${this.uploader} Watched All Time ${this.time} of ${this.title}!`);

	}
}

let Video1 = new Video('Funny Show','Davi','2:20')
let Video2 = new Video('Discovery Channal','john','1:03');
Video2.watch();
Video1.watch();



const myVideo =[['Discovery','Smath','2:09'],
               ['TV Show','Roony','2:09'],
               ['Action','Dani','8:09'],
               ['Drama','Davi','3:09'],
               ['Cenima','Jack','0:09']];

let all = myVideo.forEach((v,i) => v);
console.log(all);













































// var johnSmith = {
//  firstName: "John",
//  lastName: "Smith",
//  address: { //Composition
//  street: "123 Duncannon Street",
//  city: "London",
//  country: "United Kingdom"
//  }
// };

// var nickSmith = {
//  firstName: "Nick",
//  lastName: "Smith",
//  address: { //Composition
//  street: "321 Oxford Street",
//  city: "London",
//  country: "United Kingdom"
//  }
// };

// johnSmith.parent = nickSmith; //Association

// var company = {
//  name: "ACME Inc.",
//  employees: []
// };

// //Aggregation
// company.employees.push(johnSmith);
// company.employees.push(nickSmith);