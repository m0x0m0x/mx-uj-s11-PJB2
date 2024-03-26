/*
151: Map Method - for arrays 
*/
// === Import Zone
import { mainHead, paraText, subHead } from "../UTILS/text.js";
import { currencies, movements } from "./bankdata.js";
//===
mainHead("151: Map Method - for arrays ");

subHead("Examine Data");
console.table(movements);
console.table(currencies);

subHead("Convert Euro to dollar from movements");
const eu2usd = 1.1;
const mUSD = movements.map(function (m) {
  return m * eu2usd;
  //   return 23;
});

// New array from the map method
paraText("Print New Array");
console.table(mUSD);
paraText("Print Both movements and mUSD");
console.log(mUSD, movements);

subHead("Write above method with forOf Loop");

const mUSD2 = [];
for (const mov of movements) mUSD2.push(mov * eu2usd);
console.log(mUSD2);

// Write this as an arrow function
paraText("Writing this as an arrow function");
const mUSD3 = movements.map((mov) => mov * eu2usd);
console.log(mUSD3);

subHead("Map Methods");

paraText("Output of function directly into array");
const mdesc = movements.map((m, i, a) => {
  if (m > 0) {
    return `Movement ${i + 1}: Put  💰 : ${m}`;
  } else {
    return `Movement ${i + 1}: Take 💸 : ${m}`;
  }
});
console.log(mdesc);
