# 📘 JavaScript 

---
# 📌 VARIABLES IN JAVASCRIPT

> ✨ **Simple theory + clear examples = strong fundamentals**
>
> This chapter explains **what variables are**, **how JavaScript handles them internally**, and **why `var`, `let`, and `const` behave differently**.

---

## 🧠 What is a Variable?

A **variable** is a container used to store data so it can be reused and modified later.

```js
let age = 20;
const name = "Hit";
```

📌 JavaScript variables can store **numbers, strings, objects, arrays, functions**, and more.

---

## 🔑 Ways to Declare Variables in JavaScript

JavaScript provides **three keywords** to declare variables:

* `var`  → old, function‑scoped (avoid ❌)
* `let`  → modern, block‑scoped ✅
* `const` → block‑scoped, cannot be reassigned ✅

---

## 🔍 What is Hoisting?

**Hoisting** is JavaScript’s behavior of moving **variable declarations** to the top of their scope **before code execution**.

📌 Important:

* Only **declarations** are hoisted
* **Initializations are NOT hoisted**

---

## ⏳ Temporal Dead Zone (TDZ)

The **Temporal Dead Zone** is the time between:

* entering a scope
* and the variable being declared with `let` or `const`

Accessing a variable in TDZ causes an error ❌

```js
console.log(a); // ❌ TDZ error
let a = 10;
```

---

## 📐 Scope in JavaScript

**Scope** determines where a variable can be accessed.

### Types of Scope:

* **Global Scope** – accessible everywhere
* **Function Scope** – `var`
* **Block Scope** – `let`, `const`

---

## 🔹 Variable Hoisting & Scope (At a Glance)

| Example | Code                                                          | Output                        | Explanation                                                                                   |
| ------- | ------------------------------------------------------------- | ----------------------------- | --------------------------------------------------------------------------------------------- |
| **1**   | `console.log(nm); let nm = "name";`                           | ❌ ReferenceError              | `let` variables are hoisted but not initialized. Accessing before declaration causes **TDZ**. |
| **2**   | `console.log(b); var b = "username";`                         | `undefined`                   | `var` is hoisted and initialized with `undefined`.                                            |
| **3**   | `var x = 1; { var x = 2; } console.log(x);`                   | `2`                           | `var` is **not block‑scoped**. Inner value overwrites outer value.                            |
| **4**   | `let a = 10; { let a = 20; console.log(a); } console.log(a);` | `Inside: 20`<br>`Outside: 10` | `let` is **block‑scoped**. Inner variable does not affect outer variable.                     |

---

# 🧠 JavaScript Exercises – Variables

Clean, conceptual and **interview‑ready explanations** for `var`, `let`, `const`, hoisting and block scope ✨

---

## 🔹 Example 1 – `let` Hoisting (TDZ)

```js
console.log(nm);
let nm = "name";
```

### ❌ Answer / Error

```
ReferenceError: Cannot access 'nm' before initialization
```

### 🧠 Why

* `let` variables **are hoisted**
* They remain in **Temporal Dead Zone (TDZ)**
* Accessing before declaration throws an error

📌 `let` is hoisted but **not usable** before declaration.

---

## 🔹 Example 2 – `var` Hoisting

```js
console.log(b);
var b = "username";
```

### ✅ Answer

```
undefined
```

### 🧠 Why

* `var` is hoisted and initialized with `undefined`
* No TDZ exists for `var`

⚠️ This behavior can cause bugs in large codebases.

---

## 🔹 Example 3 – `var` Scope (Function Scope)

```js
var x = 1;
{
  var x = 2;
}
console.log(x);
```

### ✅ Answer

```
2
```

### 🧠 Why

* `var` ignores block `{}`
* Both declarations refer to the **same variable**

---

## 🔹 Example 4 – `let` Block Scope

```js
let a = 10;
{
  let a = 20;
  console.log("Inside:", a);
}
console.log("Outside:", a);
```

### ✅ Answer

```
Inside: 20
Outside: 10
```

### 🧠 Why

* `let` is **block scoped**
* Inner block creates a new variable
* Outer variable remains unchanged

---

## 🔹 Example 5 – `const` with Objects

