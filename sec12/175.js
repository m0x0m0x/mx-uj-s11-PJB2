/*
175: Working with BigInt
- Special type of int
*/
//== Imports
import { mainHead, paraText, subHead } from "../UTILS/text.js";
// ==
mainHead("175: Working with BigInt");

paraText("Finding the max value that can be stored in a variable");
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

// Testing
console.log(2 ** 53 + 1);
