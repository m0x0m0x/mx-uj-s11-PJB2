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
console.log(546545644564646464687846545321354878);

paraText("Transforming large numbers to bigint number");
console.log(546545644564646464687846545321354878n);
console.log(BigInt(546545644564646464687846545321354878));

subHead("Operationg with BigInt");
console.log(10000n + 200000n);
console.log(
  546545644564646464687846545321354878n * 122389718937198273901739108739107232n
);

// Cant mix large number multiple with normal int
let nu1 = 1289371283789217389217389217839712897322817321n;
let nu2 = 6969;
// console.log(nu1 * nu2);
console.log(nu1 * BigInt(nu2));

paraText("Using BigInt for comparison");
console.log(20n > 15);

// This is false since both the numbers are diff type
console.log(20n === 20);

// You can see both are diff types
console.log(typeof 20n);
console.log(typeof 20);

paraText("Big in Exception - With  Logical Operators");
// if you use loose operator then it shows tru , since there is type coercion
console.log(69n == 69);

paraText("Big in Exception - String Operators");
// Big int converted to a string
console.log(nu1 + "   bigBoobs");

paraText("Math Operations dont work on BigInt Types");
console.log(Math.sqrt(23));

// This will give error
// console.log(Math.sqrt(23n));

paraText("testing Division");

// Gives back closest big int - removes decimals
console.log(10n / 3n);
console.log(10 / 3);
console.log(12n / 4n);
