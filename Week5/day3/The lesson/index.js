console.log('it work');

//CHAINING

// let completed = true;

// for (let i = 0; i<5; i++){
// 	console.log("HELLO BEFORE")
// }

// let learnJS = new Promise(function (resolve, reject) {
// 	    if (completed) {
// 	        resolve("I have completed learning JS.");
// 	    } else {
// 	    	console.log("After 5 seconds")
// 	        reject("I haven't completed learning JS yet.");
// 	    }
// });

// for (let i = 0; i<5; i++){
// 	console.log("HELLO AFTER")
// }

// learnJS
// .then(message => {
// 	if (message.includes("not")) {
// 		throw new Error("we have a problem")
// 		// return Promise.reject("we have a problem")
// 	} else {
// 		return message.toUpperCase()
// 	}
// })
// .then(upperMessage => {
// 	console.log(a)
// 	return upperMessage.split(" ")
// })
// .then(arr => console.log(arr))
// .catch(error => console.log("in the catch", error))
// .finally(() => console.log("In the finally"))

// for (let i = 0; i<5; i++){
// 	console.log("HELLO END")
// }

// Exercise on PROMISES
// make a function that takes in a single parameter
// and returns a new promise. using setTimeout,
// after 5000 milliseconds, the promise will either
// resolve or reject. if the input is a string,
// the promise resolves with that same string
// uppercased. if the input is anything but a string
// it rejects with that same input
// use then to repeat the string twice
// use catch to console.log the error
// finally call a function that console.log ("congratulation")
// function makePromise(parameter) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof parameter === "string") {
//         resolve(parameter.toUpperCase() + " ");
//       } else {
//         reject("This is not a string: ", parameter);
//       }
//     }, 5000);
//   });
// }
// makePromise("hello World")
//   .then((str) => console.log(str.repeat(2)))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("congratulation"));
// (function myfuc(resol){
// 	return new Promise((resolve, reject)=>{
// 		setTimeout(() =>{
// 		    if(typeof resol==='string'){
// 			    resolve(resol.toUpperCase);
// 		    }else{
// 			    reject('this is not string',resol);
// 		    }


    
 
//         },2000);
//     }    	
// });

// myfunc('hello')
// .then(str);


//---------------------------------
// Part I
// Use fetch to fetch one 1 random gif with the category of "sun"
// You append the gif to the page
// Part II
// Instead of having a fixed category of gif.
// Fetch one word from this api :http://random-word-api.herokuapp.com/word?number=1
// Depending on the word, fetch 1 random gif with the word as its category
// Display the word and the gif on the page
// Part III
// If the gif api doesn't find a gif depending on the word
// (because the word can be strange),
// then instead of displaying an empty image, display a gif that says "404 ERROR"

let url = 'https://lisenakache.github.io/HttpRequestGithub/test.json'
let url1 = 'https://api.giphy.com/v1/gifs/random?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

let btn = document.getElementById("btn");
btn.addEventListener("click", requestData)

async function requestData (e) {
	//e.preventDefault()
	try{
        let fetched = await fetch(url1);
    //console.log(fetched);
    // .then(response => {
        if(fetched.status === 200){
            let response = await fetched.json();
            console.log(response);
        } 
        else {
            throw new Error("not 200");
        }   
    }catch{
        console.log('wthere is problem');
    }
    console.log(response.data.bitly_url)
    console.log(response.data.images.downsized.url1)
    let sr = response.data.images.downsized.url1;
    let mycon = document.getElementById('container');
    let ima = document.createElement('img');
    ima.src = sr;
    ima.alt= 'giphy';
    ima.id = 'images';
    mycon.appendChild(ima);    	

}
//---------------
// let url = 'https://jsonplaceholder.typicode.com/users'

// let btn = document.getElementById("btn");
// btn.addEventListener("click", requestData)

// // with async-await

// async function requestData () {
//     try {
//         let fetched = await fetch(url);
//         if(fetched.status === 200){
//             let response = await fetched.json();
//             console.log(response)
//         } else {
//             throw new Error("not 200")
//         }
//     } catch {
//         console.log("The error is")
//         let results = document.getElementById("results");
//         results.innerHTML = "<iframe src='https://giphy.com/embed/3o6Zt6ML6BklcajjsA' width='480' height='360' frameBorder='0' class='giphy-embed' allowFullScreen></iframe></p>";
//     }
// }


