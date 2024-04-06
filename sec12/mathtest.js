/* 
This is for testing the math functions when you imported mathjs
<script
    type="module"
    src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/12.4.1/math.js"
  ></script>
*/
//==import zone==
import { mainHead, subHead } from "../UTILS/text.js";

// ===
mainHead("mathjs Test Zone");

subHead("Testing math.js import");
let myNumSqrt100 = math.sqrt(-100).toString();
console.log(myNumSqrt100);
console.log(math.evaluate("12.7 cm to inch").toString());
console.log(math.derivative("x^2 + x", "x").toString());