```js
const person = { name: "demo" };

person.name = "user"; // ✅ allowed
person = {};           // ❌ not allowed
```

### ❌ Error

```
TypeError: Assignment to constant variable
```

### 🧠 Why

* `const` prevents **reassignment**, not mutation
* Object reference is fixed
* Object properties can change

📌 `const` protects the reference, not the object itself.

---

## 📊 Quick Summary Table

| Keyword | Hoisted | Block Scope | Reassign | TDZ |
| ------- | ------- | ----------- | -------- | --- |
| `var`   | ✅       | ❌           | ✅        | ❌   |
| `let`   | ✅       | ✅           | ✅        | ✅   |
| `const` | ✅       | ✅           | ❌        | ✅   |

---

## 🌟 Best Practices (Exam + Interview)

* ✅ Use `const` by default
* ✏️ Use `let` when reassignment is needed
* 🚫 Avoid `var`
* 🧠 Understand TDZ clearly (very common interview question)

✨ **Perfect for notes, exams, and GitHub README.md**

---

## 🧪 Variable Declaration, Naming Rules & Scope (Practical Notes)

### 🔹 Valid Variable Names

```js
// var (ES5)
var ac = "team";
var _123 = "123";
var $123 = "hit";
// var 123 = "test"; ❌ invalid
b = 10; // ❌ never use (creates global variable)
```

📌 Variable names can start with **letters, `_` or `$`**.
📌 Never assign values **without `var`, `let`, or `const`**.

---

## 🔹 `let` and `const`

```js
let team = "dungrani";
const team_const = "dungrani!!";
```

* `let` → can be reassigned
* `const` → cannot be reassigned

---

## 🔹 Variable Declaration vs Initialization

```js
var d;              // declaration only
var team_d = 12;    // declaration + initialization
```

📌 **Declaration** creates the variable.
📌 **Initialization** assigns a value.

---

## 🔁 Reassignment & Redeclaration

```js
var temp = 12;
temp = "dungrani";   // ✅ reassignment
var temp = "again"; // ✅ redeclaration (allowed with var)
```

⚠️ With `let` and `const`:

* ❌ Cannot be redeclared in the same scope
* ❌ `const` must be initialized
* ❌ `const` cannot be reassigned

```js
const temp_b = "dungrani";
// temp_b = "user"; ❌ error
```

---

## 🌍 Scope in JavaScript – `var`

```js
var e = 23; // global scope
console.log("global scope", e);
{
  var e = 25; // same variable
  console.log("block scope", e);
}
function abc() {
  var e = 30; // function scope
  console.log("function scope", e);
}
abc();
console.log("outside", e);
```

### 🧠 Output Behavior

* `var` is **function-scoped**
* Blocks `{}` do NOT create scope

---

## 🌍 Scope in JavaScript – `let`

```js
let f = 23; // global scope
console.log("global scope", f);
{
  let f = 25; // block scope
  console.log("block scope", f);
}
function xyz() {
  let f = 30; // function scope
  console.log("function scope", f);
}
xyz();
console.log("outside", f);
```

### 🧠 Output Behavior

* `let` is **block-scoped**
* Each `{}` creates a new variable

---

## ⏳ Temporal Dead Zone (TDZ)

```js
console.log(h);
var h = 24; // undefined
```

```js
// console.log(j); ❌ ReferenceError
let j = 12;
```

📌 `let` and `const` exist in **TDZ** until initialized.

---

## 🚀 Hoisting Impact Summary

| Keyword | Hoisted | Value Before Init |
| ------- | ------- | ----------------- |
| var     | ✅       | `undefined`       |
| let     | ✅       | ❌ ReferenceError  |
| const   | ✅       | ❌ ReferenceError  |

---

## 🌟 Best Practices

* ✅ Always use `const` by default
* ✏️ Use `let` when value changes
* 🚫 Avoid `var`
* ❌ Never create variables without declaration

✨ These practical rules are **very important for exams & interviews**.

---
# 📌 DATA TYPES IN JAVASCRIPT

JavaScript is a **dynamically typed language**, which means variable types are decided at **runtime**, not at declaration time.

```js
let value = "hello"; // string
value = 25;          // number
value = true;        // boolean
```

---

