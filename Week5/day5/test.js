//console.log('hello');


const getinfo = async () =>{
	let rando = Math.floor((Math.random()*807)+1);
	let respone = await fetch(`https://pokeapi.co/api/v2/pokemon/${rando}/`);
    console.log(respone);
    let data = await respone.json();
    info = data;

    let name = await info.name;
    let id = await info.id;
    let height = await info.height;
    let weight = await info.weight;
    let type = await info.types[0].type.name;
    let img = await info.sprites.front_default;
    console.log(name)
    
}
getinfo();