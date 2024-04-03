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
paraText("Exracting val > 1000");
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

subHead("Ex 3 - Advanced Reduce");
// Create object contains sums of deposit and withdrawals
paraText(
  "Calculating total deposits and withdrawals using advanved reduce method"
);
const { deposits, withdrawals } = accounts
  .flatMap((a) => a.movements)
  .reduce(
    (s, e) => {
      e > 0 ? (s.deposits += e) : (s.withdrawals += e);
      return s;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);

// Same above function in another way
paraText("Above function in a different ways");
const { dep, wit } = accounts
  .flatMap((a) => a.movements)
  .reduce(
    (s, e) => {
      s[e > 0 ? "dep" : "wit"] += e;
      return s;
    },
    { dep: 0, wit: 0 }
  );
console.log(dep, wit);

subHead("Ex 4 - Convert String to Title Case");
/*
Making a function that converts string to titleCase
eg: This is a case =convert to> This Is a Case
*/

const ConTitCase = function (title) {
  const capita = (str) => str[0].toUpperCase() + str.slice(1);

  // Create array of exceptions
  const exceptions = ["her", "and"];
  const titCas = title
    .toLowerCase()
    .split(" ")
    .map((w) => (exceptions.includes(w) ? w : capita(w)))
    .join(" ");
  return capita(titCas);
};
console.log(ConTitCase("smell her armpit"));
console.log(ConTitCase("smell her armpit and Suck her ass"));
console.log(ConTitCase("and ask her to fart in nose"));
