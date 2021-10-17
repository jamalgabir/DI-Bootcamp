
function PlayTheGame(){
    var computerNumber = Math.floor(Math.random()*10+1);
    var choce = confirm("Do you want to play ??");
    if(!choce){
        alert("No probleme goodbye!");
    }else{
       test();
    }
    function test(){
        var usernum= prompt("enter number betwen 0 to 10");
        if(isNaN(usernum)||usernum==""){
            alert("This Not a number goodbye");
        }
        else if (usernum>10||usernum<0){
            alert("this is Wrong number goodbye");
        }
        else if(usernum>computerNumber){
            alert(`${usernum} too hight than ${computerNumber} try agian`);
        
        }
        else if (usernum<computerNumber){
            alert(`${usernum} too low than ${computerNumber} try agian`)
        }
        else if (usernum==computerNumber){
            alert("WINNER$$$$$$")
        }
    }
}
PlayTheGame();




