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

### Parameters vs Arguments

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

### How many parameters and args
```js
function temp(a, b, c){
    console.log(a, b, c);
}
temp(1, 2);
```

### Answer:

- Parameters: a, b, c → 3
- Arguments: 1, 2 → 2

## Example 6

### Default Parameters
```js
function temp_user(name = "Guest"){
    console.log("Hello " + name);
}
temp_user();
```

### Answer: ✅ Works
### Output:
- "Hello Guest"

### 💡 Why?
- name defaults to "Guest" if no argument is passed.

## Example 7

### Spread/Rest Operator ...
```js
function number(...numbers){
    console.log(numbers);
}
number(1, 2, 3, 4, 5);

```
### Output:
- [1, 2, 3, 4, 5]

### 💡 Why?
- ...numbers collects all arguments into an array.
- Useful when you don’t know how many arguments will be passed.


## Example 8
### Using Rest Parameters to Sum Numbers
```js
function calculateTotal(...scores){
    let total = 0;
    for(let i=0; i<=scores.length; i++){
        total += scores[i];
    }
    return total;
}
```
### Problem: ❌ Bug

## Example 9

### Early Return
```js
function checkAge(age){
    if(age < 18){
        console.log("Too Young");
    } else {
        console.log("Access Granted");
    }
}
```
### 💡 Why? :-

- Avoids unnecessary else block.
- Function exits immediately after condition.

## Example 10

### Return Value
```js
function f(){ return; }
```
### Answer
- undefined

### 💡 Why? :-
- If return has no value, the function returns undefined by default.

## Example 11
### Functions are first-class citizens
```js
const greet = function(name){ return "Hello " + name; }; // assigned to variable
console.log(greet("User")); 
```

### 💡 Why? :-
- Functions are treated like any other value in JS. This enables functional programming patterns.

## Example 12 
### Assign a function to a variable and call it
```js
let a = function(){console.log("Hello");}
a();
```

### Answer: ✅ Works
### Output :- 
- "Hello"

### 💡 Why? :-
- The function expression is stored in a.
- Calling a() executes the function.

## Example 13 
### Pass a function into another function
```js
function abcd(val){ val(); }
abcd(function(){ console.log("Hello"); });
```

### Answer: ✅ Works
### Output:-
- "Hello"

### 💡 Why? :-
- The function is passed as an argument.
- Inside abcd, val() executes the passed function.
- This is a classic example of callback functions.

## Example 14
### Higher-order function
```js
function greet(fn){ fn(); } // takes a function as argument
greet(() => console.log("Hello"));
```

### Answer:-

- A higher-order function (HOF) is a function that either:
- Takes one or more functions as arguments
- Returns a function

### 💡 Why? :-
- HOFs allow abstraction and functional patterns in JS.

## Example 16 
### Pure or Impure function?
```js
let total = 5;
function num(num){
    total += num;
}
num(3);
```

### Answer: 
- ❌ Impure function

### 💡 Why? :-

- A pure function should not have side effects.
- This function modifies the external variable total, which is a side effect.

## Example 17
### Convert to Pure Function

```js
function num(total, value){
    return total + value;
}
let total = 5;
total = num(total, 3); // 8
```
### 💡 Why? :-
- No external state is modified.
- Output depends only on input arguments, which makes it pure.

## Example 18
 ### Closure
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

### Answer:

- A closure is a function that “remembers” variables from its lexical scope, even after the outer function has finished executing.
- When created:
- When a function is defined inside another function and accesses the outer function’s variables.

## Example 19
### Predict Output
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

### Answer: ✅ Works
### Output:
- 1
- 2


### 💡 Why? :-

- The inner function has access to count due to closure.
- count is preserved across multiple calls of counter.

## Example 20
### Convert to IIFE
### Convert
```js

function init(){
    console.log("Initialized");
}

```

### IIFE
```js
(function init(){
    console.log("Initialized");
})();

```

## 💡 Why? :-
- IIFE (Immediately Invoked Function Expression) runs immediately without being called separately.

## Example 21 
### Use of IIFE
```js
let fun = (function(){
    let score = 0; // private variable
    return {
        getScore: function(){ console.log(score); },
        setScore: function(val){ score = val; }
    }
})();
```
### Answer:

### Use: Encapsulation / data privacy

- score is private and only accessible through getScore / setScore
- Real-world use case:
- Maintaining module state without polluting global scope

