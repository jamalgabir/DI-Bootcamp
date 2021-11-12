console.log('work');

(function (){
	let info = JSON.parse(localStorage.getItem('myitem'));
	let cont = document.getElementById('container');

    //console.log(info.length)

	const display = () =>{
	// e.preventDefault();
	    //checkfunc()

        //for(let i =0;i<info.length;i++){
        	//console.log(info[i])
	        for(let item of info){
	        	// for(let i =0;i<info.length;i++){
	        	//console.log(item)
	        	let end = item['End date and time']
	        	let tatus = item['Status']
		        let name = item['name']
		        let desc = item['Description']
		        let start = item['Start date and time']
		        let now = new Date()
                let en = new Date(end)
		        let now1 = en.getDate()
                let now2 = en.getMonth()
                let now3 = en.getFullYear()
                let ful = (now1+now2+now3)
		        
		        
		        let st = new Date(start)
                //console.log(st)

		        let day = st.getDate()
		        let month = st.getMonth()
		        let year = st.getFullYear()
		        let left = (ful-day-month-year)
		        function addZero(i) {
                    if (i < 10) {i = "0" + i}
                    return i;
                }
		        let h = addZero(st.getHours());
                let m = addZero(st.getMinutes());
                let s = addZero(st.getSeconds());
                let time = `${h}:${m}`;
		        //console.log(day,month,year)
		        

		        let div = document.createElement('div')
	            let title = document.createElement('h2')
                let p1 = document.createElement('p')
                let p2 = document.createElement('h4')
                let des = document.createElement('p')
                let check = document.createElement('input')
                // let check2 = document.createElement('input')
                
                let lable = document.createElement('lable')
                lable.textContent = 'Complete:'
                // let lable2 = document.createElement('lable')
                // lable2.textContent = 'Not Complete'

                // check2.setAttribute('type','checkbox')
                // check2.setAttribute('id','ch2')
                //check2.setAttribute('onclick','check2func()')
                //console.log(check)

                check.setAttribute('type','checkbox')
                //check.setAttribute('onclick','checkfunc()')
                check.setAttribute('id','myCheck')

                

                //console.log(ch1)
                des.textContent = `${desc}`
                des.setAttribute('id','des')
		        //console.log(des)
		        // let diffInSeconds = Math.abs(st - en) / 1000;
          //       let days = Math.floor(diffInSeconds / 60 / 60 / 24);
                //console.log(start-end)
                
                //descrip()
                title.textContent = `${name}`;
		        p1.textContent =`Starting ${day}.${month}.${year} ${time}`
		        p2.textContent =`${left} Days Left To Complete`;

		        div.appendChild(title);
		        div.appendChild(p1);
		        div.appendChild(p2);
                div.appendChild(des)
		        div.setAttribute('id','post')
		        //console.log(left)
		        //console.log(div)
		        cont.appendChild(div);
		        //div.addEventListener('click',descrip)
		        div.appendChild(lable)
		        div.appendChild(check)
		        // div.appendChild(lable2)
		        // div.appendChild(check2)
		        let ch1 = document.getElementById('myCheck');
		        //ch1.setAttribute('onclick','hh()');
                ch1.addEventListener('onclick',hh);
                //console.log(ch1)
                function hh(e){
                	//e.preventDefault()

                	console.log(e.target.parentElement)
                	if(ch1.checked === true){
                        console.log(ch1.checked)         	  
                	    e.target.parentElement.style.background = 'red'               	   

                	}
                	else if(ch1.checked === false){
                		console.log(ch1.checked)
                		
		                e.target.parentElement.style.background = 'darkblue'
                	}
                }
                
             


		    }
            


		    
	  
    };

    display();
}());

