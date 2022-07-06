
function compareToTen(num){
	return new Promise((resolve,reject)=>{
		if(num>10){
			resolve(`${num} greater than 10, seccess !`)
		}
		else if(num<10){
			resolve(`${num} less than 10, error !`)
	    }else{
	    	reject('noooooo')
	    }

	})
};
compareToTen(43)
.then(re => console.log(re))
.catch(erroe => console.log(erroe));

compareToTen(8)
.then(re => console.log(re))
.catch(erroe => console.log(erroe));
