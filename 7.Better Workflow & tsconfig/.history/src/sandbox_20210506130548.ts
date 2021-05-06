let age: any = 25;

age = true;
console.log(age);

age = "Imane";
console.log(age);

age = { name: "imane", isStudent: false };
console.log(age);

let mixed: any[] = [];

mixed.push(25);
mixed.push("imane");
mixed.push(false);
mixed.push(33);
mixed.push("assem");
console.log(mixed);

let esiest: { name: any; age: any };
esiest = { name: "assem", age: 33 };
console.log(esiest);

esiest = { name: 33, age: "assem" };
console.log(esiest);
