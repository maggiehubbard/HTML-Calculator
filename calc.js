
//declare valiables



function toBox (x){
    var box = document.getElementById("display");
    box.value += x;
    if (x==='C'){
        box.value='';
    }
} 

function answer(){
    var box = document.getElementById("display");
    x=box.value;
    x=eval(x);
    box.value=x;
}
function sqRt()
{
var box = document.getElementById("display");
x=box.value;
x=eval(x*x);
box.value=x;
}
function backSpace(){
    var box = document.getElementById("display");
    var num = box.value;
    var len = num.length-1;
    var newNumber = num.substring(0, len);
    box.value = newNumber;   
}
