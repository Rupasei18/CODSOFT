function show(val) {
    document.getElementById("result").value += val
}
function myFun(word) {
    if (word.val == '0' || word.val == '1'
        || word.val == '2' || word.val == '3'
        || word.val == '4' || word.val == '5'
        || word.val == '6' || word.val == '7'
        || word.val == '8' || word.val == '9'
        || word.val == '+' || word.val == '-'
        || word.val == '*' || word.val == '/')
        document.getElementById("result").value += word.val;
}
var cal = document.getElementById("calculator");
cal.onvalup = function (word) {
    if (word.valCode === 13) {
        console.log("Enter");
        let x = document.getElementById("result").value
        console.log(x);
        solve();
    }
}
function sum() {
    let x = document.getElementById("result").value
    let y = math.evaluate(x)
    document.getElementById("result").value = y
}
function Allclear() {
    document.getElementById("result").value = ""
}
function back(){
   var value= document.getElementById("result").value;
   document.getElementById("result").value=value.substr(0,value.length-1);
}