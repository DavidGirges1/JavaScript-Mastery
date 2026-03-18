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

// const numbers = [1, 2, 3, 4, 5, 6];

// const square = numbers.map((element) => Math.pow(element, 2));
// console.log(square);
// const cube = numbers.map((element) => Math.pow(element, 3));
// console.log(cube);
// const even = numbers.filter((element) => element % 2 === 0);
// console.log(even);
// const odd = numbers.filter((element) => element % 2 !== 0);
// console.log(odd);
// const total = numbers.reduce((prev, next) => prev + next);
// console.log(total);

// objects in js

// const person = {
//   firstName: "david",
//   lastName: "g.",
//   age: 18,
//   isStudent: true,
//   sayHello: function () {
//     console.log("hello I am david");
//   },
// };

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);

// const person2 = {
//   firstName: "ahmed",
//   lastName: "khalid",
//   sayHello: () => console.log("hi i am ahmed"),
// };
// console.log(person2.firstName);
// console.log(person2.lastName);

// person.sayHello();
// person2.sayHello();

// this
// const person1 = {
//   name: "david",
//   age: 19,
//   sayHello: function () {
//     console.log(`hello I am ${this.named}`);
//   },
//   showAge: function () {
//     console.log(`my age is ${this.age}`);
//   },
// };
// person1.sayHello();
// person1.showAge();

// this keyword doesn't work with arrow functions

// constructors

// function Car(make, model, year, color) {
//   this.model = model;
//   this.make = make;
//   this.year = year;
//   this.color = color;
//   this.drive = function () {
//     console.log(`this car model is ${this.model}`);
//   };
// }

// const car1 = new Car("ford", "Mustang", 2024, "red");
// const car2 = new Car("Che", "Mustang", 2026, "red");
// const car3 = new Car("Ness", "Mustang", 1999, "red");

// console.log(car1.color);
// console.log(car1.make);

// car2.drive();

// classes
// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   displayProduct() {
//     console.log(`product is ${this.name}`);
//     console.log(`product is ${this.price}`);
//   }

//   calcTotal(tax) {
//     return this.price + this.price * tax;
//   }
// }

// const tax = 0.05;

// const product1 = new Product("spoon", 10);
// product1.displayProduct();
// const product2 = new Product("pants", 20);

// priceTaxed = product2.calcTotal(tax);
// console.log(priceTaxed);

// class MathUtil {
//   static PI = 3.14;

//   static getDiameter(radius) {
//     return radius * 2;
//   }

//   static getArea(radius) {
//     return this.PI * radius * radius;
//   }
// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(2));
// console.log(MathUtil.getArea(2));

// class User {
//   static userCount = 0;

//   constructor(username) {
//     this.username = username;
//     User.userCount++;
//   }
// }

// user1 = new User("david");
// user2 = new User("david");
// user3 = new User("david");

// console.log(User.userCount);

// inheritance

// class Animal {
//   alive = true;

//   eat() {
//     console.log(`this ${this.name} is eating`);
//   }
// }

// class Fish extends Animal {
//   name = "dodo";
// }
// class Rabbit extends Animal {
//   name = "rabbit";
// }

// fish1 = new Fish();
// fish1.eat();

// super keyword
// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   speedDisplay(speed) {
//     return `the speed is ${speed}`;
//   }
// }

// class Rabbit extends Animal {
//   constructor(name, age, runSpeed) {
//     super(name, age);
//     this.runSpeed = runSpeed;
//   }

//   run() {
//     return super.speedDisplay(this.runSpeed);
//   }
// }
// class Fish extends Animal {
//   constructor(name, age, swimSpeed) {
//     super(name, age);
//     this.swimSpeed = swimSpeed;
//   }

//   swim() {
//     return super.speedDisplay(this.swimSpeed);
//   }
// }
// class Hawk extends Animal {
//   constructor(name, age, flySpeed) {
//     super(name, age);
//     this.flySpeed = flySpeed;
//   }

//   fly() {
//     return super.speedDisplay(this.flySpeed);
//   }
// }