## Example 22 
### Function expression hoisting
```js
temp_var();
var temp_var = function(){
    console.log("Hello");
}
```

### Answer: ❌ Error: temp_var is not a function

### 💡 Why? :-
- var temp_var is hoisted as undefined
- Trying to call undefined() results in an error

## Example 23
### Function declaration hoisting
```js
temp_var();
function temp_var(){
    console.log("Hello");
}
```
### Answer: ✅ Works
### Output:- 
- "Hello"

### 💡 Why? :-
- Function declarations are hoisted with their body, so they can be called before definition

# 📘 JavaScript Arrays

> ✨ **Array = one variable, multiple values**
>
> Arrays are used to store **multiple values at the same time** in a single variable.

---

## 🔹 What is an Array?

An **array** is a collection of values stored in **ordered form**.  
Each value has an **index (position)** starting from `0`.

## 🔹 Creating an Array
### Syntax
```js
let variable_name = [values];
```

### 📌 Examples of Arrays
```js
["Mobile", "Laptop", "Tablet", 5000, 25, 588]
["a", "b", "Hello"]
[2, 4, 5, 6]
```
## 🔹 Accessing Array Values

- Array index starts from 0.
```js
// index positions: 0  1  2  3
let arr = [1, 2, 3, 4];
arr[0]; // 1
arr[1]; // 2
```

## 🔹 Modifying Array Values
```js
let arr = [1, 2, 3, 4];

arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
arr[3] = 40;

console.log(arr); // [10, 20, 30, 40]
```

# 🔹 Common Array Methods
```js
push(), pop(), shift(), unshift(), splice(), slice(), reverse(), sort()
```

### 📌 Note:
- When we use a function after a variable with dot (.), it is called a method.
- Example: array.push()

# 1️⃣ push() 
- Add value at the end
```js
let a = [1, 2, 3, 4, 5];
a.push(700);

console.log(a);
```
##  Output: [1, 2, 3, 4, 5, 700]
### ✅ Use Cases

- 🛒 **Add product to cart**  
  (New product is added at the end of the cart list)

- 📝 **Add new task to task list**  
  (Tasks are added in order)

- 📦 **Store user input data**  
  (Save form values step-by-step)

- ⏱️ **Implement Stack (LIFO)**  
  (Push new element on top of stack)
---

# 2️⃣ pop() 
- Remove value from the end

```js
let b = [10, 20, 30, 40, 50];
b.pop();

console.log(b);

```
##  Output: [10, 20, 30, 40]

### ✅ Use Cases

- 🗑️ **Remove last added item**  
  (Undo last action)

- ↩️ **Undo feature**  
  (Remove last change in editor)

- 🧹 **Remove last product from cart**  
  (Cancel recently added item)

- ⏱️ **Stack operations (LIFO)**  
  (Pop top element from stack)

---
# 3️⃣ shift() 
- Remove value from the beginning

```js
let c = [10, 20, 30, 40, 50];

console.log("Before shift:", c);

let removed = c.shift();

console.log("Removed value:", removed);
console.log("After shift:", c);
```
## Output :
- Before shift: [10, 20, 30, 40, 50]
- Removed value: 10
- After shift: [20, 30, 40, 50]

### ✅ Use Cases

- 🛒 **Remove first product from cart**  
  (When the first added item is removed)

- 📩 **Process queue data**  
  (Remove the first message/task after it is processed)

- 🎟️ **Ticket system**  
  (Serve the first customer in line)

- ⏱️ **FIFO (First In First Out) logic**  
  (Used in queues, job scheduling)

---

# 4️⃣ unshift() 
- Add value at the beginning

```js
let d = [10, 20, 30, 40, 50];

console.log("Before unshift:", d);

let newLength = d.unshift(5);

console.log("New length:", newLength);
console.log("After unshift:", d);

```
## Output :
- Before unshift: [10, 20, 30, 40, 50]
- New length: 6
- After unshift: [5, 10, 20, 30, 40, 50]

### ✅ Use Cases

- 🚨 **Add high-priority task**  
  (Insert urgent task at the top of task list)

- 📢 **Show latest notification first**  
  (New notification appears at the beginning)

- 🛒 **Add featured product at top**  
  (Highlight special item in product list)

- ⏱️ **Queue management**  
  (Add important job to be processed first)

