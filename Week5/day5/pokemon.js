console.log('hello');
let photo;
let letpokenam;
let nu = 0;
let pokemonType;
let pokeheight;
let pokeweight;
let pokeid;
let btn2 = document.getElementById('btn2') ;
let btn1= document.getElementById('btn1');
let btn3 = document.getElementById('btn3');
let ring;


const ifo = async () =>{
	loadingInfo();
	try{

		let num = Math.floor((Math.random()*807)+1);
	    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`)
	    let data = await res.json();
        //console.log(data)
        nu = data;
        console.log(nu.id)
        const name = await data.name;
        const id = await data.id;
        const weight = await data.weight;
        const height = await data.height;
        const type = await data.types[0].type.name[0].toUpperCase()+data.types[0].type.name.slice(1);
        const imges = await data.sprites.front_default;
        photo = document.getElementById('imgdiv');
    	pokename = document.getElementById('nam');
    	pokeid = document.getElementById('p1');
    	pokeweight = document.getElementById('p2');
    	pokeheight = document.getElementById('p3');
    	poketype = document.getElementById('p4');
        photo.setAttribute('src',imges)
        photo.removeAttribute('hidden','true')
        ring=document.getElementsByClassName('ring')[0];
        ring.setAttribute('hidden','true');
        let newnam = name[0].toUpperCase()+name.slice(1);
        pokename.innerText = `${newnam}`
        pokeid.innerText = `Pokemon n° ${id}`
        pokeheight.innerText = `Height: ${height}`
        pokeweight.innerText = `Weight: ${weight}`
        poketype.innerText= `Type: ${type}`
	}
	catch(error){
		let errormasseg = document.getElementById('num');
		errormasseg.style.fontSize ='25px';
		errormasseg.style.marginTop = '30px';
		errormasseg.innerText = `Oh no! That Pokemon isn't available...`;
	};
		
}	
	
    
const loadingInfo = function(){
    let photo = document.getElementById('imgdiv');
    photo.setAttribute('hidden','true');
    let pokename = document.getElementById('nam');
    pokename.innerText = '';
    let pokeid = document.getElementById('p1');
    pokeid.innerText='';
    let pokeweight = document.getElementById('p2');
    pokeweight.innerText='';
    let pokeheight = document.getElementById('p3');
    pokeheight.innerText='';
    let poketype = document.getElementById('p4');
    poketype.innerText='';
    let ring=document.getElementsByClassName('ring')[0];
    ring.removeAttribute('hidden','true');
};
    
const next = async () =>{
	let respone = await fetch(`https://pokeapi.co/api/v2/pokemon/${++nu.id}/`);
    let data = await respone.json();
    nu = data;
    //console.log(nu.id);
    const name = await data.name[0].toUpperCase()+data.name.slice(1);
    const id = await data.id;
    const weight= await data.weight;
    const height = await data.height;
    const type = await data.types[0].type.name[0].toUpperCase()+data.types[0].type.name.slice(1);
    const imges = await data.sprites.front_default;
    //console.log(imges)
    photo=document.getElementById('imgdiv');
    photo.setAttribute('src',imges)
    photo.removeAttribute('hidden', 'true')
    pokename=document.getElementById('nam');
    pokename.innerText =`${name}`
    pokeid = document.getElementById('p1');
    pokeid.innerText = `Pokemon n° ${id}`
    pokeweight=document.getElementById('p2');
    pokeweight.innerText = `Weight: ${weight}`
    pokeheight=document.getElementById('p3');
    pokeheight.innerText = `Height: ${height}`
    poketype=document.getElementById('p4');
    poketype.innerText = `Type: ${type}`
    

};
btn1.addEventListener('click',next);

const preivo = async () =>{
	let respone = await fetch(`https://pokeapi.co/api/v2/pokemon/${--nu.id}/`);
    let data = await respone.json();
    nu = data;
    //console.log(nu.id);
    const name = await data.name[0].toUpperCase()+data.name.slice(1);
    const id = await data.id;
    const weight= await data.weight;
    const height = await data.height;
    const type = await data.types[0].type.name[0].toUpperCase()+data.types[0].type.name.slice(1);
    const imges = await data.sprites.front_default;
    //console.log(imges)
    photo=document.getElementById('imgdiv');
    photo.setAttribute('src',imges)
    photo.removeAttribute('hidden', 'true')
    pokename=document.getElementById('nam');
    pokename.innerText =`${name}`
    pokeid = document.getElementById('p1');
    pokeid.innerText = `Pokemon n° ${id}`
    pokeweight=document.getElementById('p2');
    pokeweight.innerText = `Weight: ${weight}`
    pokeheight=document.getElementById('p3');
    pokeheight.innerText = `Height: ${height}`
    poketype=document.getElementById('p4');
    poketype.innerText = `Type: ${type}`
    

};
btn3.addEventListener('click',preivo);


