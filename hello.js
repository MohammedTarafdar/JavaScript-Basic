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
