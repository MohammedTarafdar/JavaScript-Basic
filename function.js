function printFunction(){
    console.log("Hi, I am print function.")
}

printFunction();

// function with single parameter

var num = 5;
function doubleIt(num){
    var result = num*2;
    console.log(result);
}

doubleIt(num);

doubleIt(10);

doubleIt(500);

function doubleMyNumber(num){
    var result = num*2;
    return result;
}

console.log(" ");
var firstNumber = doubleMyNumber(10);
var secondNumber = doubleMyNumber(15);
var totalNumber = firstNumber + secondNumber;
console.log(firstNumber, secondNumber);
console.log(totalNumber);

// function with multiple parameter

function sum(num1, num2){
    var total = num1 + num2;
    return total;
}
console.log(" ");
var myTotal = sum(200, 300);
console.log(myTotal);