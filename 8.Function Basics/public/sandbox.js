"use strict";
/* let test = () => {
  console.log("hello world!");
}; */
// test = "hello world!"; ==> error
var test;
// test = "hello world!"; ==> error
/*********************************************************************************************************************/
var add = function (a, b) {
    console.log(a + b);
};
add(5, 20);
var addNumbers = function (a, b, c) {
    console.log(a + b);
    console.log(c);
};
// addNumbers(5, 20); ==> error if no ? with c
addNumbers(5, 20);
// Or with a default value
var addNumber = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
addNumber(5, 20, "33");
/*********************************************************************************************************************/
var minus = function (a, b) {
    return a + b;
};
var result = minus(25, 33);
// result = "something else"; ==> error because result is a number not a string
