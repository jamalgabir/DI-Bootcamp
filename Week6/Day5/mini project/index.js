console.log('it is work');
//console.log(arr);
// let obj;
(function(){
    let value1 = document.getElementById('value1');
    let value2 = document.getElementById('value2');
    let value3 = document.getElementById('value3');
    let value4 = document.getElementById('value4');
    let value5 = document.getElementById('value5');
    let pushbtn = document.getElementById('btn');
    let h1 = document.getElementById('h1');
    let add = document.getElementById('btn1');
    let form = document.getElementById('myform');
    //console.log(value2.name);
    let arr = JSON.parse(localStorage.getItem('myitem'));

    const addItems = (e) =>{
	    e.preventDefault();
	    let obj = {}
	    if(value1.value==''||value2.value==''||value3.value==''||value4.value==''||value5.value==''){
		    h1.textContent = 'Please fill All Statements'
		    let img = document.createElement('img')
            let url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Error.svg/40px-Error.svg.png'
		    img.setAttribute('src',url);
		    h1.appendChild(img)
		    h1.style.color = 'red'
            form.reset();
	    }else{
		    h1.textContent = `Done Successfully`
		    let img = document.createElement('img')
            let url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/40px-Flat_tick_icon.svg.png'
		    img.setAttribute('src',url);
		    h1.appendChild(img)
		    h1.style.color = ''
		    obj[value1.name] = value1.value;
	        obj[value2.name] = value2.value;
	        obj[value3.name] = value3.value;
	        obj[value4.name] = value4.value;
	        obj[value5.name] = value5.value;
		    arr.push(obj)
		    localStorage.setItem('myitem',JSON.stringify(arr))
		    obj = JSON.parse(localStorage.getItem('myitem'))
		    console.log(obj)
		
     
            form.reset();
	    }
	
    }
    add.addEventListener('click',addItems);

}());


// let see = JSON.parse(localStorage.getItem('myitem'));
// console.log(see);