## 🔹 Types of Data Types

JavaScript data types are divided into **two categories**:

1. **Primitive (Value Types)**
2. **Non‑Primitive (Reference Types)**

---

## 1️⃣ Primitive Data Types

👉 Store **actual values**
👉 Copied **by value**

```js
let a = 5;
let b = a;
b = 10;

console.log(a); // 5
console.log(b); // 10
```

📌 Changing `b` does **not** affect `a`.

### 🔸 Primitive Types List

| Type      | Description             | Example      |
| --------- | ----------------------- | ------------ |
| String    | Text data               | "hello"      |
| Number    | Integers & decimals     | 25, 25.5     |
| Boolean   | true / false            | true         |
| Null      | Intentional empty value | null         |
| Undefined | Declared, not assigned  | let x;       |
| Symbol    | Unique identifier       | Symbol("id") |
| BigInt    | Large integers          | 123n         |

---

### 🔹 String

```js
let name1 = "user";
let name2 = 'admin';
let name3 = `developer`;
```

---

### 🔹 Number

```js
let age = 25;
let price = 99.99;
let loss = -10;
```

---

### 🔹 Boolean

```js
let isLogin = true;
let isAdmin = false;
```

---

### 🔹 Null vs Undefined

```js
let x;
let y = null;
```

| Feature     | undefined    | null                 |
| ----------- | ------------ | -------------------- |
| Meaning     | Not assigned | Intentionally empty  |
| Type        | "undefined"  | "object" (JS bug 😅) |
| Assigned by | JavaScript   | Developer            |
| Falsy       | ✅            | ✅                    |

---

### 🔹 Symbol

```js
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // false
```

📌 Symbols are **always unique**.

---

### 🔹 BigInt

```js
let num = 9007199254740991;
num = num + 10; // ❌ unsafe

let big = 9007199254740991n;
big + 10n; // ✅
```

📌 Used when numbers exceed `Number.MAX_SAFE_INTEGER`.

---

## 2️⃣ Non‑Primitive Data Types (Reference Types)

👉 Store **references (memory address)**
👉 Copied **by reference**

```js
let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);
console.log(arr1); // [1,2,3,4]
```

---

### 🔸 Non‑Primitive Types

| Type     | Example                     |
| -------- | --------------------------- |
| Object   | `{ name: "user", age: 25 }` |
| Array    | `["a", "b"]`                |
| Function | `function test(){}`         |

---

### 🔹 Object

```js
let user = {
  name: "test",
  age: 25,
  email: "test@example.com"
};
```

---

### 🔹 Array

```js
let users = ["user1", "user2", "user3"];
```

---

### 🔹 Function

```js
function greet(name) {
  return `Hello ${name}`;
}
```

---

## 🔄 Type Conversion (Coercion)

| Expression     | Result |
| -------------- | ------ |
| `"5" + 1`      | "51"   |
| `"5" - 1`      | 4      |
| `true + false` | 1      |
| `null + 1`     | 1      |

---

## ❓ Why `typeof NaN === "number"`

```js
typeof NaN; // "number"
```

📌 `NaN` is the result of a **failed numeric operation**, so JavaScript still treats it as a number.

```js
"hello" - 5; // NaN
```

---

## ✅ Truthy & Falsy Values

### ❌ Falsy Values

```js
false, 0, "", null, undefined, NaN, document.all
```

### ✅ Truthy Values

Everything else 😄

```js
!!0;     // false
!!"hi"; // true
```

---

## 📊 Quick Summary

| Category      | Stored As | Copied By |
| ------------- | --------- | --------- |
| Primitive     | Value     | Value     |
| Non‑Primitive | Reference | Reference |

---

✨ **This file is perfect for README.md, exams, and interviews.**

---
# 📘 JavaScript Operators Guide

## ✅ What is an Operator?

An **operator** is a symbol that performs an action on values or variables.

Example:

```js
let x = 5 + 2; // + is operator
```

---

## 🔹 Types of Operators in JavaScript

### 1️⃣ Arithmetic Operators

Used for math calculations.

