/* 
176: Creating Dates 
*/
import { mainHead, subHead, paraText } from "../UTILS/text.js";
mainHead("176: Creating Dates ");

subHead("Creating Dates 4 methods");
// Date constructor
const now = new Date();
console.log(now);

// Parse date from date sring
console.log(new Date("Apr 08 2024 23:04:16 "));
console.log(new Date("Dec 24, 2020"));

// For this section will be writing it in the script.js file to get the dates object

// Coming back here for testing , adding more date data
// Month in JS is 0 based
console.log(new Date(2037, 10, 19, 15, 23, 9));
console.log(new Date(2037, 10, 35));

paraText("Milliseconds from unix time - ");
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

subHead("Working With Dates");
let fut1 = new Date(2037, 10, 19, 15, 23);
console.log(fut1);
console.log(fut1.getFullYear()); // getting full year
console.log(fut1.getMonth()); // getting month 0 based
console.log(fut1.getDate()); // Getting current Date
console.log(fut1.getDay()); // Getting Day This is the week Mon-Tue-Wed-Thu
console.log(fut1.getHours()); // Getting the hour
console.log(fut1.getMinutes()); // getting Minutes
console.log(fut1.getSeconds()); // getting getSeconds
console.log(fut1.toISOString()); // ISO String

// Timestamp is milliseconds from unix time
console.log(fut1.getTime());
console.log(new Date(664522));

// getting the time stamp
console.log(new Date()); // gettting full date
console.log(Date.now()); // milliseconds

// Settting time - there are set methods for what we have printed above
fut1.setFullYear(2040);
console.log(fut1);
