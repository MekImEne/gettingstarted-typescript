let myname = "imane";
let age = 25;
let isBlackBelt = false;

// name = 20; => error
myname = "imene";

// age = 'assem'; => error
age = 26;

// isBlackBelt = 'yes'; => error
isBlackBelt = true;

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

// console.log(area('hello'));
console.log(circ(7.5));
