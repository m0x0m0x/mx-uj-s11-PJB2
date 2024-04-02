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
