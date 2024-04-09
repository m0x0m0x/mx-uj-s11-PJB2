/* 
181: Timers setTimeout and setInterval
*/
//=== Import
import { mainHead, subHead } from "../UTILS/text.js";
//=== Import
mainHead("181: Timers setTimeout and setInterval");

subHead("Pizaa Orderin");

// Calling after 3 seconds
const ingz = ["cuny", "booty"];
const puzTimer = setTimeout(
  (ing1, ing2) =>
    console.log(`
Lick Pussy 👅 with ${ing1} and ${ing2}
`),
  3000,
  ...ingz
);

if (ingz.includes("cunny")) clearTimeout(puzTimer);

// Asynchronou JS
console.log("Wating...");

//this will keep running // challenge to make a clock
// subHead("setInterval Function");
// setInterval(function () {
//   const now = new Date();
//   console.log(now);
// }, 1000);
