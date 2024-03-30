/* 
163: flat and flatmap 
*/
// === imports ===
import { mainHead, subHead, paraText } from "../UTILS/text.js";
import { accounts } from "./bank2.js";
// ===
mainHead("163: flat and flatmap");

subHead("Display Imported BankData");
console.table(accounts);

subHead("Work1");

// nested array
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr);
console.table(arr);

// Making one big array - Latest Method
console.log(arr.flat());

subHead("Deep Nested");
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 6];
console.log(arrDeep);
console.table(arrDeep);

// Now flatening with depth argument
paraText("Using the flattenind depth");
console.table(arrDeep.flat(2));
