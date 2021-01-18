var numArray = [3, 5, 7, 6, 9];
console.log(numArray);
console.log(numArray[2]);


numArray[3] = 8;
console.log(numArray);

var position = numArray.indexOf(5);
console.log(position);

numArray.push(4);
numArray.push(2);

console.log(numArray);

console.log(numArray.length);


numArray.pop;
console.log(numArray);

numArray.unshift(2);
console.log(numArray);
console.log(numArray.length);


var studentArray = ['Talha', 'Habib', 'sohel'];
console.log(studentArray);

studentArray.push('Sumon');         // To add at the end
console.log(studentArray);

studentArray.pop();             // To delete from the end
console.log(studentArray);

studentArray.shift();           // to delete from the beginning
console.log(studentArray);

studentArray.unshift('Sumon');      // To add at the beginning
console.log(studentArray);

studentArray.push('Talha');         // To add at the end
console.log(studentArray);

studentArray.push('Ashik');         // To add at the end
console.log(studentArray);


console.log(studentArray.slice(0, 3));      // To returns a shallow copy of your array 


console.log(studentArray);






