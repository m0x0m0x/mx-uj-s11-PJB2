/*
171: Converting and checking numbers
*/
//== Imports
import { mainHead, paraText } from "../UTILS/text.js";
// ==
mainHead("171: Converting and checking numbers");
console.log(23 === 23.0);

// Base 10 - 0 to 0
// Binary 2 - 0 1
// Only one datatype for number, and stored in binary format 64bit base2
paraText("Representing in decimals in JS");
console.log(0.1 + 0.2);

//fixing this - note usage of .toFixed(2)
paraText("Fixing The Number");
console.log(`
Fixing the decimal calc = 0.1 + 0.2 
${(0.1 + 0.2).toFixed(100)}
`);

paraText("Determing the number conversion problem");
console.log(0.1 + 0.2 === 0.3);
// Note the false response , since it binary calc , it shows false

paraText("Conversion to Number -  type conversion");
console.log(+"23");

paraText("Parsing Number from String");

// Works only if the first char is a number
console.log(Number.parseInt("69lick"));
console.log(Number.parseInt("s9lick"));

// parseINT also accepts a radix
console.log(Number.parseInt("6600sniff", 10));

//Parse float
console.log(Number.parseFloat("     6969.420 lick"));

paraText("is NAN is not a number");
console.log(Number.isNaN(20));
console.log(Number.isNaN("33"));

// this isnt a number so it shows that
console.log(Number.isNaN(+"33x"));

console.log(Number.isNaN(23 / 0));
