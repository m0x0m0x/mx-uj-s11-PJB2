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
