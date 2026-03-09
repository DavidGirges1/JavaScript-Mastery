// Bto code 12 hours js course
// console.log(`hello world`);

// window.alert("this is an alert");

// this is a comment

/* this is a multi 
line comment */

// document.getElementById("myh1").textContent = "hello";
// document.getElementById(`myp`).textContent = "I love Pizza";

// let fullName = "David Elks";
// let age = 19;
// let student = true;

// document.getElementById("p1").textContent = `your name is  ${fullName}`;
// document.getElementById("p2").textContent = `your age is  ${age} years old`;
// document.getElementById("p3").textContent = `is student  ${student}`;

// order of operators is PEMDAS

// let username;
// username = window.prompt("what is your username?  ");

// console.log(username);
// let username;

// document.getElementById("mysubmit").onclick = function () {
//   username = document.getElementById("myText").value;
//   console.log(username);
// };

// let age = window.prompt("how old are you");
// age = Number(age); // type casting
// age += 1;
// console.log(age);

// let x = "pizza";
// let y = "pizza";
// let z = "pizza";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// const PI = 3.14;
// let radius;
// let circumference;

// radius = window.prompt("Enter the radius");
// radius = Number(radius);

// circumference = 2 * pi * radius;
// console.log(circumference);

// document.getElementById("submit").onclick = function () {
//   radius = document.getElementById("myText").value;
//   radius = Number(radius);
//   console.log(radius);
//   circumference = 2 * PI * radius;
//   console.log(circumference);

//   document.getElementById("h3").textContent =
//     `circumference is ${circumference} cm`;
// };

// counter program

// const decBtn = document.getElementById("decrease");
// const incBtn = document.getElementById("increase");
// const resetBtn = document.getElementById("reset");
// const countLabel = document.getElementById("countLabel");
// let count = 0;

// decBtn.onclick = function () {
//   count--;
//   countLabel.textContent = count;
// };

// incBtn.onclick = function () {
//   count++;
//   countLabel.textContent = count;
// };

// resetBtn.onclick = function () {
//   count = 0;
//   countLabel.textContent = count;
// };

// random number project

// const minInput = document.getElementById("min");
// const maxInput = document.getElementById("max");
// const generateBtn = document.getElementById("generate");
// const output = document.getElementById("generatedNumber");

// generateBtn.onclick = function () {
//   const min = Number(minInput.value);
//   const max = Number(maxInput.value);

//   const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//   output.textContent = randomNumber;
// };

// const age = document.getElementById("myText");
// const submit = document.getElementById("submit");
// const message = document.getElementById("message");

// submit.onclick = function () {
//   if (age.value > 18) {
//     message.textContent = "you are allowed ot enter";
//   } else if (age.value < 0) {
//     message.textContent = "invalid age! can't be negative";
//   } else {
//     message.textContent = "you are NOT allowed ot enter";
//   }
// };

// const subscribe = document.getElementById("subscribe");
// const visa = document.getElementById("visa");
// const mastercard = document.getElementById("mastercard");
// const paypal = document.getElementById("paypal");
// const submit = document.getElementById("submit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// submit.onclick = function () {
//   if (subscribe.checked) {
//     subResult.textContent = "you are subscribed";
//   } else {
//     subResult.textContent = "you are not subscribed";
//   }

//   if (visa.checked) {
//     paymentResult.textContent = "visa";
//   } else if (mastercard.checked) {
//     paymentResult.textContent = "mastercard";
//   } else if (paypal.checked) {
//     paymentResult.textContent = "paypal";
//   } else {
//     paymentResult.textContent = "no payment checked";
//   }
// };

// let age = 21;
// let message = age >= 18 ? "you are an adult" : "you are a minor";

// console.log(message);

// let day = 2;

// switch (day) {
//   case 1:
//     console.log("it is monday");
//     break;
//   case 2:
//     console.log("it is tuesday");
//     break;
//   default:
//     console.log("invalid");
// }

// let name = "    David";
// console.log(name.trim());
// let username = "David Elks ";

