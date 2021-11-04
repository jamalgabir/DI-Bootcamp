console.log('it is work');




//------------------------------------------------------
const promise1 =  Promise.resolve(76);

//-------------------------------------------------------
const promise2 = Promise.resolve(90);

//---------------------------------------------
const promise3 = new Promise(resolve=>setTimeout(resolve,100,'third'));
//--------------------------------------------
Promise.all([promise1,promise2,promise3])
.then(result =>{
	console.log(result)
})
.catch(error =>console.log(`OOOPS!:${error}`));

