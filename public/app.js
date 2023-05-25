var display =document.getElementById("display")
function getvalue(num) {
    display.value += num;
}
function calculatingnum(){
 display.value = eval(display.value)
}
function delet(){
    display.value = "";
}