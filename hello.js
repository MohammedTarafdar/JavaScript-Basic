console.log(407);
console.log(222);
var a= 10;
console.log(a)

var bananaPrice = 12;
console.log(typeof bananaPrice);

var myName = "Ashik";
console.log(typeof myName);

var aboutMe ="My name is Mohammed Ashikur Rahman Tarafdar. I am from Bangladesh."
console.log(aboutMe);
console.log(typeof aboutMe);
console.log(aboutMe.toLowerCase());
console.log(aboutMe.toUpperCase());
console.log(aboutMe.indexOf('name'));
console.log(aboutMe.indexOf('NAME'));       // case sensitive
console.log(aboutMe.indexOf("from"));
console.log(aboutMe.indexOf('new'));
console.log(aboutMe.split('a'));
console.log(aboutMe.split(' '));

var num1 = 25;
var num2 = '25.5';
console.log(num1 +num2);

num2 = parseFloat(num2);
console.log(num1+num2);

num2 = parseInt(num2);
console.log(num1+num2);

num2 = +num2;
console.log(num1+num2);

var number = 0.1;
var number1 = 0.2;
var total = number+number1;
console.log(total);

total = total.toFixed(2);
console.log(total);

// Arithmatic Operations

var price1 = 22;
var price2 = 5;
var total1 = price1 + price2;       // Addition
console.log(total1);

var total2 = price1 - price2;       // subtraction
console.log(total2);

var total3 = price1 * price2;       //Multiplication
console.log(total3);

var total4 = price1 / price2;       // division
console.log(total4);

var total5 = price1 % price2;       // Modulus / Remainder
console.log(total5);


var newNumber;
newNumber = 10;
console.log(newNumber);

newNumber = newNumber+1;
console.log(newNumber);

newNumber++;                    // Increment
console.log(newNumber);

newNumber--;                    // Decrement
console.log(newNumber);

// concatination

var newName = "Ashik";
var age = 40;
var result = newName + age;
console.log(result);

var result1 = age + newName;
console.log(result1);

var newAge = "41";
var result2 = age + newAge;
console.log(result2);


// absolute number

var newNum = -10;
console.log(newNum);

var absoluteNum = Math.abs(newNum);
console.log(absoluteNum);

// round up

var newNum1 = 5.4912;
var newResult10 = Math.round(newNum1);
console.log(newResult10)

var newNum2 = 5.51345;
var newResult11 = Math.round(newNum2);
console.log(newResult11);

var newNum3 = 5.1234;
var newResult12 = Math.ceil(newNum3);
console.log(newResult12);

var newNum4 = 5.9999;
var newResult13 = Math.floor(newNum4)
console.log(newResult13);

var newNum10 = 1;
var randomNum = Math.random(newNum10);
console.log(randomNum);

var randomNum1 = Math.random(newNum10) * 100;
console.log(randomNum1);

var randomRoundNumber = Math.round(randomNum1);
console.log(randomRoundNumber);

