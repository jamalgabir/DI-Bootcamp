console.log('Helloooooo');


let xhl = new XMLHttpRequest();

let button = document.getElementById('btn');
let height = document.getElementById('height');
let gender = document.getElementById('gender');
let names = document.getElementById('name');
let homeWorld = document.getElementById('home-world');
let birthYear = document.getElementById('birth-year');
let ring = document.getElementsByClassName('ring')[0];
//console.log(ring);

function getifo(){
	updatloding();
	let random = Math.floor((Math.random()*88)+1);
	let apiurl = 'https://swapi.dev/api/people/'+random+'/';
    xhl.open('GET',apiurl);
    xhl.responseType = 'json';
    xhl.send();
    //console.log(xhl);
    //-------------------------------------
    xhl.onload = function(){
    	if(xhl.status !=200){
    		updatError();
            console.log('there was Error');
    	}else{
    		updatinfo(xhl.response)
    		//console.log(xhl.name)

    	}
    };
    xhl.onerror = function(){
    	updatError();
    	console.log('boooboooboo');
    }

    //------------------------------------
    function updatinfo(res){
    	//console.log(res)
	    let url = new URL(res.homeworld);
	    //console.log(url)
	    url.protocol = 'https:'
	    xhl.open('GET',url.href);
	    xhl.responseType='json';
	    xhl.send();
	    //console.log(res)
	    xhl.onload = function(){
    	    if(xhl.status != 200){
    		    console.log('there error in info 2');
    	    }else{
    		    updatinfo2(xhl.response);
    	    }
        }
        xhl.onerror = function(){
    	    console.log('error 3')
        }
        ring.style.display='none';
        names.innerText= `${res.name}`;
        height.innerText = `Height: ${res.height}`;
        gender.innerText = `Gender: ${res.gender}`;
        birthYear.innerText = `Birth Year: ${res.birth_year}`;


    }

};


function updatinfo2(vale){
	homeWorld.innerText = ` Home World: ${vale.name}`;
	//console.log(homeWorld)

};



function updatError(){
	ring.style.display='none'
	names.innerText = "OOPS That Person isn't Available !";
	height.innerText = ''
	gender.innerText = ''
	birthYear.innerText = ''
	homeWorld.innerText =''
};

function updatloding(){
   ring.style.display = 'inline';
   //console.log(ring)
	// names.innerText = 
	height.innerText = ''
	gender.innerText = ''
	birthYear.innerText = ''
	homeWorld.innerText =''
};

button.addEventListener('click',getifo);