/* 
168: Final Coding challenge for section 11
*/
// === import methods
import { mainHead, paraText, subHead } from "../UTILS/text.js";
//====
mainHead("168: Final Coding challenge for section 11");

subHead("Test Data");
const dgs = [
  {
    weight: 22,
    curFood: 250,
    owners: ["Ina", "Lin"],
  },
  {
    weight: 8,
    curFood: 200,
    owners: ["Min"],
  },
  {
    weight: 13,
    curFood: 275,
    owners: ["Sal", "Joh"],
  },
  {
    weight: 32,
    curFood: 340,
    owners: ["kin", "lim"],
  },
];
console.table(dgs);

// Calculate recommended food for each dogs
paraText("Add recFood to each array based on forma");
dgs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dgs);
console.table(dgs);

// Find dog and find out if its eating too much or too little
paraText("Find dog Sal and amount eaten");
const dgSal = dgs.find((dog) => dog.owners.includes("Sal"));
console.log(dgSal);
console.log(
  `Sal' dog is eating ${dgSal.curFood > dgSal.recFood ? "TOOOO" : "LOWW"}`
);

// Create array owner of dogs that eat too much
paraText("Find dogs that eat too much too little");
const tooMuch = dgs
  .filter((dog) => dog.curFood > dog.recFood)
  .flatMap((dog) => dog.owners);

const tooLess = dgs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owners);

console.log(tooMuch);
console.log(tooLess);

// String to be created from the new arrays
console.log(`
Dog Eat Too much ${tooMuch.join(" ")}
Dog Eat Too Les ${tooLess.join(" ")}
`);

paraText("Find dog eating recommended amount");
console.log(dgs.some((dgs) => dgs.curFood === dgs.recFood));

paraText("Find Dog eating ok amount of food");

const chkET = (dgs) =>
  dgs.curFood > dgs.recFood * 0.9 && dgs.curFood < dgs.recFood * 1.1;

console.log(dgs.some(chkET));

/// Create array of dogs eating ok amount of food
paraText("Dogs eating ok amount of food");
console.log(dgs.filter(chkET));

// Create new array and sort by recommended for portion
paraText("Sort by recFood now");
const dgsCopySrt = dgs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dgsCopySrt);
console.table(dgsCopySrt);
