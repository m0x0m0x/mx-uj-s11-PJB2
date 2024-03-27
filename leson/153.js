/* 
153: Filter Method
*/
// === Import Zone
import { mainHead, paraText, subHead } from "../UTILS/text.js";
import { currencies, movements } from "./bankdata.js";
//===
mainHead("153: Filter Method");

subHead("Examine Data");
console.table(movements);
console.table(currencies);

subHead("Your work copy the array");

console.log(movements);

// Using spread operator to copy the movements
const mvm = [...movements];
console.log(mvm);

subHead("Filter Method Work");
// removing all the negative values
const deposits = mvm.filter(function (m) {
  return m > 0;
});

console.log(`
Original - ${mvm}
With Filer  - ${deposits}
`);

//using for of loop - pushing into array
const depositFor = [];
for (const m of mvm) if (m > 0) depositFor.push(m);
console.log(depositFor);

console.log("hey");
