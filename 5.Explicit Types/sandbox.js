// explicit types
var myname;
var age;
var isStudent;
// age = "imane";
age = 25;
//isStudent = 'yes';
isStudent = false;
// arrays
//let couples: string[];
// couples.push("imane"); // get error in the browser cz couples is not initalised as []
var couples = [];
couples.push("imane");
// couples = [25, 33]; ==> error
couples = ["imane", "assem"];
// union types
var mixed = [];
mixed.push("imane");
mixed.push(25);
// mixed.push(false); ==> error
console.log(mixed);
var uid;
uid = 123;
uid = "123";
// uid = false; ==> error
// objects
var esiestOne;
esiestOne = { name: "imane", age: 25 };
// esiestOne = "assem"; ==> error
esiestOne = [];
var esiestTwo;
// esiestTwo = []; ==> error
// esiestTwo = {}; ==> error
// esiestTwo = { name: "imane", age: 25, beltColor: "purple", skills: ["web dev"] }; ==> error
esiestTwo = { name: "imane", age: 25, beltColor: "purple" };
