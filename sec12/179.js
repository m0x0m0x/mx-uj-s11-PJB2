/*
179: Internationalization of dates and numbers
- iso codes list 
http://www.lingoes.net/en/translator/langcode.htm
*/
// === Import Zone
import { mainHead, subHead } from "../UTILS/text.js";
// ===
mainHead("179: Internationalization of dates and numbers");

subHead(" Work being done in the project directly");

subHead("Doing your own testing");

const myDa = new Date();
console.log(new Intl.DateTimeFormat("ar-SY").format(myDa));

// Getting specific format
const myDa2 = new Date();

const formatter = new Intl.DateTimeFormat("en-GB", {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  weekday: "long",
});

const formattedDate = formatter.format(myDa2);
console.log(formattedDate);

subHead("Getting the locale");
const locale = navigator.language;
console.log("Locale is :");
console.log(locale);
