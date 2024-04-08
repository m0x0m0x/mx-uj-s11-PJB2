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
