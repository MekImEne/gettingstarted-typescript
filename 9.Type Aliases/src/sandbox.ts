type StringOrNumber = string | number;
type objectWithName = { name: string; uid: StringOrNumber };

const logDetails = (uid: StringOrNumber, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

const greet = (user: objectWithName) => {
  console.log(`${user.name} says hello !`);
};
