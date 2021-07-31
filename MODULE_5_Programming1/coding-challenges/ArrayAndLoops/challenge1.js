//https://codepen.io/bahjat_khan/pen/dyWKYgO?editors=1112
const names = [
  "Westly Snipes",
  "Nicholas Cage",
  "Nasir Jones",
  "Sean Carter",
  "Sean Combs",
  "Michael Jordan",
  "Patrick Ewing",
];
let firstName = [];
let lastName = [];
let name = names.join(" ");
console.log(name);

let temp = name.split(" ");
console.log(temp);

temp.forEach(function (name, idx) {
  idx % 2 === 0 ? firstName.push(temp[idx]) : lastName.push(temp[idx]);
});

console.log(firstName);
console.log(lastName);
