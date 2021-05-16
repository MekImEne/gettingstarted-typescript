"use strict";
// Classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice("Imane", "work on getting started with typescript", 25);
var invTwo = new Invoice("Ikram", "work on getting started with react native", 23);
console.log(invOne, invTwo);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
invOne.client = "assem";
invTwo.client = "imane";
invTwo.amount = 25;
invOne.amount = 33;
console.log(invOne, invTwo);
var form = document.querySelector(".new-item-form");
// inputs
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, ", ", tofrom.value, ", ", details.value, ", ", amount.valueAsNumber);
});
