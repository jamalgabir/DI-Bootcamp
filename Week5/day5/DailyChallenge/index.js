console.log('helloo');
const convert = async () =>{
     // e.preventDefault()
	let response = await fetch('http://api.currencylayer.com/live?access_key=6b543e9294a71d26a6606f5449cf71a6&format=2');
	let data = await response.json();
	let term = await data.quotes;

	let form = document.getElementById('browser1');
    console.log(term.USDAED);
    const vle = form.value;
    console.log(vle);
	console.log(term.vle);
	
	
};
//convert();
let bt = document.getElementById('btn');
bt.addEventListener('click',convert);
function get(){

	
};
