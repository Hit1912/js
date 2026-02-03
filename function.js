/*
// function
// what --> task. function is a block of code that performs a specific
// why --> to avoid code repetition and to make code modular and reusable.
// how -->
//function keyword, name, parameters, body, return statement
// type of functions:
// function name (params) {} --> function declaration
function abc() {}
// let fnc = function (){} --> function expression

let fnc = function () {};
// let fnc = () => {} --> arrow function - fat arrow function
let fnc1 = () => {};

function temp_cart() {
console.log("Adding Producat");
}
temp_cart();
temp_cart();
temp_cart();

// parameters vs arguments
// parameters are the names listed in the function definition (params --> () ni andar lakheli values)
// arguments are the real values passed to the function (args function call karti () ni andar lakheli (pass) kareli values)

function cart(product_name, quantity, price) {
console.log("Product:", product_name, "Quantity:", quantity, "Price:", price);
}

cart("Laptop", 1, 50000); // arguments
cart("Phone", 2, 20000);
cart("Headphones", 3, 3000);

// convert into arrow function
// let cart = () => {}
let cart2 = (product1) => {
// product1 -- params
console.log("product:", product1);
}
cart2("Mobile"); // mobile args
cart2("Laptop");
cart2("Tablet");
// Default, rest and spread parameters in function
// default

// Default, rest and spread parameters in function
// default
function abc (v1, v2){
console.log(v1, v2);
}
abc(20, 21);
function cart3(product2="product", price="0") {
console.log(product2, price)
}
cart3(); // product price

// rest -> Jayre function ma multiple arguments pass karva to vadhare params banava pade chhe mate te na karvu pade te mate rest parameter use kariye chhiye (rest ---> jo funtion na parameter ni anadar lakhvama aave chhe)
function abcd(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10) {
console.log(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10);
}
abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function abcd1(...numbers) {
console.log(numbers);
}
abcd1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // how to handle multiple arguments

function abcd2(v1, v2, ...numbers) { console.log(v1, v2, numbers);
}
abcd2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


// retrun or early return
// retrun -> function mathi value bahar mokalva mate
function getValue1 (value) {
if (value <25) return "Value is less than 25";
else if (value < 50) return "Value is less than 50";
else if (value < 75) return "Value is less than 75";
return "Value is 75 or more";
}
let result = getValue1(80);
console.log(result);
// first Class Function:
// function can be treated as variables
// let fnc = function (){}
// let fnc = () => {}
let buyNow1 = function (product,price){
    console.log(product,price)
}

buyNow1("S24 FE",50500);

//Convert into arrow Function
let buyNow2 = (product, price) => console.log(product, price);

// function can be passed as arguments to other functions
// let fnc = function(){}
// fnc(function(){})

// function abc1(v1,v2){
//     console.log(v2);
//     return v1();
// }
// abc1(function(){
//     console.log("First Class Function")

// },"Hello")

// function abc2(v1,v2){
//     return v1();
//     console.log(v2);
// }

// abc2(function(){
//     console.log("First Class Function")
// },"Hello")  


// function can be returned from other functions

function abc (){
    return function (){
        console.log("Function With in Function")
    }
}
abc()();

function abc2 (){
    return () =>{
        console.log("Arrow Function With In Function")
    }
}
abc2()();
*/

// Higher Order Function (HOF)
// function that takes another function as an argument or returns a 
// function as a result (eva function je return kare ek function athava 
// acpect kare ek function params ma)
 
// function abcd(val){val();}
// --> abcd(function(){console.log("hello")})
// function abcd(val){} --> higher order function
 
// function abcd(){ return function(){} } abcd()() --> Higher order


//Pure Vs Impure Function
// pure function --> function je same input par same output aapse ane 
// koi bahar na state ne modify na kare (pure function --> je function 
// bahar na state ne modify na kare )
// let a = 20;
// function change_a(){
//   return "a not change(pure function) " + a;
// } // -- pure function

// console.log(change_a());
// // impure function --> function je same input par different output 
// // aapse athava bahar na state ne modify kare (impure function --> je 
// // function bahar na state ne modify kare )
// function change_a1(){
//   a++;
//   return "a change (impure function)" +a;
// }

