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
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
// ENUMS
var RessourceType;
(function (RessourceType) {
    RessourceType[RessourceType["BOOK"] = 0] = "BOOK";
    RessourceType[RessourceType["AUTHOR"] = 1] = "AUTHOR";
    RessourceType[RessourceType["FILM"] = 2] = "FILM";
    RessourceType[RessourceType["DIRECTOR"] = 3] = "DIRECTOR";
    RessourceType[RessourceType["PERSON"] = 4] = "PERSON";
})(RessourceType || (RessourceType = {}));
const docOne = {
    uid: 3,
    ressourceType: RessourceType.BOOK,
    data: { title: "Name of the wind" },
};
const docTwo = {
    uid: 2,
    ressourceType: RessourceType.PERSON,
    data: { name: "IMANE" },
};
console.log(docOne, docTwo);