---
# 5️⃣ splice() 
- Add / Remove value from a specific position

> `splice()` changes the **original array**.  
> It can **remove**, **add**, or **replace** values at a specific index.

---

### 🔹 Syntax

```js
array.splice(startIndex, deleteCount, newItem);

```

## 🔹 Example
```js
let e = [10, 20, 30, 40, 50];
e.splice(3, 2);

console.log(e);
```

###  Output: [10, 20, 30]

## ✅ Use Case – Remove product from cart
```js
let cart = ["Mobile", "Laptop", "Headphones"];

cart.splice(1, 1); // index 1 thi 1 item remove
console.log(cart);
```

### Output: ["Mobile", "Headphones"]

---

# 6️⃣ slice() 
- Extract a portion of an array
- slice() does NOT change the original array.
- It returns a new array.

## 🔹 Syntax
```js
array.slice(startIndex, endIndex);
```
## 🔹 Example
```js
let f = [10, 20, 30, 40, 50];
let newArray = f.slice(1, 4);

console.log(newArray);

```
### Output: [20, 30, 40]

## ✅ Use Case – Featured products list

```js
let products = ["Mobile", "Laptop", "Tablet", "Watch", "Camera"];

let featured = products.slice(0, 3);

console.log(featured);
// ["Mobile", "Laptop", "Tablet"]

console.log(products);
// Original array remains same
```
---

# 7️⃣ reverse() 
- Reverse the array

> `reverse()` **changes the original array**.  
> It reverses the order of elements.

---

## 🔹 Example

```js
let g = [10, 20, 30, 40, 50];

g.reverse();
console.log(g);
```
### Output: [50, 40, 30, 20, 10]

## ✅ Use Case – Reverse names list
```js
let names = ["Alice", "Bob", "Charlie"];

names.reverse();
console.log(names);
// ["Charlie", "Bob", "Alice"]
```

# 8️⃣ sort() 
- Sort the array
- sort() sorts values as strings by default
- It also changes the original array.

## 🔹 Example
```js
let h = [50, 20, 40, 10, 30];

h.sort();
console.log(h);
```

###  Output: [10, 20, 30, 40, 50]

## ✅ Use Case – Sort scores
```js
let scores = [85, 42, 96, 73, 58];

scores.sort();
console.log(scores);
// [42, 58, 73, 85, 96]
```
---
# 📊 JavaScript Array Methods – Quick Table

| Method | Purpose | Changes Original Array | Use Case |
|------|--------|------------------------|---------|
| `push()` | Add value at the end | ✅ Yes | Add product to cart |
| `pop()` | Remove value from the end | ✅ Yes | Undo last action |
| `shift()` | Remove value from start | ✅ Yes | Queue processing |
| `unshift()` | Add value at start | ✅ Yes | Add priority task |
| `splice()` | Add / Remove at specific index | ✅ Yes | Remove item from cart |
| `slice()` | Copy part of array | ❌ No | Featured products |
| `reverse()` | Reverse array order | ✅ Yes | Show latest first |
| `sort()` | Sort array | ✅ Yes | Rank, price sorting |

---

# Array Of JavaScript Example 

## ✅ Q1. push()
```js
let tasks = ['Wake up', 'Brush teeth'];
tasks.push('Buy milk');
```

### output: ['Wake up', 'Brush teeth', 'Buy milk']

### Why :- 
- push() adds an element at the end of the array and changes the original array.

## ✅ Q2. pop()
```js
let notifications = ['Email', 'Message', 'Reminder'];
notifications.pop();
```
###  output: ['Email', 'Message']

### Why :-
- pop() removes the last element and mutates the array.

## ✅ Q3. shift()
```js
let customers = ['Customer1', 'Customer2', 'Customer3'];
customers.shift();
```

###  output: ['Customer2', 'Customer3']

### Why :--
- shift() removes the first element from the array and modifies the original array.

## ✅ Q4. unshift()
```js
let playlist = ['Song B', 'Song C'];
playlist.unshift('Song A');
```

### output: ['Song A', 'Song B', 'Song C']
### Why :-
- unshift() adds an element at the beginning of the array and changes the original array.

## ✅ Q5. splice()
```js
let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
students.splice(1, 1, 'John', 'Sara');
```
### output: ['Mike', 'John', 'Sara', 'Emma', 'Sophia']

