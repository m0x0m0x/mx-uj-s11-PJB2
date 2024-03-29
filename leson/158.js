/* 
158: Find Method -
Retrieve element from an array based on condition
*/
//=== Import Zone
import { mainHead, subHead } from "../UTILS/text.js";
import { currencies, movements } from "./bankdata.js";
// ===
mainHead("158: Find Method");
console.log("hey");

// Print imported arrays
console.table(movements, currencies);

subHead("Work");

// make copy of movements
const mvm = [...movements];
console.log(mvm);

// Using callback function, returns T or F , no array returned but first matching
const fwT = mvm.find((m) => m < 0);
console.log(mvm, fwT);

// Note now the work is continued into the brapist app
// Writing a for loop that does something similar
const find1 = function (num) {
  for (let m of mvm) {
    if (m === num) {
      return true;
    }
  }
  return false;
};

console.log(find1(210));
