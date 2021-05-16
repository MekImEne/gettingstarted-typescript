const form = document.querySelector(".new-item-form") as HTMLFormElement;

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