### Why :-
- splice(index, deleteCount, items...)
- Removes 'Alex'
- Inserts 'John' & 'Sara' at the same position

## ✅ Q6. splice()
```js
let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
menu.splice(1, 2);
console.log(menu);
```
### output: ['Burger', 'Salad']

### Why :-
- We want to modify the original menu by removing 2 items from index 1.
- Only splice() can remove multiple items from a specific position.

## ✅ Q7. slice()
```js
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let weekend = days.slice(5);
console.log(weekend);
```
### output: ['Saturday', 'Sunday']
### Why :-
- slice() creates a new array without changing the original.
- Weekend days are just a filtered view, not a modification.

## ✅ Q8. reverse()
```js
let levels = ['Easy', 'Medium', 'Hard'];
levels.reverse();
console.log(levels);
```
### output: ['Hard', 'Medium', 'Easy']
### Why :-
- reverse() changes the order in-place.
- Game levels are flipped to show hardest first.

## ✅ Q9. sort()
```js
let scores = [45, 12, 78, 34, 89];
scores.sort((a, b) => a - b);
console.log(scores);
```

### output:  [12, 34, 45, 78, 89]
### Why :-
- Default sort() treats numbers as strings, which is wrong.
- Using (a, b) => a - b ensures numeric ascending order.


## ✅ Q10. sort() with numbers
```js
let prices = [199, 49, 999, 299, 149];
prices.sort((a, b) => a - b);
console.log(prices);
```
### output: [49, 149, 199, 299, 999]

### Why :-
- Prices must be compared numerically, not alphabetically.
- Comparator function fixes this issue.

## ✅ Q11. slice() vs splice()
```js
let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
let firstThree = products.slice(0, 3);
console.log(firstThree);
```
### output: ['Laptop', 'Phone', 'Tablet']
```js
console.log(products);
```
### output: Original unchanged
### Why :-
- Requirement says “WITHOUT changing original array”.
- slice() is immutable, splice() is mutable → so slice() is correct.

## ✅ Q12. splice() complex
```js
let colors = ['Red', 'Green', 'Blue', 'Yellow'];
colors.splice(2, 1, 'Purple', 'Orange');
console.log(colors);
```
### output: ['Red', 'Green', 'Purple', 'Orange', 'Yellow']
### Why :-
- We need to:
- Remove "Blue"
- Add new colors at same position
- Only splice() supports remove + insert together.

## ✅ Q13. reverse() + push()
```js
let steps = ['Step 1', 'Step 2', 'Step 3'];
steps.reverse();
steps.push('Final Step');
console.log(steps);
```
### output:  ['Step 3', 'Step 2', 'Step 1', 'Final Step']
### Why :-
- reverse() flips order
- push() adds at end
- This combination is useful for workflow steps.


## ✅ Q14. sort() strings (ignore case)
```js
let names = ['alice', 'Bob', 'charlie', 'David'];
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(names);
```
### output:  ['alice', 'Bob', 'charlie', 'David']
### Why :-
- Default string sorting is case-sensitive ("Z" < "a").
- Using toLowerCase() ensures fair alphabetical order.

## ✅ Q15. Combination Question
```js
let movies = ['Avatar', 'Titanic', 'Gladiator'];
movies.push('Inception');
movies.shift();
movies.sort();
console.log(movies);
```
### output:  ['Gladiator', 'Inception', 'Titanic']
### Why :
- push() → add new movie
- shift() → remove first movie
- sort() → alphabetically arrange
- This mimics real watchlist management.

## ✅ Q16. splice() return value
```js
let nums1 = [1, 2, 3, 4];
let removedItems = nums1.splice(1, 2);
console.log(removedItems);
```
### output:  [2, 3]
```js
console.log(nums1);
```
### output:  [1, 4]
### Why :-
- splice() returns an array of removed elements,
- useful for:
- undo
- logs
- backups 

## ✅ Q17. slice() immutability check
```js
let nums2 = [10, 20, 30, 40];
let result = nums2.slice(1, 3);
console.log(result);
```
### output:  [20, 30]
```js
console.log(nums2);
```
### output:  Original array unchanged
### Why :-
- slice() does not touch the original array.
- This is important for:
- React state
- safe data handling

