//https://codepen.io/bahjat_khan/pen/GRmGJWK?editors=1111
let weeklyIncome = parseInt(prompt("Weekly Income : "));
let foodCost = parseInt(prompt("Food Cost : "));
let housingCost = parseInt(prompt("Housing Cost : "));
let transportationCost = parseInt(prompt("Transportation Cost : "));
let otherCost = parseInt(prompt("Other Cost : "));
let savingsPerYear = parseInt(prompt("How much you want to save per year? : ")); //120

const savingsPerWeek = savingsPerYear / 52;
const totalWeeklyCost = foodCost + housingCost + transportationCost + otherCost;
const totalBankBalance = weeklyIncome - totalWeeklyCost;
//const totalSave = totalBankBalance < 0 ? totalBankBalance * -1 : null;

totalBankBalance > savingsPerWeek
  ? console.log("You are on track💰💰")
  : console.log(`You need to save 💲${Math.abs(totalBankBalance)} more a week`);
