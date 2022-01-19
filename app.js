"use strict";
function addNumber(n1, n2) {
    return n1 + n2;
}
function printLine(n) {
    console.log('Result is ' + n);
}
function addWithCallback(n1, n2, call) {
    var result = n1 + n2;
    call(result);
}
printLine(addNumber(8, 2));
var fun;
fun = addNumber;
addWithCallback(8, 10, function (result) {
    console.log(result);
});
var button = document.querySelector('button');
button.addEventListener('click', function () {
    console.log("button clicked");
});
