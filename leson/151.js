/*
151: Map Method - for arrays 
*/
// === Import Zone
import { mainHead, subHead } from "../UTILS/text.js";
import { currencies, movements } from "./bankdata.js";
//===
mainHead("151: Map Method - for arrays ");

subHead("Examine Data");
console.table(movements);
console.table(currencies);