// closure function
// function je potana parent function na variables ne access kari 
// shake(return thava valo function use karshe parent function na koi 
// variable) (function within function)
// function outer(){
//   let outer_var = "Outer Function Variable";
//   function inner(){
//     console.log(outer_var);
//   }
//   inner();
// }
// outer();


//lexical scope --> nested function can access variables declared in their outer scope
function outer1() {
  let outer_var = "Outer Function Variable";
  function inner1() {
    console.log(outer_var);
    let inner_var = "Inner Function Variable";
    function most_inner() {
      console.log(outer_var);
      console.log(inner_var);
    }
    most_inner();
  }
  inner1();
}
outer1();

// IIFE - Immediately Invoked Function Expression
(function () {})(); // function je declare karta j call thai jaye
(function () {
  console.log("IIFE executed");
})();
 
// Hoisting in function
// use case --> show project structure
temp_fnc();
 
function temp_fnc(){
  console.log("hoisting in function")
}

//Arror Function Hosting 



// //Example
// /*************************************************
//  Example 1:
//  Print numbers from 1 to 10 using a for loop
// *************************************************/
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
// // Reason: for loop is best when start & end are known


// /*************************************************
//  Example 2:
//  Print numbers from 10 to 1 using while loop
// *************************************************/
// let j = 10;
// while (j >= 1) {
//   console.log(j);
//   j--;
// }
// // Reason: while loop runs until condition becomes false


// /*************************************************
//  Example 3:
//  Print even numbers from 1 to 20 using for loop
// *************************************************/
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
// // Reason: Even numbers are divisible by 2


// /*************************************************
//  Example 4:
//  Print odd numbers from 1 to 15 using while loop
// *************************************************/
// let k = 1;
// while (k <= 15) {
//   if (k % 2 !== 0) {
//     console.log(k);
//   }
//   k++;
// }
// // Reason: Odd numbers are NOT divisible by 2


// /*************************************************
//  Example 5:
//  Print multiplication table of 5
// *************************************************/
// for (let i = 1; i <= 10; i++) {
//   console.log(`5 x ${i} = ${5 * i}`);
// }
// // Reason: Template literals make output readable


// /*************************************************
//  Example 6:
//  Find sum of numbers from 1 to 100
// *************************************************/
// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//   sum = sum + i;
// }

// console.log("Sum:", sum);
// // Reason: Accumulator variable stores total


// /*************************************************
//  Example 7:
//  Print numbers between 1 to 50 divisible by 3
// *************************************************/
// for (let i = 1; i <= 50; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }
// // Reason: % operator checks divisibility


// /*************************************************
//  Example 8:
//  Ask user for a number and print even/odd
// *************************************************/
// // NOTE: Works in browser only
// let num = prompt("Give a number");

// for (let i = 1; i <= num; i++) {
//   if (i % 2 === 0) {
//     console.log(i + " is even");
//   } else {
//     console.log(i + " is odd");
//   }
// }
// // FIX: Typo corrected (numl → num)


// /*************************************************
//  Example 9:
//  Count numbers between 1 to 100 divisible by 3 or 5
// *************************************************/
// let countDivisible = 0;

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     countDivisible++;
//   }
// }

// console.log("Count:", countDivisible);
// // FIX: Original code printed numbers, not count


// /*************************************************
//  Example 10:
//  Stop at first multiple of 7
// *************************************************/
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
//   if (i % 7 === 0) {
//     break;
//   }
// }
// // Reason: break completely exits loop


// /*************************************************
//  Example 11:
//  Skip multiples of 3 (continue)
// *************************************************/
// for (let i = 1; i <= 20; i++) {
//   if (i % 3 === 0) {
//     continue;
//   }
//   console.log(i);
// }
// // Reason: continue skips current iteration


// /*************************************************
//  Example 12:
//  Print first 5 odd numbers using counter + break
// *************************************************/
// let oddCount = 0;

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log(i);
//   oddCount++;

//   if (oddCount === 5) {
//     break;
//   }
// }

//  Function Examples

//❓ Difference between Function Declaration & Function Expression (Hoisting)

// ✅ Answer:
// | Feature                    | Function Declaration | Function Expression |
// | -------------------------- | -------------------- | ------------------- |
// | Hoisting                   | ✅ Yes                | ❌ No                |
// | Can call before definition | ✅ Yes                | ❌ No                |
