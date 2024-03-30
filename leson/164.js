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
console.log(mvm.sort());
