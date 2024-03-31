/* 
164: Sorting Arrays 
*/
// === imports ===
import { mainHead, subHead, paraText } from "../UTILS/text.js";
import { accounts } from "./bank2.js";
import { movements } from "./bankdata.js";
// ===
mainHead("164: Sorting Arrays ");

subHead("Part 1 - Testing");

const ownr = ["Ina", "Gia", "Min", "Kio"];

// Sort alphabetically - Mutates array
console.log(ownr.sort());
console.log(ownr);

// Test with number
console.log(movements);

// Make a new arry since sort mutates original array
// Sorting works on strings
const mvm = [...movements];
console.log(mvm);
// console.log(mvm.sort());
paraText("Ascending Order");
mvm.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log(mvm);

paraText("Descending ORder");
mvm.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
console.log(mvm);

subHead("Better VEsion");

paraText("Acending Version");
mvm.sort((a, b) => a - b);
console.log(mvm);

paraText("Descending Version");
mvm.sort((a, b) => b - a);
console.log(mvm);
