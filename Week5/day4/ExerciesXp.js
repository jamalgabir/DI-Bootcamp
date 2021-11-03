console.log('it work!');
//----------------------------------------
//Exercise 1: Conversion
//----------------------------------------
async function game(){
	const rest = await fetch("https://swapi.dev/api/starships/9/");
	const data = await rest.json();
	console.log(data);	
};
game();
//-----------------------------------------
//Exercise 2: Analyze
//----------------------------------------
//calling
//resolved
//---------------------------
