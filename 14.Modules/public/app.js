import { Invoice } from "./classes/Invoice.js";
const invOne = new Invoice("Imane", "work on getting started with typescript", 25);
const invTwo = new Invoice("Ikram", "work on getting started with react native", 23);
console.log(invOne, invTwo);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
// invOne.client = "assem"; ==> error cz client is a readonly field
// invTwo.client = "imane";
invTwo.amount = 25;
invOne.amount = 33;
console.log(invOne, invTwo);
invoices.forEach((inv) => {
    // console.log(inv.client, inv.details, inv.amount, inv.format()); => error bcz details is private
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, ", ", tofrom.value, ", ", details.value, ", ", amount.valueAsNumber);
});
