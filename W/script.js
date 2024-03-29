"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Candy Mistress Stink",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Scat Queen Lady",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Fart Fetish Queen",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Stink Woman Sniff Lick",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Selecting Labels
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

// Selecting Button Elements
const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

// Selecting Input Elements
const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// Selecting the background for effect
const loginBG = document.querySelector("body");

// Selecting Booty Vids Footer
const loginVIDZ = document.querySelector(".vidz");

// ==- you work zone

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>
    `;

    // Attaching to the movements container
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
// displayMovements(account1.movements);

// Calculating the main balance now using the reduce function
const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, move) => acc + move, 0);
  labelBalance.textContent = `${balance} €`;
};
// calcDisplayBalance(account1.movements);

// Calc Display summary
const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter((mov) => mov > 0)
    .reduce((acc, move) => acc + move, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * 1.2) / 100)
    .filter((int, i, a) => {
      console.log(a);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
// calcDisplaySummary(account1.movements);

// Function for computing the user name - initials

const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(" ")
      .map((w) => w[0])
      .join("")
      .toUpperCase();
  });
};
createUsername(accounts);
console.log(accounts);

/// Event handlers for login
let currentAccount;

// Input Login Work
btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();
  // console.log("LOGINLick");

  // Find the user name
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  // Testing Pin now
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display ui and wlecome message
    labelWelcome.textContent = `LickPussy , ${
      currentAccount.owner.split(" ")[0]
    }`;

    // UI Changes
    containerApp.style.opacity = 100;

    // Your Custom Changes
    loginBG.style.backgroundColor = "#132a13";
    loginVIDZ.style.opacity = 100;

    //Display Movements
    displayMovements(currentAccount.movements);

    // Display Balance
    calcDisplayBalance(currentAccount.movements);

    //Display Summary
    calcDisplaySummary(currentAccount.movements);

    // Testing login
    console.log("LOGIN");
  }
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// === Text Highlighting from UTIL/text.js , since cant import from outside the module
function mainHead(headText) {
  console.log(
    `%c 
----------------
${headText}
----------------
        `,
    "color:yellow;font-size:1.2rem"
  );
}

// Sub Headers
function subHead(subText) {
  console.log(
    `%c 
${subText}
            `,
    "color:orange;font-size:15px"
  );
}

// Paragraph lines

function paraText(paraText) {
  console.log(
    `%c 
${paraText}
        `,
    "color:#15F5BA;font-size:13px;font-style:italic "
  );
}
// === Lectures work here

// Take movements, convert EUR to USD and then ADD ALL
// Chaining Pipelines
const eu2usd = 1.1;

const totalDepositUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eu2usd)
  .reduce((a, mov) => a + mov, 0);
console.log(totalDepositUSD);

// testing the above function and printing the array from map
console.log(`%cDebugging Methods`, "color:green");
console.log(movements);
const totalDepositUSD2 = movements
  .filter((mov) => mov > 0)
  // .map((mov) => mov * eu2usd)
  .map((mov, i, a) => {
    // console.log(a);
    return mov * eu2usd;
  })
  .reduce((a, mov) => a + mov, 0);
console.log(totalDepositUSD2);

// 158: Find method work
mainHead("158: Find method work");
console.log(accounts);

const account = accounts.find((a) => a.owner === "Scat Queen Lady");
console.table(account);
