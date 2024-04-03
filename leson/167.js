/*
165: Array Methods Practice 
*/
// === import zone
import { mainHead, paraText, subHead } from "../UTILS/text.js";
import { accounts } from "./bank2.js";
import { currencies, movements } from "./bankdata.js";
//

mainHead("165: Array Methods Practice ");

subHead("Imported data that will be used");
console.table(movements);
console.table(currencies);
console.table(accounts);

subHead("Practice 1");

paraText("Extracting only movements from acc object");
const bankDepositSum = accounts.map((a) => a.movements);
console.log(bankDepositSum);

// Doing the above but flattened
paraText("Flatteninig the Array");
const banDepS2 = accounts
  .flatMap((a) => a.movements)
  .filter((m) => m > 0)
  .reduce((s, c) => s + c, 0);
console.log(banDepS2);

subHead("Practice 2");
// Fund tx = 1000

// method 1
const numDep1k = accounts
  .flatMap((a) => a.movements)
  .filter((m) => m >= 1000).length;
console.log(numDep1k);

// method 2
const numDep21k = accounts
  .flatMap((a) => a.movements)
  .reduce((s, e) => (e >= 1000 ? ++s : s), 0);
console.log(accounts.flatMap((a) => a.movements).filter((m) => m >= 1000));
console.log(numDep21k);

paraText("Understanding Problems with using the ++ operator");
let a = 10;
console.log(++a);
console.log(a);
