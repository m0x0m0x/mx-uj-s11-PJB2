/*
174: Numeric Seperators
- Formatting numbers
*/
//== Imports
import { mainHead, paraText, subHead } from "../UTILS/text.js";
// ==
mainHead("174: Numeric Seperators");

subHead("Work");
// Representing diameter of the solar system which is
// 30,000,000,000,000 kms

const diaSol = 3_025_698_741_523_658;
console.log(diaSol);

paraText("Testing with price with seperators");
const price1 = 345_99;
console.log(price1);

const trfFee = 15_00;

const PI = 3.14_15_69;
console.log(PI);

// Converting strings to numbers
console.log(Number("230_000"));

//Using parseint drops numbres after the _
console.log(parseInt("23_000"));