## ✅ Q19. reverse() mutation
```js
let letters = ['a', 'b', 'c'];
let reversedLetters = letters.reverse();
console.log(reversedLetters);
```
### output:  ['c', 'b', 'a']
```js
console.log(letters);
```
### output:  Same array (reverse mutates original)
### Why :-
- reverse() modifies the same array reference.
- Both variables point to the same array in memory.

## ✅ Q21. splice() edge case (deleteCount = 0)
```js
let arr = ['x', 'y', 'z'];
arr.splice(1, 0, 'new');
console.log(arr);
```
### output:  ['x', 'new', 'y', 'z']
### Why :-
- deleteCount = 0 means remove nothing.
- So splice() only inserts new elements.

## ✅ Q23. slice() negative index
```js
let values = [100, 200, 300, 400, 500];
let sliced = values.slice(-3, -1);
console.log(sliced);
```
### output:  [300, 400]
### Why :-
- Negative index starts counting from the end:
- -1 → last element
- -3 → third from last

## ✅ Q24. splice() vs slice() decision
- a) Update original array → splice()
- b) Keep original unchanged → slice()
### Why :-
- Need to update original → splice()
- Need copy only → slice()

## ✅ Q25. Chained methods (brain teaser)
```js
let arr2 = [1, 2, 3];
arr2.push(arr2.shift());
console.log(arr2);
```
### output:  [2, 3, 1]
### Why :-
- arr2.push(arr2.shift());
- shift() removes 1
- push(1) adds it at the end
- This rotates the array left by one position.

---
# 📘 JavaScript Array Methods & Operators

> Simple theory + real examples for strong fundamentals 🚀  
> This guide explains commonly used **JavaScript array methods** and **operators** with clear examples.

---
## 🔹 1. forEach() Loop

`forEach()` array ni **darek value mate loop chalave chhe**.  
⚠️ It does **not return a new array**.

```js
let i = [10, 35, 40, 68];

i.forEach((val) => {
    let new_val = val + 10;
    console.log(new_val);
});

```

## 🔹 2. map() Method

- map() tyare use karo jyare ek new array create karvo hoy.
- ➡️ Original array change nathi thato.
```js
let data = [10, 20, 50, 40, 15];

let temp_data = data.map((val) => {
    if (val > 20) {
        return val;
    }
});

```

## 🔹 3. filter() Method

- filter() condition based new array create kare chhe.
- Rules:
- return true → element add thase
- return false → element skip thase
```js
let laptops_price = [15000, 20000, 3000, 65000, 99000, 45000];

let expensive_laptops = laptops_price.filter((price) => {
    if (price > 30000) return true;
});
```

## 🔹 4. reduce() Method
- reduce() use karo jyare array mathi ek single value calculate karvi hoy.
```js
let total_price = [10, 68, 45, 58, 48];

let final_price = total_price.reduce((z, val) => {
    return z + val;
}, 0);

console.log("final price:", final_price);
```

## 🔹 5. find() Method

- find() array mathi pehli matching value return kare chhe.
- ➡️ Loop first match pachi stop thai jay chhe.

```js
let product = ["Laptop", "Mobile", "Tablet", "Desktop", "Smart Watch"];

let find_product = product.find((item) => {
    if (item === "Tablet") {
        return true;
    }
});

```

## 🔹 find() vs filter()
```js
let people = ["John", "Sara", "Mike", "Anna", "David", "Sara"];

let person = people.find((name) => name === "Sara");
console.log(person); // Sara

let allSara = people.filter((name) => name === "Sara");
console.log(allSara); // ["Sara", "Sara"]
```

## 🔹 6. some() Method

- some() check kare chhe ke array ma koi pan ek item condition satisfy kare chhe ke nahi.
- ➡️ Return: true / false
```js
let marks1 = [10, 20, 35, 80];

let any = marks1.some((val) => {
    if (val > 85) return true;
});

```

## 🔹 7. every() Method
- every() check kare chhe ke baddha j items condition satisfy kare chhe ke nahi.
```js

let def = [20, 30, 40, 50];

let num = def.every(function(val) {
    return val < 40;
});

```
## 🔹 some() vs find() vs filter() vs every()

| Method   | Condition         | Output               |
| -------- | ----------------- | -------------------- |
| some()   | item === "Mobile" | true                 |
| find()   | item === "Mobile" | "Mobile"             |
| filter() | item === "Mobile" | ["Mobile", "Mobile"] |
| every()  | item === "Mobile" | false                |


