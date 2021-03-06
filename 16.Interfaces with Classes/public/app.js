import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
let docOne;
let docTwo;
docOne = new Invoice("imane", "frontend dev", 250);
docTwo = new Payment("assem", "backend dev", 500);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log("Docs :", docs);
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
