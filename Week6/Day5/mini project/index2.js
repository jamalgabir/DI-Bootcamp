console.log('work');

(function (){
	let info = JSON.parse(localStorage.getItem('myitem'));
	let cont = document.getElementById('container');
    
	const display = () =>{
	        for(let item of info){
	        	let end = item['End date and time']
	        	let tatus = item['Status']
		        let name = item['name']
		        let desc = item['Description']
		        let start = item['Start date and time']
		        
                let en = new Date(end)
		        let now1 = en.getDate()
                let now2 = en.getMonth()
                let now3 = en.getFullYear()
                let ful = (now1+now2+now3)
                
                let now = new Date()

                let nowa = now.getDate()
                let nowb = now.getMonth()
                let nowc = now.getFullYear()
		        
		        
		        let st = new Date(start)
                

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
                let ed = document.createElement('p')
                let ok = document.createElement('p')
                ok.textContent = 'Save'
                ok.setAttribute('id','okbtn')


                ed.textContent='Edit'
                ed.setAttribute('id','edit')
                let can = document.createElement('p')
                can.setAttribute('id','cancel');
                can.textContent= 'x'
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
		        p1.textContent =`Start On ${day}.${month}.${year} ${time}`
		        p2.textContent =`${left} Days Left To Complete`;
                div.appendChild(can)
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
		        div.appendChild(ed)
		        div.appendChild(ok)
                let arr = JSON.parse(localStorage.getItem('myitem')) ||[];
                
                div.addEventListener('ondblclick',function(e){
                	// e.preventDefault()
                	console.log(div)
                	title.setAttribute('contentEditable','true')
                    title.focus();
                    p1.setAttribute('contentEditable','true')
                    ed.style.display = 'none'
                    ok.style.display='block'
                    check.style.display='none'
                    lable.textContent=''
                })

                ed.addEventListener('click',function(e){
                    title.setAttribute('contentEditable','true')
                    title.focus();
                    p1.setAttribute('contentEditable','true')
                    ed.style.display = 'none'
                    ok.style.display='block'
                    check.style.display='none'
                    lable.textContent=''
                    
                	console.log()
                })
                
                ok.addEventListener('click',function(){
                	title.removeAttribute('contentEditable','true')
                	ok.style.display='none'
                	check.style.display='inline'
                	ed.style.display = 'block'
                	lable.textContent='Complete'
                })

		        can.addEventListener('click',function(e){
		        	let com = confirm('Are you Sure Want Delet This Event ?')
		        	if(com==true){
		        		e.target.parentElement.remove()
		        	}else if(com==false){
		        		//console.log('no')
		        	}
		        })
		        
                check.addEventListener('click',function(e){                	
                	//console.log(e.target)
                	//e.preventDefault()
                	if(check.checked === true){
                        //console.log(check.checked)
                        console.log('yes')         	  
                	    e.target.parentElement.style.background = 'orange'
                	    p2.textContent = 'This Event Completed'
                	    //check.style.display = 'none'
                	    lable.textContent = 'Cancel'
                	}
                	else if(check.checked === false){
                		console.log('no')
                		p2.textContent = `${left} Days Left To Complete`;
                        lable.textContent='Complete'
		                e.target.parentElement.style.background = 'darkblue'
                	}
                })
                
             


		    }
            


		    
	  
    };

    display();
}());

