"use strict";
// example 1
var anchor = document.querySelector("a");
// console.log(anchor.href); ==> error
if (anchor) {
    console.log(anchor.href);
}
// example 2
var anchor2 = document.querySelector("a");
console.log(anchor2.href);
// example 3
// const form = document.querySelector(".new-item-form")!;
var form = document.querySelector(".new-item-form");
//console.log(form.children);
// inputs
var type = document.querySelector("#type");
console.log(type);
var tofrom = document.querySelector("#tofrom");
console.log(tofrom);
var details = document.querySelector("#details");
console.log(details);
var amount = document.querySelector("#amount");
console.log(amount);
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, ", ", tofrom.value, ", ", details.value, ", ", amount.valueAsNumber);
});