// console.log(username.charAt(0));
// console.log(username.indexOf("a"));
// console.log(username.lastIndexOf("e"));
// console.log(username.toUpperCase());
// console.log(username.toLowerCase());
// console.log(username.repeat(3));
// console.log(username.startsWith("D"));
// console.log(username.endsWith(" "));

// let phone = "123-13123-12312";
// phone = phone.replaceAll("-", " ");
// console.log(phone);

// console.log(phone.padStart(16, "0"));

// const fullName = "david elks";
// let firstName = fullName.slice(0, 5); // last not included
// let lastName = fullName.slice(6);
// console.log(firstName);
// console.log(lastName);
// console.log(fullName.slice(-4));

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// console.log(firstName);
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);
// console.log(lastName);

// const email = "davidelks@gmail.com";
// let username = email.slice(0, email.indexOf("@"));
// console.log(username);
// let provider = email.slice(email.indexOf("@") + 1, email.indexOf("."));
// console.log(provider);
// let type = email.slice(email.indexOf("." + 1));
// console.log(type);

// let username = window.prompt("enter your name ");

// username =
//   username.trim().charAt("0").toUpperCase() + username.trim().toLowerCase();
// console.log(username);

// == equal === identical

// let username;
// while (username === "" || username === null || username == undefined) {
//   username = window.prompt("enter your name");
// }
// console.log(`welcome ${username}`);

// let loggedIn = false;
// let username;
// let password;

// while (!loggedIn) {
//   username = window.prompt("enter your name");
//   password = window.prompt("enter your password");

//   if (username == "david" && password == "david") {
//     loggedIn = true;
//     console.log("logged in successfully");
//   } else {
//     console.log("invalid log in. please try again!david");
//   }
// }

// do {
//   username = window.prompt("enter your name");
//   password = window.prompt("enter your password");

//   if (username == "david" && password == "david") {
//     loggedIn = true;
//     console.log("logged in successfully");
//   } else {
//     console.log("invalid log in. please try again!david");
//   }
// } while (!loggedIn);

// for (let i = 0; i < 10; i++) {
//   if (i == 2) {
//     continue;
//   }

//   if (i == 5) {
//     break;
//   }
//   console.log(i);
// }

// const min = 1;
// const max = 100;
// const answer = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(answer);

// const message = document.getElementById("message");
// const guessInput = document.getElementById("guessInput");
// const guessBtn = document.getElementById("guessBtn");

// let attempts = 0;
// let running = true;

// guessBtn.onclick = function () {
//   if (!running) return;

//   const guess = Number(guessInput.value);

//   if (Number.isNaN(guess) || guessInput.value === "") {
//     message.textContent = "Please enter a valid number.";
//     return;
//   }

//   attempts++;

//   if (guess === 0) {
//     message.textContent = "Game ended.";
//     running = false;
//   } else if (guess < min || guess > max) {
//     message.textContent = "pick a valid number";
//   } else if (guess < answer) {
//     message.textContent = "Your guess is too low.";
//   } else if (guess > answer) {
//     message.textContent = "Your guess is too high.";
//   } else {
//     message.textContent = `Congrats! ${answer} You nailed it in ${attempts} attempts.`;
//     running = false;
//   }

//   guessInput.value = "";
// };

// function HappyBirthday(username, age) {
//   console.log(`happy birthday to you ${username}`);
//   console.log(`your age is ${age}`);
// }

// HappyBirthday("david", 19);
// HappyBirthday("ahmed", 12);

// function add(x, y) {
//   let result = x + y;
//   return result;
// }

// sum = add(12, 20);
// console.log(sum);

// function isEven(x) {
//   return x % 2 == 0 ? true : false;
// }

// console.log(isEven(11));

// function isValidEmail(email) {
//   return email.includes("@") ? true : false;
// }

// console.log(isValidEmail("david@gmail.com"));
// console.log(isValidEmail("david.com"));

// let fruits = ["apple", "banana", "orange"];

// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// fruits.push("kiwi");
// console.log(fruits[fruits.length - 1]);

// fruits.pop();
// console.log(fruits[fruits.length - 1]);

// fruits.shift();
// console.log(fruits[0]);

// let numberOfFruits = fruits.length;

// let index = fruits.indexOf("apple");
// console.log(index);

// for (i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// for (i = fruits.length - 1; i >= 0; i--) {
//   console.log(fruits[i]);
// }

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// fruits.sort()
// fruits.sort().reverse()

// spread operators

// let numbers = [1, 2, 3, 4, 5];
// let max = Math.max(...numbers); // unpacks the elements
// let min = Math.min(...numbers);

// console.log(numbers);
// console.log(max);
// console.log(min);

// let username = "david";
// let letters = [...username].join("-");

// console.log(letters);

// let fruits = ["apple", "banana", "coconut"];
// let letters = ["a", "b", "c"];

// let newFruits = [...fruits, ...letters, "eggs", "zero"];
// console.log(fruits);
// console.log(newFruits);

// rest parameters: allows a function to create an array of elements

// function myFruits(...food) {
//   console.log(food);
// }

// const food1 = "pizza";
// const food2 = "hello";
// const food3 = "kiwi";

// myFruits(food1, food2, food3);

// function sum(...numbers) {
//   // collect number as an array
//   let result = 0;
//   for (let number of numbers) {
//     result += number;
//   }

//   return result;
// }

// console.log(sum(1, 2, 3, 4, 5, 6, 7));

// function avg(...numbers) {
//   let avg = 0;
//   let result = 0;
//   for (let number of numbers) {
//     result += number;
//   }
//   avg = result / numbers.length;
//   return avg;
// }

// console.log(avg(1, 2, 3, 2));

// function combineString(...strings) {
//   return strings.join(" ");
// }

// const fullName = combineString("David", "elks", "fam");
// console.log(fullName);

// dice rolling program

// function rollDice() {
//   const numOfDice = document.getElementById("numOfDice").value;
//   const diceResult = document.getElementById("diceResult");
//   const diceImage = document.getElementById("diceImage");

//   const values = [];
//   const images = [];

//   for (let i = 0; i < numOfDice; i++) {
//     const value = Math.floor(Math.random() * 6) + 1;
//     values.push(value);
//     images.push(`<img src="dice/${value}.png">`);
//   }

//   diceResult.textContent = `dice: ${values.join(", ")}`;
//   diceImage.innerHTML = images.join("");
// }

// random password generator

// function generatePassword(
//   passwordLength,
//   includeLowerCase,
//   includeUpperCase,
//   includeNumbers,
//   includeSymbols,
// ) {
//   const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
//   const uppercaseLetters = lowercaseLetters.toUpperCase();
//   const numberChars = "0123456789";
//   const symbolChars = "!@#$%^&*(){}|?><~";

//   let charSet = [];
//   let password = [];

//   charSet += includeLowerCase ? lowercaseLetters : "";
//   charSet += includeUpperCase ? uppercaseLetters : "";
//   charSet += includeNumbers ? numberChars : "";
//   charSet += includeSymbols ? symbolChars : "";

//   if (passwordLength <= 3) {
//     return "password must be at least 3 char length";
//   }
//   if (charSet === 0) {
//     return "at least 1 charSet must be activated";
//   }
//   for (let i = 0; i < passwordLength; i++) {
//     randomIndex = Math.floor(Math.random() * charSet.length - 1);
//     password += charSet[randomIndex];
//   }
//   return password;
// }
// const passwordLength = 4;
// const includeLowerCase = true;
// const includeUpperCase = true;
// const includeNumbers = true;
// const includeSymbols = true;

// const password = generatePassword(
//   passwordLength,
//   includeLowerCase,
//   includeUpperCase,
//   includeSymbols,
//   includeNumbers,
// );
// console.log(password);

// callback  when you are done call this next

// hello(leave);

// function hello(callback) {
//   console.log("hello");
//   callback();
// }

// function leave() {
//   console.log("leave");
// }