// const rabbit = new Rabbit("rabbit", 1, 20);
// const fish = new Fish("fish", 3, 40);
// const hawk = new Hawk("hawk", 4, 30);

// console.log(rabbit.name);
// console.log(fish.age);
// console.log(hawk.flySpeed);

// message = fish.swim();
// console.log(message);

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   set width(newWidth) {
//     if (newWidth > 0) {
//       this._width = newWidth;
//     } else {
//       console.error("width must be a positive number");
//     }
//   }

//   set height(newHeight) {
//     if (newHeight > 0) {
//       this._height = newHeight;
//     } else {
//       console.error("height must be a positive number");
//     }
//   }

//   get width() {
//     return this._width.toFixed(1) + "cm";
//   }

//   get height() {
//     return this._height.toFixed(1) + "cm";
//   }

//   get area() {
//     return (this._width * this._height).toFixed(1) + "cm";
//   }
// }

// const rectangle = new Rectangle(10, 3);

// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);

// getters and setters in js
// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   set firstName(name) {
//     if (typeof name === "string" && name.length > 3) {
//       this._firstName = name;
//     } else {
//       console.error("please enter a valid name");
//     }
//   }

//   set lastName(name) {
//     if (typeof name === "string" && name.length > 3) {
//       this._lastName = name;
//     } else {
//       console.error("please enter a valid name");
//     }
//   }

//   set age(age) {
//     if (typeof age === "number" && age >= 0) {
//       this._age = age;
//     } else {
//       console.log("please enter a valid age");
//     }
//   }

//   get firstName() {
//     return this._firstName;
//   }

//   get lastName() {
//     return this._lastName;
//   }

//   get age() {
//     return this._age;
//   }

//   get fullName() {
//     return `${this._firstName} ${this.lastName}`;
//   }
// }

// const person = new Person("david", "elks", 12);

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.fullName);

// destructuring

// swap the values of two variables [] for array {} for object
// let a = 1;
// let b = 3;
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// // swap two elements in an array
// const colors = ["red", "green", "blue", "black", "white"];
// [colors[0], colors[2]] = [colors[2], colors[0]];

// console.log(colors);

// // assign array elements to variables
// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(...extraColors);

// extract values from objects

// const person1 = {
//   firstName: "david",
//   lastName: "elks",
//   age: 13,
//   job: "student",
// };
// const person2 = {
//   firstName: "ahmed",
//   lastName: "khalid",
//   age: 20,
// };

// const { firstName, lastName, age, job = "student" } = person2;

// // console.log(firstName);
// // console.log(lastName);
// // console.log(job);

// function displayPerson({ firstName, lastName, age, job = "unemployed" }) {
//   console.log(firstName);
//   console.log(lastName);
//   console.log(age);
//   console.log(job);
// }

// displayPerson(person1);

// nested objects

// const person = {
//   name: "david",
//   age: 19,
//   hobbies: ["coding", "python", "js"],

//   address: {
//     country: "egypt",
//     street: "hhhh",
//   },
// };

// console.log(person.name);
// console.log(person.hobbies[0]);
// console.log(person.address.country);

// for (const property in person.address) {
//   console.log(person.address[property]);
// }

// class Address {
//   constructor(street, city, country) {
//     this.city = city;
//     this.street = street;
//     this.country = country;
//   }
// }

// class Person {
//   constructor(name, age, ...address) {
//     this.name = name;
//     this.age = age;
//     this.address = new Address(...address);
//   }
// }

// const person1 = new Person("david", 12, "ht", "fm", "eg");

// console.log(person1.address);

// const fruits = [
//   { name: "apple", price: 12 },
//   { name: "kiwi", price: 14 },
//   { name: "orange", price: 10 },
// ];

// console.log(fruits[0].name);
// console.log(fruits[1].price);
// fruits.push({ name: "papaya", price: 99 });
// console.log(fruits[3].price);

// fruits.forEach((fruit) => console.log(fruit.name));

// const names = fruits.map((fruit) => fruit.name);
// const prices = fruits.map((fruit) => fruit.price);
// console.log(names);
// console.log(prices);

