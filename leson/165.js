/*
165: More Ways of creating and Filling arrays 
*/
// === import zone
import { mainHead, subHead } from "../UTILS/text.js";
//

mainHead("165: More Ways of creating and Filling arrays ");

subHead("Manual Array Creating");

// Immediate printing
console.log([1, 2, 3, 4, 5]);

// Using constructor
console.log(new Array(1, 2, 3, 4, 5));

// Programmatically creating arrays
const n1 = new Array(7);
console.log(n1);

subHead("Using Fill Method");

// Use map to fill element
console.log(n1.map(() => 5));

// On empty arrays , you can call the fill method

/// adds multiple elements
// n1.fill(1);

// beavhior is of slice method with same parameters
console.log(n1);
n1.fill(1, 3, 5);
console.log(n1);

// Tryinbg
const n2 = [1, 2, 3, 4, 5, 6, 7];
n2.fill(23, 2, 6);
console.log(n2);
