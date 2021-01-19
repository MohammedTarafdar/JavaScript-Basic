var student1 = {ID:"AH-123", FirstName:"Md", LastName:"Rahman", Phone:3473370809};
var student2 = {ID:"AH-124", FirstName:"Abul", LastName:"Hossain", Phone:3213378909};
var student3 = {ID:"AH-125", FirstName:"Abid", LastName:"Sorker", Phone:2343370823}

console.log(student1, student2, student3)
console.log(" ");

// how to read particular value from an object

var studentId = student1.ID;
console.log(studentId);
console.log(" ");

var studentId = student1["ID"];
console.log(studentId);
console.log(" ");

var expectedID = "ID";
var studentId = student1[expectedID];
console.log(studentId);
console.log(" ");


// how to change a prticular value of an Object

student1.FirstName = "Muhammad";
console.log(student1);

student1["FirstName"] = "Muhammad";
console.log(student1);


// new object
var angel = {fruit:"mango"};

console.log(angel);
console.log(" ");

angel.fruit ="orange";
console.log(angel);
console.log(" ");

angel["fruit"] ="banana";
console.log(angel);

