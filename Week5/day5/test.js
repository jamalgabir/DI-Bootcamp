console.log('hello');
let photo;
let letpokenam;
let back = 0;
let pokemonType;
let pokeheight;
let pokeweight;
let pokeid;
let btn2 ;
let btn1;
let btn3;


const ifo = async ()=>{
	//loadingInfo();
	try{

		let num = Math.floor((Math.random()*807)+1);
	    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
	    let data = await res.json();
        console.log(data)
        back = data;
        console.log(back.id)
        photo = document.getElementById('imgdiv');
    	pokename = document.getElementById('nam');
    	pokeid = document.getElementById('p1');
    	pokeweight = document.getElementById('p2');
    	pokeheight = document.getElementById('p3');
    	pokepyte = document.getElementById('p4');
        photo.setAttribute('src',data.sprites.front_default)
        let newnam = data.name[0].toUpperCase()+data.name.slice(1);
        pokename.innerText = `${newnam}`
        pokeid.innerText = `Pokemon n° ${data.id}`
        pokeheight.innerText = `Height: ${data.height}`
        pokeweight.innerText = `Weight: ${data.weight}`
        pokepyte.innerText= `Type: ${data.types[0].type.name}`
	}catch(error){
		let errormasseg = await.getElementById('num');
		errormasseg.style.fontSize ='25px';
		errormasseg.style.marginTop = '30px';
		errormasseg.innerText = `Oh no! That Pokemon isn't available...`;
	}
	
	
	
	
    // console.log(data.name)
    // console.log(data.id)
    // console.log(data.height)
    // console.log(data.weight)
    // console.log(data.types[0].type.name)
    const loadingInfo = () =>{
    	let 
        


    }

};
ifo();