// const expensive = fruits.filter((fruit) => fruit.price >= 50);
// console.log(expensive);

// const maxPrice = fruits.reduce((max, fruit) =>
//   fruit.price > max.price ? fruit : max,
// );

// const minPrice = fruits.reduce((min, fruit) =>
//   fruit.price < min.price ? fruit : min,
// );
// console.log(maxPrice);
// console.log(minPrice);

// sort method in js
// let numbers = [1, 2, 5, 6, 12, 10, 123];

// numbers.sort((a, b) => a - b); // asc
// numbers.sort((a, b) => b - a); // desc

// const people = [
//   { name: "david", age: 10, grade: "A" },
//   { name: "ahmed", age: 12, grade: "C" },
//   { name: "khalid", age: 19, grade: "B" },
// ];

// people.sort((a, b) => a.age - b.age);
// console.log(people);

// people.sort((a, b) => a.name.localeCompare(b.name));
// console.log(people);

// people.sort((a, b) => a.grade.localeCompare(b.grade));
// console.log(people);

// const cards = ["a", "b", "c ", 12, 123, 3123, 3123];

// function shuffle(cards) {
//   for (let i = cards.length - 1; i > 0; i--) {
//     let random = Math.floor(Math.random() * (i + 1));
//     [cards[i], cards[random]] = [cards[random], cards[i]];
//   }
// }

// shuffle(cards);
// console.log(cards);

// date object
// Date(year, month, day, hour, minute, second, ms)
// const date = new Date();

// console.log(date);

// const year = date.getFullYear();
// console.log(year);

// const month = date.getMonth();
// console.log(month);

// const day = date.getDay();
// console.log(day);

// // getMinutes() getSeconds()

// const dayOfWeek = date.getDay();
// console.log(dayOfWeek);

// date.setFullYear(2021);
// console.log(date);

// closure  function inside another function
// all variable inside are private
// function outer() {
//   let message = "hello";
//   function inner() {
//     console.log(message);
//   }

//   inner();
// }

// outer();

// function createCounter() {
//   let count = 0;

//   function increment() {
//     count++;
//     console.log(`count increased to ${count}`);
//   }

//   function getCount() {
//     return count;
//   }

//   return { increment, getCount };
// }

// const counter = createCounter();

// counter.increment();
// counter.increment();
// counter.increment();

// console.log(`counter is ${counter.getCount()}`);

// function createScore() {
//   let score = 0;
//   function increaseScore(points) {
//     score += points;
//     console.log(`+${points}`);
//   }

//   function decreaseScore(points) {
//     score -= points;
//     console.log(`-${points}`);
//   }

//   function getScore() {
//     console.log("score is " + score);
//   }

//   return { increaseScore, decreaseScore, getScore };
// }

// const game = createScore();
// game.increaseScore(20);
// game.decreaseScore(10);
// game.getScore();

// // setTimeOUt

// function sayHello() {
//   window.alert("hello");
// }

// setTimeout(sayHello, 1000);

// setTimeout(() => {
//   window.alert("i am david");
// }, 3000);

// const timeId = setTimeout(() => {
//   window.alert("hello");
// }, 2000);

// clearTimeout(timeId);

// const button = document.getElementById("clickMe");
// let timeId;
// function startTimeout() {
//   timeId = setTimeout(() => {
//     alert("hello");
//   }, 3000);
// }

// function stop() {
//   clearTimeout(timeId);
// }

// import { PI, getArea } from "./mathUtil.js";
// console.log(PI);
// console.log(getArea(12).toFixed);

// synch one by one
// async multiple operations done at the same time
// callback  asynv await promises
// function func2() {
//   console.log("hello 2");
//   console.log("hello 3");
// }

// function func1(callback) {
//   setTimeout(() => {
//     console.log("hello1");
//     callback();
//   }, 3000);
// }

// func1(func2);

// error object
// try
// catch
// finally

// try {
//   console.log(x);
// } catch (error) {
//   console.error(error);
// } finally {
//   // close files connections or resources
//   console.log("this always executes");
// }
// console.log("we have reached the end");

