////////////////////////////////////////////
//
////////////////////////////////////////////
/////////////////////////////////////
//     Play A Guessing Game      ///
///////////////////////////////////
// program where the user has to guess a number generated by a program


//var guess;
/*
function playTheGame(){ 
    var usernum;
    let user = confirm("do you want to play");
    if(!user){
        alert("No problem goodbye")
    }else if(user){
        var usernum = prompt("Enter number betwen 0 to 10 ");
        promp();
    }
    function promp() {
        if (isNaN(usernum)){
            alert("Sorry Not a number, Goodbye");
        }else if (usernum<0||usernum>10){
            alert("Sorry it’s not a good number, Goodbye");
        }else if (usernum>0&&usernum<=10){
            
            test();


        }
    }
    var computerNumber= Math.floor( 10*Math.random() ) +1;
    
} 
playTheGame();
function test(usernum,computerNumber){
    for(i=3;i>0;i--){
        i--;
        if(computerNumber==usernum){
            alert(`WINNER YOUR GUSEE ${usernum} and coputer number ${computerNumber}`);
            
            break;  
        }
        else if(usernum>computerNumber){
            alert("Your number is bigger then the computer’s, guess again");
            
            promp();
        }
        else if (usernum<computerNumber){
            alert("your number is smaller then the computer’s, guess again");
            promp();
        }
        else{
            alert(" GAME OVER ! ");
        }

    }

            
} 
//test();
*/
/////////////////////////////////////////////
//Daily Challenge: 99 Bottles Of Beer
/////////////////////////////////////////////

for (var numberOfBottles = 99; numberOfBottles >= 0; numberOfBottles--) {
    var bottleWord = "bottle";
   if (numberOfBottles <= 0) {
      bottleWord = "bottles";
      console.log("No more " + bottleWord + " of beer on the wall."); 
      console.log("No more " + bottleWord + " of beer,");
      console.log("Go to the store and buy some more, 99 bottles of beer on the wall");
   }
   else if (numberOfBottles == 1 ) {
       bottleWord = "bottle";
       console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
       console.log(numberOfBottles + " " + bottleWord + " of beer,");
       console.log("Take one down, pass it around,");
   }
   else if (numberOfBottles >= 2) {
       bottleWord = "bottles";
       console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
       console.log(numberOfBottles + " " + bottleWord + " of beer,");
       console.log("Take one down, pass it around,");
   }
       
}