// function goodBye() {
//   console.log("good bye");
// }

// sum(displayDom, 12, 13);

// function sum(callback, x, y) {
//   let result = x + y;
//   callback(result);
// }

// function displaySum(sum) {
//   console.log(`sum is ${sum}`);
// }

// function displayDom(result) {
//   document.getElementById("h1").textContent = `${result}`;
// }

// for each method auto keeps track of element index and array
// let numbers = [1, 2, 3, 4, 5];

// console.log("================");
// numbers.forEach(cube);
// numbers.forEach(display);

// function display(element) {
//   console.log(element);
// }

// function double(element, index, array) {
//   array[index] = element * 2;
// }

// function triple(element, index, array) {
//   array[index] = element * 3;
// }

// function cube(element, index, array) {
//   array[index] = Math.pow(element, 3);
// }

// let fruits = ["apple", "banana", "coconut"];
// fruits.forEach(Capitalize);
// fruits.forEach(display);

// function display(element) {
//   console.log(element);
// }

// function toUpperCase(element, index, array) {
//   array[index] = element.toUpperCase();
// }

// function Capitalize(element, index, array) {
//   array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }

// map method:
// accept a callback and applies that function to each element of an array, then return a new array
// key diff it returns a new array

// const numbers = [1, 2, 3, 4, 5];
// const squared = numbers.map(square);
// console.log(squared);

// function square(element) {
//   return Math.pow(element, 2);
// }

// const students = ["david", "ahmed", "khalid"];
// const STUDENTS = students.map(upperCase);
// console.log(STUDENTS);

// function upperCase(element) {
//   return element.toUpperCase();
// }

// .filter() creates a new array by filtering out numbers
// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers);

// let oddNumbers = numbers.filter(isOdd);
// console.log(oddNumbers);

// function isEven(element) {
//   return element % 2 === 0;
// }

// function isOdd(element) {
//   return element % 2 !== 0;
// }

// const ages = [16, 17, 18, 19, 20, 40, 50];
// const adults = ages.filter(isAdult);
// console.log(adults);
// const children = ages.filter(isChild);
// console.log(children);

// function isAdult(element) {
//   return element >= 30;
// }
// function isChild(element) {
//   return element < 18;
// }

// const words = ["apple", "orange", "banana", "kiwi"];
// const shortWords = words.filter(getShortWords);

// console.log(shortWords);

// function getShortWords(element) {
//   return element.length <= 4;
// }

// .reduce() reduce the elements of an array to a single value
// const prices = [10, 20, 203, 121, 1212];

// const total = prices.reduce(sum);
// console.log(`${total.toFixed(2)}`);

// function sum(previous, next) {
//   return previous + next;
// }

// const grades = [100, 64, 234, 12, 11];
// const max = grades.reduce(getMax);
// console.log(max);
// function getMax(prev, next) {
//   return Math.max(prev, next);
// }

// function expressions

// const hello = function hello() {
//   console.log("hello world of coding");
// };

// setTimeout(hello, 3000); // perform the function after 3 sec

// const numbers = [1, 2, 3, 4, 5, 6];
// const square = numbers.map(function (element) {
//   return Math.pow(element, 2);
// });

// console.log(square);

// const cube = numbers.map(function (element) {
//   return Math.pow(element, 3);
// });

// console.log(cube);

// arrow functions = single function that is used once

// const hello = (name, age) => {
//   console.log("hello " + name);
//   console.log("your age is " + age);
// };

// hello("david", 30);

// setTimeout(() => console.log("hello"), 3000);

const numbers = [1, 2, 3, 4, 5, 6];

const square = numbers.map((element) => Math.pow(element, 2));
console.log(square);
const cube = numbers.map((element) => Math.pow(element, 3));
console.log(cube);
const even = numbers.filter((element) => element % 2 === 0);
console.log(even);
const odd = numbers.filter((element) => element % 2 !== 0);
console.log(odd);
const total = numbers.reduce((prev, next) => prev + next);
console.log(total);
