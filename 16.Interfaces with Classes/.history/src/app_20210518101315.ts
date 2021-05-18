import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("imane", "frontend dev", 250);
docTwo = new Payment("assem", "backend dev", 500);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);
console.log("Docs :", docs);

const invOne = new Invoice(
  "Imane",
  "work on getting started with typescript",
  25
);

const invTwo = new Invoice(
  "Ikram",
  "work on getting started with react native",
  23
);

console.log(invOne, invTwo);

let invoices: Invoice[] = [];
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

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(
    type.value,
    ", ",
    tofrom.value,
    ", ",
    details.value,
    ", ",
    amount.valueAsNumber
  );
});
