// example 1
const anchor = document.querySelector("a");
// console.log(anchor.href); ==> error
if (anchor) {
  console.log(anchor.href);
}

// example 2
const anchor2 = document.querySelector("a")!;
console.log(anchor2.href);

// example 3
// const form = document.querySelector(".new-item-form")!;
const form = document.querySelector(".new-item-form") as HTMLFormElement;
//console.log(form.children);

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
console.log(type);

const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
console.log(tofrom);

const details = document.querySelector("#details") as HTMLInputElement;
console.log(details);

const amount = document.querySelector("#amount") as HTMLInputElement;
console.log(amount);

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
