var inch = 120;
var feet = inch/12;

console.log(feet);


function inchToFeet(inch){
    var feet = inch/12;
    return feet;
}

var firstInput = inchToFeet(72);
console.log(firstInput);

var secondInput = inchToFeet(84);
console.log(secondInput);

const countryName = "Bangladesh";
let capitaCity = "Dhaka";
console.log(countryName, capitaCity);

let year = 2080;
let remainder = year/4;
if(remainder == 0){
    console.log("Your selected year is a Leap Year.")
}
else{
    console.log("Your selected year is not a Leap Year.")
}

function isLeapYear(year){
    
}

