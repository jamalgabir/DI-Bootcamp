
/////////////////////
//NUMBERS FUNCTION//
///////////////////
function number(num){
    document.getElementById("hold").value+=num
}
/////////////////////
//EQUAL FUNCTION//
///////////////////
function equal()
{
    var result = eval(document.getElementById('hold').value);
    document.getElementById('hold').value = result;
}
/////////////////////
//CLEAR FUNCTION//
///////////////////
function clr()
{
document.getElementById("hold").value = ""
}
//////////////////
//REST FUNCTION//
////////////////
function rest(){
    document.getElementById("hold").
    value=document.getElementById("hold").value.slice(0,-1);
}
