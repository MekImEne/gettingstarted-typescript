"use strict";
// let greet: Function;
// example 1
var greet;
greet = function (name, greeting) {
    console.log(name + " says " + greeting);
};
// example 2
var calc;
calc = function (numOne, numTwo, action) {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numTwo - numOne;
    }
};
// exampel 3
var logDetails;
logDetails = function (mimi) {
    console.log(mimi.name + " is " + mimi.age + " years old.");
};
