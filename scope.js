/*
# What is variable in JavaScript?
# What is identifiers in JavaScript?
# What is Strict Mode in JS?

*/

/*
# JavaScript local variable: JS local variable is declared inside block or function. It is accessible within the function or block only.
*/

function test(){
    var number1 = 10;               // local variable
    var number2 = 20;               // local
    var total = number1+number2;    // local
    return total;
}

console.log(test());

// JS global variable: A variable is declared outside the function is konwn as global variable. Global variable is accessible from any function.

var totalAmount = 100;      // global variable

function one(){
    console.log("Total Amount is :", totalAmount);
}

function two(){
    console.log("Total Amount is :", totalAmount);
}

one();
two();

// One statement but many variables

var firstName = "Mohammed", lastName="Tarafdar", age=40;

console.log(firstName);
console.log(lastName);
console.log(age);


// Does JS allow declare a global variable withen a function?

/*
function testLocalVariable(){
    window.value = "test";
}

function testGlobalVariable(){
    alert(window.value);
}

testGlobalVariable();
testGlobalVariable();
*/




