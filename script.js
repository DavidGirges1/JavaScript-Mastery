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

let username = window.prompt("enter your name ");

username =
  username.trim().charAt("0").toUpperCase() + username.trim().toLowerCase();
console.log(username);
