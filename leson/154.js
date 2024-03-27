/* 
154: The Reduce method
*/
//=== Import Zone
import { mainHead, paraText, subHead } from "../UTILS/text.js";
import { currencies, movements } from "./bankdata.js";
//===
mainHead("154: The Reduce method");

subHead("Print Imported arrays");
console.log(movements, currencies);

subHead("Reduce Method - Reduce elemens into one array");

// Copying movements to a new array
const mvm = [...movements];
console.log(mvm);

// Now doing the reduction method
// acc = accumulator variable
const gloBal = mvm.reduce(function (acc, m, i, a) {
  console.log(`Itn ${i}: ${acc}`);
  return acc + m;
}, 0);
console.log(gloBal);

// Doing the above with a for loop
paraText("Doing above with a forloop");
let bal2 = 0;
for (const m of mvm) bal2 += m;
console.log(bal2);

// Writing above with arrow function
paraText("Reduce function wiht arrow funcion format");
const global2 = mvm.reduce((a, c, i) => a + c, 0);
console.log(global2);

// Getting maximum value from the array
paraText("Getting the max value from the array ");
console.table(mvm);
const max1 = mvm.reduce((a, m) => {
  if (a > m) {
    return a;
  } else {
    return m;
  }
}, 200);
console.log(max1);
