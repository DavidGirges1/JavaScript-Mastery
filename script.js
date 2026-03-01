// window.alert("hello world of coding");
// document.write("<h2>hello this is h2</h2>");
// console.log("hello js console")
// console.error("this is a created error");
// console.table(["david", "ahmed", "khalid"]);

// console.log(
//   "hello from %cjs %cfile",
//   "color:red; font-size: 40px",
//   "color:blue; font-size: 40px",
// );

// console.log(typeof 12); // number
// console.log(typeof 12.0); // number
// console.log(typeof "David"); // string
// console.log(typeof [1, 2, 3]); // object
// console.log(typeof { name: "david", age: 20, country: "Egypt" }); // object
// console.log(typeof false); // boolean
// console.log(typeof true); // boolean
// console.log(typeof null); // object
// console.log(typeof undefined); // undefined

// var user = "David";
// console.log(user);

// var name = "dAvid",
//   nickname = "dodo";
// console.log(nickname);

// ID is considered a global variable

// JS is a loosly typed language. type of var determined during execution
// static typed. you have to determine the type before execution

// identifiers: you can use $ _ at the beginning
// camelCase naming convention is used
// let myName = "David";

// let and const doesn allwo redeclare unlike var (old)
// access before declare is more error detailed in let and const
// console.log(x);
// let x = 12; // detailed error emssage unlike var

// variable scope drama: any var created with the var is put in the window object
// var msg = "hello";
// console.log(window.msg); // can be accessed here

// Escape characters
// console.log('I \'m David');
// console.log("I \\ love backslash");
// console.log("David \n elks");

// concatination (+)
// console.log("my name is " + "David");
// console.log("David", "Elks"); // auto puts space in between

//template strings  (` `)
// let name = "david";
// let age = 19;
// let country = "Egypt";
// console.log(`my name is ${name} and my age is
// ${age} and I live in ${country} """ // '' no escaping required`);

// you can also write in new lines without the /n
// let markup = `
//     <div>
//         <h1> hello world </h1>
//     </div>
// `;
// document.write(markup);

// Variables and concatination challenge
// let myTitle = "Elxero",
//   myDesc = "the best course ever",
//   myDate = "28-2-2026";

// let markUp = `
//     <div>
//         <h3>${myTitle} </h1>
//         <p>${myDesc} </p>
//         <span>${myDate} </span>
//     </div>
// `;

// document.write(markUp);
// document.write(markUp);
// document.write(markUp);

// Arithmatic operators
// console.log(10 + " David");
// console.log(10 - " David"); // NaN not a number
// console.log(typeof NaN); // number
// console.log(2 ** 4);
// console.log(10 % 2); // check even or odd
// var num = 10;
// console.log(num++); // 10
// console.log(num); // 11

// unary operators -- to be continued
// + return a number if it is not a number
// console.log(+100);
// console.log(+"100");
// console.log(+"-100"); // return -100
// console.log(+"hello"); // NaN
// console.log(+"1.3"); // 1.3
// console.log(+"0xff"); // 255
// console.log(+null); //  0
// console.log(+true); //  1
// console.log(+false); //  0

// unary negation (-) return a negative number if not a number
// console.log(-"100");
// console.log(-"-100");
// console.log(-"David"); // NaN
// same as unary addition

// console.log(Number(100));  // another way using the constructor Number

// Type casting
// let a = "20";
// let b = 10;
// let c = true;

// console.log(a + b);
// console.log(+a + b);

// console.log(a - b);
// console.log("" - 2); // -2

// console.log(false - true);

// console.log(a + b + c); // cast all to strings
// console.log(+a + b + c);

// Assignments operators  += /= *= -= %=
// let a = 10;
// a += 20;

// console.log(a);

// operators challenge
// challenge 1:
// let a = 10;
// let b = "20";
// let c = 80;

// console.log(++a + +b++ + +c++ - +a++);
// console.log(++a + -b + +c++ - -a++ + +a);
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/* 
    ++a -> a = 11
    +b++ -> 20 after b = 21
    +c++ -> c = 80 , c after = 81 
    - +a++ -> - 11 -> a after will be 12
    FIRST EXPRESSION: 11 + 20 + 80 - 11 = 100
*/

/* A 12 -> 13 -> 14
    B 21
    C 81 -> 82

    ++a     -> a = 13 
    -b      -> -21    
    +c++    -> 81     
    - -a++  -> 13    
    +a      -> 14     

    Second Expression: 13 - 21 + 81 + 13 + 14 = 100
*/

