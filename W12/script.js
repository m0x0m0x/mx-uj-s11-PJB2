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
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2021-01-28T09:15:04.904Z",
    "2022-04-01T10:17:24.185Z",
    "2023-05-08T14:11:59.604Z",
    "2023-05-27T17:01:17.194Z",
    "2024-04-08T12:01:20.894Z",
    "2024-05-08T12:01:20.894Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Scat Queen Lady",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2024-04-08T12:01:20.894Z",
    "2024-05-08T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

// const account3 = {
//   owner: "Fart Fetish Queen",
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: "Stink Woman Sniff Lick",
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

const accounts = [account1, account2];

// Selecting Labels
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const tableApp = document.querySelector(".app2");
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

//////////// ==- you work zone

// Create function to format dates
const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  // Calculating days passed
  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  // Login on the above daysPassed
  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // THe code here is executed even if else block is not done
  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getUTCFullYear();
  // return `${day}/${month}/${year}`;

  return new Intl.DateTimeFormat("locale").format(date);
};

// Formattng currencies - reusable func
const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date">${displayDate}</div>
      <div class="movements__value">${formattedMov}</div>
    </div>
    `;

    // Attaching to the movements container
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
// displayMovements(account1.movements);

// Calculating the main balance now using the reduce function
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, move) => acc + move, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};
// calcDisplayBalance(account1.movements);

// Calc Display summary
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, move) => acc + move, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, a) => {
      console.log(a);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
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

const updateUI = function (acc) {
  //Display Movements
  displayMovements(acc);

  // Display Balance
  calcDisplayBalance(acc);

  //Display Summary
  calcDisplaySummary(acc);
};

//////////////////////////////////////////////////
/// Event handlers for login
let currentAccount, timer;

// Fake Login - Disable this to make it back to normal
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

// Logout timer function to be implemented here the called in the code
const startLogOutTimer = function () {
  const tick = function () {
    // convert seconds to minutes done with math
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // 3. In each call print remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // 4. When time 0 (expired) , stop timer log out user

    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = "🤬KICKED OUT !🤬";
      containerApp.style.opacity = 0;
      tableApp.style.opacity = 100;
      loginVIDZ.style.opacity = 0;
      loginBG.style.backgroundColor = "#2E0249";
    }

    // Decrease 1 secon
    time--;
  };
  //  1. Set the time 5 mins
  let time = 10;

  // 2. Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

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
  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display ui and wlecome message
    labelWelcome.textContent = `LickPussy , ${
      currentAccount.owner.split(" ")[0]
    }`;

    // // Create current date and time
    // const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getUTCFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Using internationalization api
    const now = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      day: "numeric",
      month: "long", // numeric, long, 2-digit
      year: "numeric",
      weekday: "short",
    };

    // Getting locale from the browser
    const locale = navigator.language;
    console.log("Locale is :");
    console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // UI Changes
    containerApp.style.opacity = 100;
    tableApp.style.opacity = 0;
    loginVIDZ.style.opacity = 100;

    // Your Custom Changes
    loginBG.style.backgroundColor = "#132a13";
    loginVIDZ.style.opacity = 100;

    // Clear Input Fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // Clear existing timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI function
    updateUI(currentAccount);

    // Testing login
    console.log("LOGIN");
  }
});

///////////////////////////////////////
// Transfer Function Implementation
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = +inputTransferAmount.value;
  const reciverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    reciverAcc &&
    currentAccount.balance >= amount &&
    reciverAcc?.username !== currentAccount.username
  ) {
    // Do transfer
    currentAccount.movements.push(-amount);
    reciverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    reciverAcc.movementsDates.push(new Date().toString());

    // Update UI function
    updateUI(currentAccount);

    // Reset timer - when action occurs to reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

//////////////////////////////////////
// Loan Function

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((move) => move >= amount * 0.1)
  ) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // Add transfer date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 2500);
  }
  inputLoanAmount.value = "";
  // Reset timer - when action occurs to reset timer
  clearInterval(timer);
  timer = startLogOutTimer();
});

///////////////////////////////////////////////////
// Closing the account
btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  // console.log("delete");
  inputClosePin;

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);

    // Delete Account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
    loginBG.style.backgroundColor = "#3D0000";
    loginVIDZ.style.opacity = 0;
  }
  inputCloseUsername = inputClosePin = " ";
});

///////////////////////////////////////////////////
// Sort Button

// State Variable of sort
let sorted = false;

btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
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

///////////////////////////////////
// Flattening array - to get all balances
paraText("Accounts Flattening ");
const accountMovements = accounts.map((a) => a.movements);
console.log(accountMovements);

const allMovements = accountMovements.flat();
console.log(allMovements);
const overallBalance = allMovements.reduce((a, m) => a + m, 0);
console.log(overallBalance);

paraText("Doing Chaining to get overall balance");
const overallBalance2 = accounts
  .map((a) => a.movements)
  .flat()
  .reduce((a, m) => a + m, 0);
console.log(overallBalance2);

// Using FlatMapo - Note it goes one level deep
paraText("Chaining with flatmap");
const overallBalance3 = accounts
  .flatMap((a) => a.movements)
  .reduce((a, m) => a + m, 0);
console.log(overallBalance3);

// 165: More array methods
// Extracting the numbeers from the movement array in the UI
labelBalance.addEventListener("click", function () {
  const mvmUI = Array.from(
    document.querySelectorAll(".movements__value"),
    (elm) => Number(elm.textContent.replace("€", ""))
  );
  console.log(mvmUI);

  // Secondary method for creating arrays
  const mvmUi2 = [...document.querySelectorAll(".movements__value")];
});

///// 176: Creating Dates Work
console.log(new Date(account1.movementsDates[0]));
