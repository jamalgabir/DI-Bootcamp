console.log('it is work');
//------------------------------------------------------
const promise1 = new Promise((resolve, reject)=>{
	resolve(99)
	// reject('There is Error in First');
});
//-------------------------------------------------------
const promise2 = new Promise((resolve, reject)=>{
	resolve(69)
});
//---------------------------------------------
const promise3 = new Promise((resolve, reject)=>{
	setTimeout(resolve,100,"fooo")
});

Promise.all([promise1,promise2,promise3])
.then(result =>{
	console.log(result)
})
.catch(() =>console.log(`There is problem please fixed !`));