/* A 14 -> 13 -> 12
    B 21 -> 22
    C 82 -> 81

    --c      -> 81
    +b       -> 21
    --a      -> 13
    * +b++   -> * 21 (b becomes 22)
    - +b     -> - 22
    * a      -> * 13
    + --a    -> + 12 (a becomes 12)
    - +true  -> - 1

    Expression: 81 + 21 + (13 * 21) - (22 * 13) + 12 - 1 = 100
*/

// // CHALLENGE 2
// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;

// // 2000
// console.log(-(-d * +e));

// //-173
//  //TODO: tough will need more thinking

// Number

// console.log(1_000_000); //syntactic sugar
// console.log(1e6);
// console.log(10 ** 6);
// console.log(1000000.0);

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
// console.log(Number.MAX_VALUE + 1); // same result

// Number Methods
// .toString() .toFixed() .pareseInt() .parseFloat() .isInteger() .isNaN()

// console.log((100).toString());
// console.log((10.1239847).toFixed(2)); // rounding

// console.log(+"100 David"); // NaN
// console.log(parseInt("100 David")); // 100

// console.log(parseFloat("100.500"));

// console.log(Number.isInteger("100"));
// console.log(Number.isInteger(102.12));
// console.log(Number.isInteger(102));

// console.log(Number.isNaN(100));
// console.log(Number.isNaN(null));

/*  Math Object 
round()
ceil()
floor()
min()
max()
pow()
random()
trunc()
*/

// console.log(Math.round(99.2));
// console.log(Math.round(99.5));

// console.log(Math.ceil(99.5));
// console.log(Math.ceil(99.2));

// console.log(Math.floor(10.2));
// console.log(Math.floor(10.8));

// console.log(Math.min(10, 20));
// console.log(Math.max(10, 20, 30));

// console.log(Math.pow(2, 3));

// console.log(Math.random());

// console.log(Math.trunc(100.5)); // retunr the integer part

// ----

// Number challenge

// let a = 1_00;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;

// // Find Smallest Number in All Variables And Return Integer
// console.log(Math.trunc(Math.min(a, b, c, d)));

// // Use Variable a + d One Time To Get The Needed Output
// console.log(Math.pow(a, Math.floor(d))); // 10000

// // Get Integer "2" From d Variable With 4 Methods
// console.log(Number.parseInt(d));
// console.log(Math.round(d));
// console.log(Math.trunc(d));
// console.log(Math.round(d));

// // Use Variables b + d To Get This Values
// console.log(String(Math.trunc(b) / Math.ceil(d))); // 66.67 => String
// console.log(Math.round(Math.trunc(b) / Math.ceil(d))); // 66.67 => String

// strings
// let name = "David";
// console.log(name[0]);
// console.log(name[5]);
// console.log(name.charAt(1));
// console.log(name.charAt(5));
// console.log(name.length);

// let name2 = "     David       ";
// console.log(name2.trim());

// console.log(name.toUpperCase());
// console.log(name.toLowerCase());

// console.log(name2.trim().charAt(1).toUpperCase()); // chaining

// let x = "Elzero Web School";
// console.log(x.indexOf("Web"));
// console.log(x.indexOf("Web", 8)); // -1 not found
// console.log(x.lastIndexOf("o"));

// console.log(x.slice(2, 7)); // not including the end
// console.log(x.slice(-5, -3));

// console.log(x.repeat(5));

// console.log(x.split(" ")); // split with space
// console.log(x.split("", 4)); // limit no of splits

// console.log(x.substring(2, 6));
// console.log(x.substring(6, 2)); // same result
// console.log(x.substring(-10, 6)); // 0-6
// console.log(x.substring(x.length - 1)); // 0-6

// console.log(x.substr(17)); // empty string
// console.log(x.substr(-5, 2)); // specify how many letters after the start

// console.log(x.includes("Web"));
// console.log(x.startsWith("Web"));
// console.log(x.startsWith("E", 2)); // start position (default 0 )
// console.log(x.endsWith("School"));
// console.log(x.endsWith("o", 6)); // length to search for

// challenge
let a = "Elzero Web School";

// 1. Include This Methods In Your Solution [slice, charAt]
// Zero
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6));

// 2. 8 H
console.log(a.charAt(13).repeat(8).toUpperCase());

// 3. Return Array [Elzero]
console.log(a.split(" ", 1));

// 4. Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.substr(0, 6)} ${a.substr(-6)}`);

// 5. Solution Must Be Dynamic And String May Change
console.log(
  `${a.charAt(0).toLowerCase() + a.slice(1, -1)}${a.slice(-1).toUpperCase()}`,
); //eLZERO WEB SCHOOl