// try {
//   const div = Number(window.prompt("enter a div"));
//   const divisor = Number(window.prompt("enter the divisor"));

//   if (divisor == 0) {
//     throw new Error("you can't divide by zero");
//   }

//   if (isNaN(div) || isNaN(divisor)) {
//     throw new Error("enter a valid number");
//   }
//   const result = div / divisor;
//   console.log(result);
// } catch (error) {
//   console.error(error);
// } finally {
//   console.log("you have reached the end");
// }

// DOM

// elements selectors
// id
// const myHeading = document.getElementById("myHeading");
// myHeading.style.color = "red";
// myHeading.style.textAlign = "center";

// className

// const fruits = document.getElementsByClassName("fruit");
// fruits[0].style.color = "blue";

// for (let fruit of fruits) {
//   fruit.style.backgroundColor = "gray";
// }

// Array.from(fruits).forEach((fruit) => {
//   fruit.style.backgroundColor = "cyan";
// });

// tagname
// const liElements = document.getElementsByTagName("li");
// console.log(liElements);

// liElements[0].style.backgroundColor = "yellow";

// for (let element of liElements) {
//   element.style.backgroundColor = "gray";
// }

// Array.from(liElements).forEach((liElement) => {
//   liElement.style.backgroundColor = "yellow";
// });

// // query selector
// const element = document.querySelector(".fruit");
// element.style.backgroundColor = "red";

// const foods = document.querySelectorAll(".fruit");

// foods[2].style.backgroundColor = "gray";

// DOM navigation
// ,firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// const element = document.getElementById("fruits");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "gray";

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach((element) => {
//   const first = element.firstElementChild;
//   first.style.backgroundColor = "yellow";
// });

// const element = document.getElementById("fruits");
// const last = element.lastElementChild;

// last.style.color = "red";

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach((element) => {
//   let last = element.lastElementChild;
//   last.style.color = "red";
// });

// const element = document.getElementById("a");
// element.nextElementSibling.style.color = "blue";

// element.parentElement.style.backgroundColor = "gray";

// const parent = document.getElementById("fruits");
// // children returns a collection
// const children = parent.children;

// Array.from(children).forEach((element) => {
//   element.style.color = "red";
// });

// children[1].style.backgroundColor = "gray";

// creating an element in html
// 1. create the element

// const newH1 = document.createElement("h1");

// // 2. add attributes or properties
// newH1.textContent = "I am a new H1";
// newH1.id = "h1";
// newH1.style.color = "red";
// newH1.style.textAlign = "center";
// // 3. append element to dom
// // document.getElementById("box3").append(newH1);

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);
// // 4. remove html element

// document.body.removeChild(newH1);

// Event Listeners

// emojiContainer = document.getElementById("emoji-container");

// const movement = 60;
// let x = 0;
// let y = 0;

// document.addEventListener("keydown", (event) => {
//   emojiContainer.textContent = "😡";
//   emojiContainer.classList.remove("bg-blue-300");
//   emojiContainer.classList.add("bg-red-300");
// });

// document.addEventListener("keyup", (event) => {
//   emojiContainer.textContent = "😊";
//   emojiContainer.classList.remove("bg-red-300");
//   emojiContainer.classList.add("bg-blue-300");
// });

// document.addEventListener("keydown", (event) => {
//   if (event.key.startsWith("Arrow")) {
//     switch (event.key) {
//       case "ArrowUp":
//         y -= 10;
//         break;
//       case "ArrowDown":
//         y += 10;
//         break;
//       case "ArrowRight":
//         x += 10;
//         break;
//       case "ArrowLeft":
//         x -= 10;
//         break;
//     }

//     emojiContainer.style.top = `${y}px`;
//     emojiContainer.style.left = `${x}px`;
//   }
// });

const image = document.getElementById("img");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
  image.classList.toggle("invisible");

  if (image.classList.contains("invisible")) {
    button.textContent = "Show";
  } else {
    button.textContent = "Hide";
  }
});