## 🔹 8. Destructuring Operator

- Array mathi value direct variable ma store karva.
```js

let arr4 = [1, 2, 3, 4, 5];
let [ , , k] = arr4;

console.log(k); // 3
```

## 9. Spread Operator

- Array ni copy create kare chhe (reference nahi).

```js

let arr8 = [1, 2, 3, 4, 5, 6, 7];

let arr9 = [...arr8];

```

## 📊 JavaScript Array Methods Comparison Table

| Method | Return Type | New Array | Stops Early | Use Case |
|------|------------|-----------|-------------|----------|
| forEach() | ❌ nothing | ❌ No | ❌ No | Just loop through array |
| map() | ✅ Array | ✅ Yes | ❌ No | Transform each element |
| filter() | ✅ Array | ✅ Yes | ❌ No | Get data based on condition |
| reduce() | ✅ Single value | ❌ No | ❌ No | Sum / total / calculation |
| find() | ✅ Element | ❌ No | ✅ Yes | Find first matching item |
| some() | ✅ Boolean | ❌ No | ✅ Yes | Check if **any one** matches |
| every() | ✅ Boolean | ❌ No | ❌ No | Check if **all** match |

---

# JavaScript Interview Questions – Beginner to Advanced

---

# 🟢 BEGINNER LEVEL (1–20)

### Q1. Variables

`var` is function-scoped and can be redeclared.
`let` is block-scoped and can be reassigned.
`const` is block-scoped and cannot be reassigned.

---

### Q2. Data Types

Primitive types:

* String
* Number
* Boolean
* Undefined
* Null
* BigInt
* Symbol

---

### Q3. Type Checking

Use `typeof` operator.

---

### Q4. Operators

`==` compares values with type conversion.
`===` compares value and type (strict equality).

---

### Q5. Arithmetic Operators

Output: `20`
(5 * 2 = 10, then 10 + 10 = 20)

---

### Q6. String Concatenation

Output: `'52'` (Number 2 is converted to string)

---

### Q7. Boolean Logic

Output: `false`

---

### Q8. Functions

A function is a reusable block of code used to perform a task.

---

### Q9. Function Call

Returns: `5`

---

### Q10. Arrays

`let arr = [1, 2, 3];`

---

### Q11. Array Access

Output: `20`

---

### Q12. Objects

An object stores data in key–value pairs.

---

### Q13. Object Access

Output: `20`

---

### Q14. Control Flow

`if` statement runs code when a condition is true.

---

### Q15. Condition Check

Output: `Yes`

---

### Q16. Loops

A loop repeats code multiple times.

---

### Q17. for Loop

Output:
0
1
2

---

### Q18. while Loop

Use when number of iterations is unknown and depends on condition.

---

### Q19. Increment Operator

Output: `6`

---

### Q20. Comments

Single-line: `// comment`
Multi-line: `/* comment */`

---

# 🟡 INTERMEDIATE LEVEL (21–35)

### Q21. Scope

Block scope means variables declared with `let` and `const` are only accessible inside `{}`.

---

### Q22. Hoisting

Hoisting moves variable and function declarations to the top of their scope before execution.

---

### Q23. Undefined vs Null

`undefined` means variable declared but not assigned.
`null` means intentionally empty value.

---

### Q24. Truthy & Falsy

Falsy values:

* false
* 0
* -0
* ""
* null
* undefined
* NaN

---

### Q25. Functions vs Arrow Functions

Arrow functions:

* Shorter syntax
* No own `this`
* Cannot be used as constructors

---

### Q26. Parameters vs Arguments

Parameters are variables in function definition.
Arguments are actual values passed.

Example:
`function add(a, b)` → parameters
`add(2, 3)` → arguments

---

### Q27. Return Keyword

If nothing is returned, function returns `undefined`.

---

### Q28. Array Methods

`push()` adds to end.
`pop()` removes from end.

---

### Q29. Loop vs Array Methods

Use loops when you need more control or complex conditions.

---

### Q30. Object Iteration

Using `for...in` loop or `Object.keys()`.

---

### Q31. Break & Continue

`break` stops loop.
`continue` skips current iteration.

---

### Q32. Comparison Operators

`0 == false` → true
`0 === false` → false

---

### Q33. Ternary Operator

`status = age >= 18 ? 'adult' : status;`

---

### Q34. Array Destructuring

Extract values from array into variables.