| Operator | Meaning                  | Example      |
| -------- | ------------------------ | ------------ |
| `+`      | Addition / Concatenation | `1 + 2 → 3`  |
| `-`      | Subtraction              | `5 - 2 → 3`  |
| `*`      | Multiplication           | `2 * 3 → 6`  |
| `/`      | Division                 | `6 / 2 → 3`  |
| `%`      | Modulus (remainder)      | `5 % 2 → 1`  |
| `**`     | Exponent                 | `2 ** 3 → 8` |
| `++`     | Increment                | `a++`        |
| `--`     | Decrement                | `a--`        |

---

### 2️⃣ Comparison Operators

Used to compare values.

| Operator | Meaning                  | Example             |
| -------- | ------------------------ | ------------------- |
| `==`     | Equal (value only)       | `5 == "5" → true`   |
| `===`    | Equal (value + type)     | `5 === "5" → false` |
| `!=`     | Not equal                | `5 != "5" → false`  |
| `!==`    | Not equal (value + type) | `5 !== "5" → true`  |
| `>`      | Greater than             | `5 > 3 → true`      |
| `<`      | Less than                | `2 < 4 → true`      |
| `>=`     | Greater or equal         | `5 >= 5 → true`     |
| `<=`     | Less or equal            | `3 <= 5 → true`     |

---

### 3️⃣ Logical Operators

Used to combine conditions.

| Operator | Meaning | Example                 |    |       |   |               |
| -------- | ------- | ----------------------- | -- | ----- | - | ------------- |
| `&&`     | AND     | `true && false → false` |    |       |   |               |
| `        |         | `                       | OR | `true |   | false → true` |
| `!`      | NOT     | `!true → false`         |    |       |   |               |

---

### 4️⃣ Assignment Operators

Used to assign values to variables.

| Operator | Example  | Meaning     |
| -------- | -------- | ----------- |
| `=`      | `a = 5`  | Assign      |
| `+=`     | `a += 3` | `a = a + 3` |
| `-=`     | `a -= 2` | `a = a - 2` |
| `*=`     | `a *= 4` | `a = a * 4` |
| `/=`     | `a /= 2` | `a = a / 2` |
| `%=`     | `a %= 3` | `a = a % 3` |

---

### 5️⃣ Unary Operators

Operate on one value.

| Operator | Meaning           | Example |
| -------- | ----------------- | ------- |
| `++`     | Increment         | `a++`   |
| `--`     | Decrement         | `a--`   |
| `+`      | Convert to number | `+a`    |
| `-`      | Negate value      | `-a`    |

---

### 6️⃣ Ternary Operator

Short version of `if-else`.

```js
let age = 18;
let result = age >= 18 ? "Adult" : "Child";
```

| Part      | Meaning     |
| --------- | ----------- |
| Condition | `age >= 18` |
| `?`       | If true     |
| `:`       | If false    |

---

# 🧠 Examples (Practice)

### ✔️ Example 1 – AND (`&&`)

```js
let x = 10, y = 20;
console.log(x > 5 && y > 5); // true
```

### ✔️ Example 2 – OR (`||`)

```js
let isAdmin = true, isLoggedIn = false;
console.log(isAdmin || isLoggedIn); // true
```

### ✔️ Example 3 – Ternary

```js
let score = 78;
let grade = score >= 70 ? "C" : "D";
console.log(grade); // C
```

# 📘 JavaScript Functions – Complete Guide

This repository contains **JavaScript function concepts** explained with clear examples.
It covers **basic to advanced topics** commonly asked in interviews and used in real projects.

---

## 📌 What is a Function?

A **function** is a block of code that performs a specific task.

### Why use functions?
- Avoid code repetition
- Improve readability
- Make code modular & reusable

### Function Structure
- `function` keyword
- Function name
- Parameters
- Function body
- Return statement

---

## 🧩 Types of Functions

JavaScript supports multiple types of functions. Each type differs in behavior, syntax, and usage. Understanding these differences is important for writing clean, efficient, and maintainable code.

---

### 1️⃣ Function Declaration

A function declaration defines a named function using the `function` keyword.  
It is fully hoisted, meaning it can be used before it is defined in the code.

**Key Points:**
- Fully hoisted (name + body)
- Can be called before declaration
- Commonly used for core application logic

---

### 2️⃣ Function Expression

