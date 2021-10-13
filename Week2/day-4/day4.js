/*
function pets(name, color,breed) {
	console.log(`your name is: ${name} and your color is: ${color}`)
}
pets("jamal","black","something spicial");
function youInfo(age,farcolor=["blue","yellow","red"]){
	let twiceAge = age*2;
	console.log(`your age is: ${age} and your favorite colors is: ${farcolor}`);
	console.log(`this is all the colors: ${farcolor}`);

}
youInfo(30,"green,blue");
*/
// This is my Daly Chalanges for Day4
var points = new Array(100);

for (var i = 0; i < 100; i++) {


    points[i] = i + 1;

}

    for (var i = 0; i < points.length; i++) {
        console.log(points[i]); //This prints the values that you stored in the array
    }