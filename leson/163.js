/* 
163: flat and flatmap 
*/
// === imports ===
import { mainHead, subHead, paraText } from "../UTILS/text.js";
import { accounts } from "./bank2.js";
// ===
mainHead("163: flat and flatmap");

subHead("Display Imported BankData");
console.table(accounts);
