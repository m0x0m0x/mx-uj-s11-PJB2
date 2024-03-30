/* 
162: Some and Every
- Conditional for includes method
*/
//=== Import Zone
import { mainHead, subHead, paraText } from "../UTILS/text.js";
import { currencies, movements } from "./bankdata.js";
// ===
mainHead("162: Some and Every");
console.log("hey");

subHead("Actual Work");
console.log(movements);

//Equality Condition
console.log(movements.includes(-130));

// Conditional
const anyDeposits = movements.some((mov) => mov > 0);
console.log(anyDeposits);

paraText("Testing for more values");
const anyDeposits2 = movements.some((mov2) => mov2 > 5000);
console.log(anyDeposits2);

paraText("Using Arrow Functions");
console.log(movements.some((mov) => mov === -130));

subHead("Every Method");
// True if all elements passes the conditin
const account4 = {
  owner: "Stink Woman Sniff Lick",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};
console.log(movements.every((m) => m > 0));
console.log(account4.movements.every((m) => m > 0));

subHead("Alernative Method");
// seperate Callbacks

const deposit = (mov) => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
