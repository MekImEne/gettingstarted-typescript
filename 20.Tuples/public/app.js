import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
// TUPLES
let array = ["imane", 25, true];
array[0] = 30;
array[1] = "assem";
array = ["assem", false, 33];
// let tuple: [string, number, boolean] = [25, "imane", true]; => error
let tup = ["imane", 25, true];
// tup[0] = false; ==> error
tup[0] = "imane";
tup[1] = 25;
let student;
// student = [23, "ikram"]; ==> error
student = ["ikram", 23];
