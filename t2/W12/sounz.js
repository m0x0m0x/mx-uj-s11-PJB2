/*
This is the script for those sounds on button presses
*/

//////////////////////////////
// === Login Button Sond ===

const Logbtn = document.querySelector(".login__btn");
const clickSound = document.getElementById("clickSound");
Logbtn.addEventListener("click", () => {
  clickSound.currentTime = 0; // Reset the audio to the beginning
  clickSound.play(); // Play the click sound
});

//////////////////////////////
// === sort Button sound ===
const sortbtn = document.querySelector(".btn--sort");
const sortSND = document.getElementById("sortSND");
sortbtn.addEventListener("click", () => {
  sortSND.currentTime = 0; // Reset the audio to the beginning
  sortSND.play(); // Play the click sound
});

////////////////////////////////
// ==== Loan Button Sound
const loanBtn = document.querySelector(".form__btn.form__btn--loan");
const loanSnd = document.getElementById("loanSnd");
loanBtn.addEventListener("click", () => {
  loanSnd.currentTime = 0.02;
  loanSnd.play();
  loanSnd.play();
  setTimeout(() => {
    loanSnd.pause();
  }, 2000); // Play the audio for 1 second
});
