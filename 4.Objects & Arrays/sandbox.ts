// arrays
let names = ["imane", "assem", "bigO"];

names.push("Minouch");
// names.push(3); ==> error
// names[0] = 2; ==> error

let numbers = [10, 20, 30, 40];
numbers.push(50);
// numbers.push("hello"); ==> error

let mixed = ["imane", 25, "assem", 33];
mixed.push("Nessma");
mixed.push(1);
mixed[0] = 33;

// objects
let ESIest = {
  name: "imane",
  class: "Fresh graduated",
  age: 25,
};

ESIest.name = "assem";
ESIest.age = 33;
// ESIest.age = "33"; ==> error
// ESIest.skills = ["Web dev", "graphic design"]; ==> error
