/* 
168: Final Coding challenge for section 11
*/
// === import methods
import { mainHead, subHead } from "../UTILS/text.js";
//====
mainHead("168: Final Coding challenge for section 11");

subHead("Test Data");
const dgs = [
  {
    weight: 22,
    curFood: 250,
    owners: ["Ina"],
  },
  {
    wegiht: 8,
    curFood: 200,
    owners: ["Sal", "Min"],
  },
  {
    weight: 32,
    curFood: 340,
    owners: ["kin", "lim"],
  },
];
console.table(dgs);

subHead("Challenge 1");
