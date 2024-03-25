/* 
149: Coding Challenge #1 
*/
//=== Import Zone ===
import { mainHead } from "../UTILS/text.js";
// ===
mainHead("149: Coding Challenge #1 ");

// Solution
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  console.log(dogsJuliaCorrected);

  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult and is ${dog} `);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy and is ${dog}`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// Alternative Solution

// const checkDogs2 = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();

//   dogsJulia.slice(1, 3);

//   console.log(dogsJuliaCorrected);
// };

// checkDogs2([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