A function expression stores a function inside a variable.  
The function is created only when the execution reaches that line.

**Key Points:**
- Not hoisted
- Cannot be used before definition
- Useful when functions need to be assigned, passed, or conditionally created

---

### 3️⃣ Arrow Function (Fat Arrow Function)

Arrow functions provide a shorter syntax for writing functions.  
They do not have their own `this`, `arguments`, or `prototype`.

**Key Points:**
- Not hoisted
- Short and concise syntax
- Inherits `this` from surrounding scope
- Not suitable for object methods or constructors

---

### 4️⃣ Anonymous Function

An anonymous function is a function without a name.  
It is commonly used where the function is needed only once.

**Key Points:**
- No function name
- Used mainly as callbacks
- Cannot be reused directly

---

### 5️⃣ Named Function Expression

A named function expression is a function expression with a name.  
The name is accessible only inside the function itself.

**Key Points:**
- Helps with debugging
- Function name is not available in the outer scope
- Not hoisted

---

### 6️⃣ Immediately Invoked Function Expression (IIFE)

An IIFE is a function that executes immediately after it is defined.  
It is mainly used to create a private scope.

**Key Points:**
- Executes immediately
- Prevents global variable pollution
- Often used for initialization logic

---

### 7️⃣ First Class Function

JavaScript treats functions as first-class citizens.  
This means functions can be handled like any other variable.

**Key Points:**
- Can be assigned to variables
- Can be passed as arguments
- Can be returned from other functions

---

### 8️⃣ Higher Order Function (HOF)

A higher-order function is a function that works with other functions.

**Key Points:**
- Accepts one or more functions as parameters OR
- Returns a function as a result
- Forms the foundation of functional programming

---

### 9️⃣ Callback Function

A callback function is a function passed to another function and executed later.

**Key Points:**
- Enables asynchronous programming
- Commonly used in events, timers, and APIs
- Improves modularity and flexibility

---

### 🔟 Recursive Function

A recursive function is a function that calls itself to solve a problem.

**Key Points:**
- Must have a base condition
- Useful for repetitive and hierarchical problems
- Improves readability for certain algorithms

---

# Function Examples
## Example 1

### ❓ Difference between Function Declaration & Function Expression (Hoisting)

| Feature                    | Function Declaration | Function Expression |
| -------------------------- | -------------------- | ------------------- |
| Hoisting                   | ✅ Yes                | ❌ No             |
| Can call before definition | ✅ Yes                | ❌ No             |

### 💡 Why?

- Function declarations are fully hoisted (name + body).
- Function expressions are stored in variables, so they behave like variables.

## Example 2

### Predict Output
```js
greet();
function greet(){
    console.log("Hello!");
}
```
- Answer: ✅ Works
- Output: "Hello!"

### 💡 Why?
- Because greet is a function declaration, it is hoisted entirely, so it exists before the call. 

## Example 3
```js
function add(a, b){
    return a + b;
}
```
### How:

- Remove function keyword.
- Use =>.
- For single return, can omit {} and return.

## Example 4

## Parameters vs Arguments

```js
function welcome(name){
    console.log("Welcome " + name);
}
welcome("user");
```

### Answer:

- Parameter: name (placeholder in function definition)
- Argument: "user" (actual value passed when calling)

## Example 5

## How many parameters and args
```js
function temp(a, b, c){
    console.log(a, b, c);
}
temp(1, 2);
```

## Answer:

- Parameters: a, b, c → 3
- Arguments: 1, 2 → 2

## Example 6

## Default Parameters
```js
function temp_user(name = "Guest"){
    console.log("Hello " + name);
}
temp_user();
```

## Answer: ✅ Works
## Output:
- "Hello Guest"

## 💡 Why?
- name defaults to "Guest" if no argument is passed.

## Example 7

## Spread/Rest Operator ...
```js
function number(...numbers){
    console.log(numbers);
}
number(1, 2, 3, 4, 5);

```
## Output:
- [1, 2, 3, 4, 5]

## 💡 Why?
- ...numbers collects all arguments into an array.
- Useful when you don’t know how many arguments will be passed.


