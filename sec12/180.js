/* 
180: Internationalizing Numbers
*/
// === import
import { mainHead, paraText, subHead } from "../UTILS/text.js";
// === import
mainHead("180: Internationalizing Numbers");

subHead("Basic Formatting");
const n1 = 38345325234584764.69;
const n1f = new Intl.NumberFormat("en-US").format(n1);
const n2f = new Intl.NumberFormat("en-GB").format(n1);
const n3f = new Intl.NumberFormat("pt-PT").format(n1);
const n4f = new Intl.NumberFormat("ar-SY").format(n1);
const n5f = new Intl.NumberFormat("de-DE").format(n1);
const n6f = new Intl.NumberFormat(navigator.language).format(n1);

paraText("Printing Various Formats");
console.log(`

en-US = ${n1f}
en-GB = ${n2f}
pt-PT = ${n3f}
ar-SY = ${n4f}
de-DE = ${n5f}

Locale is = ${navigator.language}
navigator.local = ${n6f}
`);

subHead("Setting Number Formatting Option");
const op1 = {
  style: "unit",
  unit: "mile-per-hour",
};

const p2 = 1321654468.69;
const p2f = new Intl.NumberFormat("en-GB", op1).format(p2);
const p3f = new Intl.NumberFormat("en-US", op1).format(p2);
const p4f = new Intl.NumberFormat("de-DE", op1).format(p2);
const p5f = new Intl.NumberFormat("ar-SY", op1).format(p2);

console.log(`
Formatting by units 
1. Miles Per Hour - en-GB= ${p2f}
1. Miles Per Hour - en-US= ${p3f}
1. Miles Per Hour - de-DE= ${p4f}
1. Miles Per Hour - ar-SY= ${p5f}

`);

subHead("Testing Percent Signs , curencies ");
// note the options can be changed and some have conflict
const op2 = {
  style: "unit",
  //   style: "percent",
  //   style: "percent",
  unit: "celsius",
  //   currency: "BTC",
  //   useGrouping: false, // print without seperators
};
const q2 = 1321654468.69;
const q2f = new Intl.NumberFormat("en-GB", op2).format(q2);
const q3f = new Intl.NumberFormat("en-US", op2).format(q2);
const q4f = new Intl.NumberFormat("de-DE", op2).format(q2);
const q5f = new Intl.NumberFormat("ar-SY", op2).format(q2);
console.log(`
Formatting by units 
1. Miles Per Hour - en-GB= ${q2f}
1. Miles Per Hour - en-US= ${q3f}
1. Miles Per Hour - de-DE= ${q4f}
1. Miles Per Hour - ar-SY= ${q5f}

`);
