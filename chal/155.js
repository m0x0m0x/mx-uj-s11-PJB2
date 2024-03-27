/* 
155: Coding Challenge 2 
*/
//=== Import Zone ===
import { mainHead, paraText } from "../UTILS/text.js";
// ===
mainHead("155: Coding Challenge 2 ");

const calcAvHA = function (ages) {
  // Running the calculation
  const HA = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  const ad = HA.filter((age) => age >= 18);

  // printing
  console.log(HA);
  console.log(ad);

  // Calcualtive averages
  const AV = ad.reduce((a, age) => a + age, 0) / HA.length;
  return AV;
};
const avg1 = calcAvHA([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAvHA([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);

// Second way of calculating average
const AR1 = [2, 5, 6, 7, 8, 9];
const calcAv2 = function (ages) {
  const ad = ages;
  const avE = ad.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  return avE;
};
const avg3 = calcAv2(AR1);
console.log(avg3);