Example:
`const [a, b] = [1, 2];`

---

### Q35. Spread Operator

Expands array elements.

Example:
`[...arr]` creates copy.

---

# 🔵 ADVANCED LEVEL (36–50)

### Q36. Closures

A closure is a function that remembers variables from outer scope.

Example:

```
function outer() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
```

---

### Q37. Execution Context

Environment where JavaScript code runs (Global and Function context).

---

### Q38. Call Stack

A stack that keeps track of function calls.

---

### Q39. Pass by Value vs Reference

Primitive types pass by value.
Objects/arrays pass by reference.

---

### Q40. Shallow vs Deep Copy

Shallow copy copies reference.
Deep copy creates completely new copy.

---

### Q41. Higher-Order Functions

A function that takes another function as argument or returns one.

---

### Q42. Callback Functions

A function passed into another function.

---

### Q43. Immutability

Prevents direct data modification, improves predictability and debugging.

---

### Q44. Event Loop

Handles asynchronous operations by moving tasks from callback queue to call stack.

---

### Q45. Synchronous vs Asynchronous

Synchronous runs line by line.
Asynchronous runs without blocking execution.

---

### Q46. forEach vs map

`forEach()` does not return new array.
`map()` returns new transformed array.

---

### Q47. == Interview Trap ⭐

Output: `false` (Different references)

---

### Q48. typeof Interview Trap ⭐

Output: `"object"`

---

### Q49. NaN Check

Use `Number.isNaN(value)`.

---

### Q50. FINAL INTERVIEW QUESTION ⭐⭐⭐

1. Code is parsed.
2. Execution context is created.
3. Variables are hoisted.
4. Code runs line by line.
5. Functions go into call stack.
6. Asynchronous tasks go to Web APIs.
7. Event loop pushes completed tasks back to call stack.

---

# JavaScript Practice – Answers, Errors, How & Why

> Concise explanations with code + reasoning.

---

# 🟢 VARIABLES & DATA TYPES (1–15)

```js
let a = "a";
let b = "10";
let c = 10;
let d;
let e = null;
```

### 1

```js
console.log(a == "a");  // true
console.log(a === "a"); // true
```

Both value & type same → both true.

### 2

```js
console.log(b == c);  // true  ("10" → 10 coercion)
console.log(b === c); // false (string !== number)
```

`==` allows coercion, `===` doesn’t.

### 3

```js
b = Number(b);
console.log(b === c); // true
```

Converted string to number.

### 4

```js
console.log(d === undefined);
```

Direct strict comparison.

### 5

```js
if (d == null) console.log("null or undefined");
```

`== null` safely checks both.

### 6

```js
console.log(null == undefined);  // true
console.log(null === undefined); // false
```

Loose equality treats them equal.

### 7

```js
console.log(c + b);        // "1010" (string concat)
console.log(c + Number(b)); // 20 (fixed)
```

String causes coercion.

### 8

```js
let result = c / "a";
console.log(Number.isNaN(result)); // true
```

Invalid math → NaN.

### 9

```js
Number(b);
+b;
```

Two number conversions.

### 10

```js
String(c);
c.toString();
```

Two string conversions.

### 11

```js
Boolean(value);
!!value;
```

Double NOT converts to boolean.

### 12

```js
const x = 5;
// x = 10; ❌ Error: Assignment to constant variable
```

`const` prevents reassignment.

### 13

```js
let p = 5;
let q = p;
q = 10;
console.log(p); // 5
```

Primitives copy by value.

### 14

```js
console.log(0 == false); // true
```

Looks false, but coercion makes it true.

### 15

```js
// Buggy
if (b == 10)
// Fix
if (b === 10)
```

Use strict equality.

---

# 🟢 OPERATORS (16–30)

### 16

```js
(n & 1) === 0
```

Bitwise check for even.

### 17

```js
a > b ? a : b;
```

Ternary max.

### 18

```js
function calc(a,b,op){
 if(op==="+") return a+b;
 if(op==="-") return a-b;
 if(op==="*") return a*b;
 if(op==="/") return a/b;
}
```

### 19

```js
let name = input || "Guest";
```

OR gives default.

### 20

```js
age>=18 ? "Adult" : "Minor";
```

### 21

```js
score>90?"A":score>75?"B":"C";
```

Nested ternary.

### 22

```js
isLoggedIn && showDashboard();
```

