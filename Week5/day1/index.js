console.log("it is work?");





//-------------------------------------------------
// let jsonString = `
// {
//     "quiz": {
//         "sport": {
//             "q1": {
//                 "question": "Which one is correct team name in NBA?",
//                 "options": [
//                     "New York Bulls",
//                     "Los Angeles Kings",
//                     "Golden State Warriros",
//                     "Huston Rocket"
//                 ],
//                 "answer": "Huston Rocket"
//             }
//         },
//         "maths": {
//             "q1": {
//                 "question": "5 + 7 = ?",
//                 "options": [
//                     10,
//                     11,
//                     12,
//                     13
//                 ],
//                 "answer": 12
//             },
//             "q2": {
//                 "question": "12 - 8 = ?",
//                 "options": [
//                     1,
//                     2,
//                     3,
//                     4
//                 ],
//                 "answer": 4
//             }
//         }
//     }
// }`

// Parse this JSON string into a JS object
// then use array or object methods to display values
// then stringify pretty print (look at the lesson)
// let new1 = JSON.parse(jsonString);
// //console.log(new1);
// for(let v in new1){
// 	console.log(new1[v])
// 	let myarr = new1[v];
// 	console.log(`answer1 is:${myarr.maths.q1.answer}\nanswer2 is: ${myarr.maths.q2.answer}`)
// }

let marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
};

let json = JSON.stringify(marioGame);
console.log(json);
console.log(JSON.parse(json,null,2));
//console.log(JSON.(json));

































