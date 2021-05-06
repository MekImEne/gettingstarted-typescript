// explicit types
let myname: string;
let age: number;
let isStudent: boolean;

// age = "imane";
age = 25;

//isStudent = 'yes';
isStudent = false;

// arrays
//let couples: string[];
// couples.push("imane"); // get error in the browser cz couples is not initalised as []

let couples: string[] = [];

couples.push("imane");
// couples = [25, 33]; ==> error
couples = ["imane", "assem"];

// union types
let mixed: (string | number)[] = [];

mixed.push("imane");
mixed.push(25);
// mixed.push(false); ==> error
console.log(mixed);

let uid: string | number;
uid = 123;
uid = "123";
// uid = false; ==> error

// objects

let esiestOne: object;
esiestOne = { name: "imane", age: 25 };
// esiestOne = "assem"; ==> error
esiestOne = [];

let esiestTwo: {
  name: string;
  age: number;
  beltColor: string;
};

// esiestTwo = []; ==> error
// esiestTwo = {}; ==> error
// esiestTwo = { name: "imane", age: 25, beltColor: "purple", skills: ["web dev"] }; ==> error
esiestTwo = { name: "imane", age: 25, beltColor: "purple" };