Runs only if true.

### 23

```js
console.log(false && "Hello"); // false
console.log(true || "Hi");     // true
```

Short-circuiting.

### 24

```js
console.log("5" == 5);  // true
console.log("5" === 5); // false
```

### 25

```js
let val = e ?? "Default";
```

Only null/undefined replaced.

### 26

```js
0 || 10; // 10
0 ?? 10; // 0
```

`||` treats falsy, `??` doesn’t.

### 27

```js
[...arr1, ...arr2];
```

Merge arrays.

### 28

```js
function sum(...nums){}
```

Rest collects args.

### 29

```js
const copy = [...arr];
```

Shallow copy.

### 30

```js
console.log(2 + 3 * 4);   // 14
console.log((2 + 3) * 4); // 20
```

Precedence matters.

---

# 🟡 CONTROL FLOW (31–45)

### 31

```js
if(score>=90) grade="A";
else if(score>=75) grade="B";
else grade="C";
```

### 32

```js
switch(true){
 case score>=90: grade="A"; break;
}
```

### 33

Missing `break` executes next case.

### 34

Nested login validation checks user + password.

### 35

```js
if(user && pass) login();
```

Clean condition.

### 36

```js
if(a>0 && b>0){}
```

### 37

Use `&&`, `||`, `!`.

### 38

Menu using `switch(option)`.

### 39

Without break → fall-through.

### 40

Switch logic rewritten using `if-else`.

### 41

```js
if(num>=1 && num<=10){}
```

### 42

```js
if(!valid) return;
```

Early exit.

### 43

Switch for red/yellow/green.

### 44

Real rule → condition statements.

### 45

Check null, empty, negative first.

---

# 🟡 LOOPS (46–60)

### 46

```js
for(let i=1;i<=100;i++){}
```

### 47

```js
for(let i=2;i<=100;i+=2){}
```

### 48

Use `break`.

### 49

Use `continue`.

### 50

Accumulator variable.

### 51

Reverse using `%` and `/`.

### 52

Count divisions by 10.

### 53

Multiply from 1→n.

### 54

Iterative Fibonacci using two vars.

### 55

Use label or flag.

### 56

Skip iteration with `continue`.

### 57

Nested loops.

### 58

Infinite loop when condition never false → fix condition.

### 59

`for` known count, `while` unknown.

### 60

Use `map`, `filter`, `reduce`.

---

# 🟡 FUNCTIONS (61–80)

### 61

```js
function sum(a,b){return a+b;}
```

### 62

```js
const sum=(a,b)=>a+b;
```

### 63

```js
function greet(name="Guest"){}
```

### 64

Return inner function.

### 65

Pass function as argument.

### 66

Callback executed inside function.

### 67

Pure: no side effects.

### 68

Side effect: modifies outer variable.

### 69

Recursive factorial with base case.

### 70

Loop version of factorial.

### 71

Rest parameter.

### 72

Higher-order: takes/returns function.

### 73

Closure remembers outer variable.

### 74

Counter using closure.

### 75

Currying: `f(a)(b)`.

### 76

Memoization using cache object.

### 77

Guard clause for invalid input.

### 78

Arrow has no own `this`.

### 79

Use flag to run once.

### 80

Move repeated code into function.

---

# 🔵 ARRAYS (81–101)

### 81

`arr.reduce((a,b)=>a+b,0)`

### 82

Track max in loop.

### 83

`[...new Set(arr)]`

### 84

Sort then pick second.

### 85

`arr.filter(n=>n>0)`

### 86

`arr.map(n=>n*n)`

### 87

`arr.reduce(c=>c+1,0)`

### 88

Chain methods.

### 89

`arr.find(cond)`

### 90

`arr.some(cond)`

### 91

`arr.every(cond)`

### 92

`const [first,...rest]=arr`

### 93

`[...a,...b]`

### 94

`JSON.parse(JSON.stringify(arr))` (simple deep copy)

### 95

Manual bubble sort.

### 96

Use slice + concat.

### 97

`arr.flat(Infinity)`

### 98

Custom map using loop + push.

### 99

Custom filter using condition.

### 100

Custom reduce using accumulator.

### 101 

Example:

```js
arr
 .filter(n=>n>0)
 .map(n=>n*2)
 .reduce((a,b)=>a+b,0);
```

Combine constraints step-by-step.

---
