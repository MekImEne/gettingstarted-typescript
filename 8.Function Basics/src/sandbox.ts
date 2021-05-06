/* let test = () => {
  console.log("hello world!");
}; */

// test = "hello world!"; ==> error

let test: Function;
// test = "hello world!"; ==> error

/*********************************************************************************************************************/

const add = (a: number, b: number) => {
  console.log(a + b);
};

add(5, 20);

const addNumbers = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
  console.log(c);
};

// addNumbers(5, 20); ==> error if no ? with c
addNumbers(5, 20);
// Or with a default value
const addNumber = (a: number, b: number, c: number | string = 10) => {
  console.log(a + b);
  console.log(c);
};
addNumber(5, 20, "33");

/*********************************************************************************************************************/

const minus = (a: number, b: number) => {
  return a + b;
};

let result = minus(25, 33);

// result = "something else"; ==> error because result is a number not a string
