console.log('it work?');
let xml = new XMLHttpRequest();
xml.open('GET','https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
xml.send();
xml.onload = function(){
	if(xml.status !=200){
		console.log('some thing wrong')
	
	}else{
		let response = JSON.parse(xml.response)
		console.log('Here the result: ',response)
	}
}