// Interfaces

interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "imane",
  age: 25,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("I spent ", amount);
    return amount;
  },
};

console.log(me);

const greetPerson = (person: IsPerson) => {
  console.log("hello ", person.name);
};

greetPerson(me);

import { Invoice } from "./classes/Invoice.js";

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