## Example 8
## Using Rest Parameters to Sum Numbers
```js
function calculateTotal(...scores){
    let total = 0;
    for(let i=0; i<=scores.length; i++){
        total += scores[i];
    }
    return total;
}
```
## Problem: ❌ Bug

## Example 9

## Early Return
```js
function checkAge(age){
    if(age < 18){
        console.log("Too Young");
    } else {
        console.log("Access Granted");
    }
}
```
## 💡 Why? :-

- Avoids unnecessary else block.
- Function exits immediately after condition.

## Example 10

## Return Value
```js
function f(){ return; }
```
## Answer
- undefined

## 💡 Why? :-
- If return has no value, the function returns undefined by default.

## Example 11
## Functions are first-class citizens
```js
const greet = function(name){ return "Hello " + name; }; // assigned to variable
console.log(greet("User")); 
```

## 💡 Why? :-
- Functions are treated like any other value in JS. This enables functional programming patterns.

## Example 12 
## Assign a function to a variable and call it
```js
let a = function(){console.log("Hello");}
a();
```

## Answer: ✅ Works
## Output :- 
- "Hello"

## 💡 Why? :-
- The function expression is stored in a.
- Calling a() executes the function.

## Example 13 
## Pass a function into another function
```js
function abcd(val){ val(); }
abcd(function(){ console.log("Hello"); });
```

## Answer: ✅ Works
## Output:-
- "Hello"

## 💡 Why? :-
- The function is passed as an argument.
- Inside abcd, val() executes the passed function.
- This is a classic example of callback functions.

## Example 14
## Higher-order function
```js
function greet(fn){ fn(); } // takes a function as argument
greet(() => console.log("Hello"));
```

## Answer:-

- A higher-order function (HOF) is a function that either:
- Takes one or more functions as arguments
- Returns a function

## 💡 Why? :-
- HOFs allow abstraction and functional patterns in JS.

## Example 16 
## Pure or Impure function?
```js
let total = 5;
function num(num){
    total += num;
}
num(3);
```

## Answer: 
- ❌ Impure function

## 💡 Why? :-

- A pure function should not have side effects.
- This function modifies the external variable total, which is a side effect.

## Example 17
## Convert to Pure Function

```js
function num(total, value){
    return total + value;
}
let total = 5;
total = num(total, 3); // 8
```
## 💡 Why? :-
- No external state is modified.
- Output depends only on input arguments, which makes it pure.

## Example 18
 ## Closure
 ```js
function outer(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
}
const counter = outer(); // closure is created here
counter(); // 1
counter(); // 2
```

## Answer:

- A closure is a function that “remembers” variables from its lexical scope, even after the outer function has finished executing.
- When created:
- When a function is defined inside another function and accesses the outer function’s variables.

## Example 19
## Predict Output
```js
function outer(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
}
const counter = outer();
counter();
counter();

```

## Answer: ✅ Works
## Output:
- 1
- 2


## 💡 Why? :-

- The inner function has access to count due to closure.
- count is preserved across multiple calls of counter.

## Example 20
## Convert to IIFE
## Convert
```js

function init(){
    console.log("Initialized");
}

```

## IIFE
```js
(function init(){
    console.log("Initialized");
})();

```

## 💡 Why? :-
- IIFE (Immediately Invoked Function Expression) runs immediately without being called separately.

## Example 21 
## Use of IIFE
```js
let fun = (function(){
    let score = 0; // private variable
    return {
        getScore: function(){ console.log(score); },
        setScore: function(val){ score = val; }
    }
})();
```
## Answer:

### Use: Encapsulation / data privacy

- score is private and only accessible through getScore / setScore
- Real-world use case:
- Maintaining module state without polluting global scope

## Example 22 
## Function expression hoisting
```js
temp_var();
var temp_var = function(){
    console.log("Hello");
}
```

## Answer: ❌ Error: temp_var is not a function

## 💡 Why? :-
- var temp_var is hoisted as undefined
- Trying to call undefined() results in an error

## Example 23
## Function declaration hoisting
```js
temp_var();
function temp_var(){
    console.log("Hello");
}
```
## Answer: ✅ Works
## Output:- 
- "Hello"

## 💡 Why? :-
- Function declarations are hoisted with their body, so they can be called before definition