# 📘 JavaScript

---

## 🕰️ History of JavaScript

**JavaScript** is a high-level, lightweight, interpreted programming language used mainly for **web development**.

### 🔹 Origin

- JavaScript was created in **1995**
- Developed by **Brendan Eich**
- Created at **Netscape Communications**
- Written in just **10 days**
- Initially named **Mocha**, then **LiveScript**
- Finally renamed to **JavaScript**

📌 The name _JavaScript_ was chosen for marketing purposes and is **not directly related to Java**.

---

### 🔹 Standardization (ECMAScript)

- JavaScript was standardized as **ECMAScript (ES)** by **ECMA International**
- First standard: **ES1 (1997)**

#### Major Versions:

- **ES5 (2009)** – Stable & widely supported
- **ES6 / ES2015** – Major update (`let`, `const`, arrow functions, classes)
- **ES2016+** – Regular yearly updates

---

### 🔹 JavaScript Today

Today, JavaScript is used for:

- 🌐 Frontend (React, Angular, Vue)
- 🖥️ Backend (Node.js)
- 📱 Mobile Apps (React Native)
- 🧠 AI & Data (TensorFlow.js)
- 🎮 Games & Desktop Apps

---

### ⭐ Why JavaScript is Popular

- Runs in all browsers
- Easy to learn
- Huge ecosystem
- Strong community support
- Full-stack capability

---

✨ JavaScript is one of the **most important and widely used programming languages** in modern software development.

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

- `var` → old, function‑scoped (avoid ❌)
- `let` → modern, block‑scoped ✅
- `const` → block‑scoped, cannot be reassigned ✅

---

## 🔍 What is Hoisting?

**Hoisting** is JavaScript’s behavior of moving **variable declarations** to the top of their scope **before code execution**.

📌 Important:

- Only **declarations** are hoisted
- **Initializations are NOT hoisted**

---

## ⏳ Temporal Dead Zone (TDZ)

The **Temporal Dead Zone** is the time between:

- entering a scope
- and the variable being declared with `let` or `const`

Accessing a variable in TDZ causes an error ❌

```js
console.log(a); // ❌ TDZ error
let a = 10;
```

---

## 📐 Scope in JavaScript

**Scope** determines where a variable can be accessed.

### Types of Scope:

- **Global Scope** – accessible everywhere
- **Function Scope** – `var`
- **Block Scope** – `let`, `const`

---

## 🔹 Variable Hoisting & Scope (At a Glance)

| Example | Code                                                          | Output                        | Explanation                                                                                   |
| ------- | ------------------------------------------------------------- | ----------------------------- | --------------------------------------------------------------------------------------------- |
| **1**   | `console.log(nm); let nm = "name";`                           | ❌ ReferenceError             | `let` variables are hoisted but not initialized. Accessing before declaration causes **TDZ**. |
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

- `let` variables **are hoisted**
- They remain in **Temporal Dead Zone (TDZ)**
- Accessing before declaration throws an error

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

- `var` is hoisted and initialized with `undefined`
- No TDZ exists for `var`

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

- `var` ignores block `{}`
- Both declarations refer to the **same variable**

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

- `let` is **block scoped**
- Inner block creates a new variable
- Outer variable remains unchanged

---

## 🔹 Example 5 – `const` with Objects

```js
const person = { name: "demo" };

person.name = "user"; // ✅ allowed
person = {}; // ❌ not allowed
```

### ❌ Error

```
TypeError: Assignment to constant variable
```

### 🧠 Why

- `const` prevents **reassignment**, not mutation
- Object reference is fixed
- Object properties can change

📌 `const` protects the reference, not the object itself.

---

## 📊 Quick Summary Table

| Keyword | Hoisted | Block Scope | Reassign | TDZ |
| ------- | ------- | ----------- | -------- | --- |
| `var`   | ✅      | ❌          | ✅       | ❌  |
| `let`   | ✅      | ✅          | ✅       | ✅  |
| `const` | ✅      | ✅          | ❌       | ✅  |

---

## 🌟 Best Practices (Exam + Interview)

- ✅ Use `const` by default
- ✏️ Use `let` when reassignment is needed
- 🚫 Avoid `var`
- 🧠 Understand TDZ clearly (very common interview question)

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

- `let` → can be reassigned
- `const` → cannot be reassigned

---

## 🔹 Variable Declaration vs Initialization

```js
var d; // declaration only
var team_d = 12; // declaration + initialization
```

📌 **Declaration** creates the variable.
📌 **Initialization** assigns a value.

---

## 🔁 Reassignment & Redeclaration

```js
var temp = 12;
temp = "dungrani"; // ✅ reassignment
var temp = "again"; // ✅ redeclaration (allowed with var)
```

⚠️ With `let` and `const`:

- ❌ Cannot be redeclared in the same scope
- ❌ `const` must be initialized
- ❌ `const` cannot be reassigned

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

- `var` is **function-scoped**
- Blocks `{}` do NOT create scope

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

- `let` is **block-scoped**
- Each `{}` creates a new variable

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
| var     | ✅      | `undefined`       |
| let     | ✅      | ❌ ReferenceError |
| const   | ✅      | ❌ ReferenceError |

---

## 🌟 Best Practices

- ✅ Always use `const` by default
- ✏️ Use `let` when value changes
- 🚫 Avoid `var`
- ❌ Never create variables without declaration

✨ These practical rules are **very important for exams & interviews**.

---

# 📌 DATA TYPES IN JAVASCRIPT

JavaScript is a **dynamically typed language**, which means variable types are decided at **runtime**, not at declaration time.

```js
let value = "hello"; // string
value = 25; // number
value = true; // boolean
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
let name2 = "admin";
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
| Falsy       | ✅           | ✅                   |

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
  email: "test@example.com",
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
(false, 0, "", null, undefined, NaN, document.all);
```

### ✅ Truthy Values

Everything else 😄

```js
!!0; // false
!!"hi"; // true
```

---

## 📊 Quick Summary

| Category      | Stored As | Copied By |
| ------------- | --------- | --------- |
| Primitive     | Value     | Value     |
| Non‑Primitive | Reference | Reference |

---

# 📘 JavaScript Exercises – Data Type

## 🔹 Example 1: `true + false`

```js
true + false;
```

**Output:** `1`

**Why:**

- `true` is converted to `1`
- `false` is converted to `0`
- `1 + 0 = 1`

---

## 🔹 Example 2: `null + 1`

```js
null + 1;
```

**Output:** `1`

**Why:**

- `null` is converted to `0`
- `0 + 1 = 1`

---

## 🔹 Example 3: `"12" + 12`

```js
"12" + 12;
```

**Output:** `"1212"`

**Why:**

- `+` with a string performs **string concatenation**
- Number `12` is converted to string

---

## 🔹 Example 4: `!!undefined`

```js
!!undefined;
```

**Output:** `false`

**Why:**

- `undefined` is a falsy value
- `!undefined` → `true`
- `!!undefined` → `false`

---

## 🔹 Example 5: `"12" - 1`

```js
"12" - 1;
```

**Output:** `11`

**Why:**

- `-` operator forces **number conversion**
- `"12"` → `12`
- `12 - 1 = 11`

---

## 🔹 Why is `typeof NaN` → `number`?

```js
typeof NaN;
```

**Output:** `"number"`

**Why:**

- `NaN` means **Not a Number**
- It is the result of an **invalid numeric operation**
- JavaScript still treats it as a number type

```js
"hello" * 5; // NaN
```

---

## 🔹 Undefined vs Null

### Example:

```js
let x;
console.log(x);

let y = null;
console.log(y);
```

**Output:**

```txt
undefined
null
```

### Difference Table:

| Feature | undefined                          | null                    |
| ------- | ---------------------------------- | ----------------------- |
| Meaning | Variable declared but not assigned | Intentional empty value |
| Type    | undefined                          | object                  |
| Set by  | JavaScript                         | Developer               |

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

| Operator | Meaning | Example                 |     |       |     |               |
| -------- | ------- | ----------------------- | --- | ----- | --- | ------------- |
| `&&`     | AND     | `true && false → false` |     |       |     |               |
| `        |         | `                       | OR  | `true |     | false → true` |
| `!`      | NOT     | `!true → false`         |     |       |     |               |

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
let x = 10,
  y = 20;
console.log(x > 5 && y > 5); // true
```

### ✔️ Example 2 – OR (`||`)

```js
let isAdmin = true,
  isLoggedIn = false;
console.log(isAdmin || isLoggedIn); // true
```

### ✔️ Example 3 – Ternary

```js
let score = 78;
let grade = score >= 70 ? "C" : "D";
console.log(grade); // C
```

---

## 📘 JavaScript Exercises – Operator

---

## ✅ Example 1 – AND (`&&`)

```js
let x = 10;
let y = 20;

if (x > 5 && y > 5) {
  console.log("Both are greater than 5");
} else {
  console.log("One or both are not greater than 5");
}
```

**Output:**

```
Both are greater than 5
```

**Why:** Both conditions are `true`, so `&&` returns `true`.

---

## ✅ Example 2 – OR (`||`)

```js
let isAdmin = true;
let isLoggedIn = false;

if (isAdmin || isLoggedIn) {
  console.log("Access granted");
} else {
  console.log("Access Denied");
}
```

**Output:**

```
Access granted
```

**Why:** `||` returns `true` if **any one** condition is true.

---

## ✅ Example 3 – NOT (`!`)

```js
let temp = 35;

if (!(temp > 30)) {
  console.log("Hot day");
} else {
  console.log("Pleasant day");
}
```

**Output:**

```
Pleasant day
```

**Why:** `temp > 30` is `true`, but `!true` becomes `false`.

---

## ✅ Example 4 – Truthy / Falsy

```js
let a = 0;

if (a) {
  console.log("Truthy value");
} else {
  console.log("Falsy value");
}
```

**Output:**

```
Falsy value
```

**Why:** `0` is a **falsy** value in JavaScript.

---

## ✅ Example 5 – Nested Ternary

```js
let score = 78;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";
console.log("Grade:", grade);
```

**Output:**

```
Grade: C
```

**Why:** `78 >= 70` is true, so grade is `C`.

---

## ✅ Example 6 – Ternary (Multiple Conditions)

```js
let points = 120;
let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";
console.log("Status:", status);
```

**Output:**

```
Status: Gold
```

**Why:** First condition matches (`>= 100`).

---

## ✅ Example 7 – AND with Ternary

```js
let loggedIn = true;
let hasToken = false;
let access = loggedIn && hasToken ? "Allow" : "Deny";
console.log("access:", access);
```

**Output:**

```
access: Deny
```

**Why:** Both must be true for `&&`, but `hasToken` is false.

---

## ✅ Example 8 – Post Increment (`a++`)

```js
let a = 5;
a++;
console.log(a);
```

**Output:**

```
6
```

**Why:** `a++` increases value **after** use.

---

## ✅ Example 9 – Pre Increment (`++a`)

```js
let a = 8;
++a;
console.log(a);
```

**Output:**

```
9
```

**Why:** `++a` increases value **before** use.

---

## ✅ Example 10 – Post Increment Assignment

```js
let b = 4;
let c = b++;
console.log(b, c);
```

**Output:**

```
5 4
```

**Why:** `c` gets old value, then `b` increments.

---

## ✅ Example 11 – Pre Increment Assignment

```js
let b = 4;
let c = ++b;
console.log(b, c);
```

**Output:**

```
5 5
```

**Why:** `b` increments first, then assigned to `c`.

---

## ✅ Example 12 – Post Decrement

```js
let m = 10;
console.log(m--);
console.log(m);
```

**Output:**

```
10
9
```

**Why:** First prints, then decrements.

---

## ✅ Example 13 – Mixed Increment

```js
let n = 5;
let result = n++ + ++n;
console.log(result);
```

**Output:**

```
12
```

**Why:** `5 + 7 = 12` (post then pre increment).

---

## ❌ Example 14 – Syntax Error

```js
let likes = 100;

function likePost(){
  result ++likes; // ❌ INVALID
}
```

**Error:**

```
SyntaxError
```

**Why:** Invalid operator usage. Should be `likes++`.

---

## ✅ Example 15 – Post Decrement in Condition

```js
let count = 5;
if (count-- === 5) {
  console.log("Matched");
} else {
  console.log("Not Matched");
}
```

**Output:**

```
Matched
```

**Why:** Comparison happens first, then decrement.

---

# 📘 JavaScript Control Flow Statements

Control flow statements decide **which code runs and when** based on conditions. They help your program make decisions.

---

## ✅ 1. if Statement

Runs code **only when condition is true**.

```js
if (12 < 13) {
  console.log(true);
}
```

**Why:** Condition is `true`, so block runs.

```js
if (15 < 13) {
  console.log(true);
}
```

**Output:** ❌ No output (condition is false)

---

## ✅ Truthy & Falsy in if

```js
if (!12) {
  console.log("number");
}
```

**Why:** `12` is truthy → `!12` is `false`

```js
if (!0) {
  console.log("number");
}
```

**Output:** `number`

**Why:** `0` is falsy → `!0` is `true`

---

## ✅ 2. if...else Statement

```js
if (12 > 13) {
  console.log("true");
} else {
  console.log("false");
}
```

**Output:** `false`

---

## ✅ 3. if...else if...else

Used for **multiple conditions**.

```js
let loggedin = false;
let admin = false;

if (loggedin && admin) {
  console.log("Welcome Admin");
} else if (loggedin) {
  console.log("Welcome User");
} else {
  console.log("Please log in");
}
```

**Output:** `Please log in`

---

## 🎯 Mini Projects Using if-else

### ✔ Grade System

```js
let marks = 78;

if (marks >= 90) console.log("Grade A");
else if (marks >= 75) console.log("Grade B");
else if (marks >= 60) console.log("Grade C");
else console.log("Fail");
```

**Output:** `Grade B`

---

### ✔ Even / Odd Checker

```js
let num = 15;

if (num % 2 === 0) console.log("Even Number");
else console.log("Odd Number");
```

**Output:** `Odd Number`

---

### ✔ Voting Eligibility

```js
let age = 17;

if (age >= 18) console.log("Eligible for voting");
else console.log("Not eligible for voting");
```

---

## ✅ 4. switch Statement

Used when **one value is matched with many cases**.

```js
switch ("BOGO") {
  case "First50":
    console.log("You got 50% off");
    break;
  case "BOGO":
    console.log("Buy One Get One Free");
    break;
  default:
    console.log("Invalid Promo Code");
}
```

**Output:** `Buy One Get One Free`

---

## ⚠️ Important: Missing break

```js
let x = 2;

switch (x) {
  case 2:
    console.log("Two");
  case 3:
    console.log("Three");
}
```

**Output:**

```
Two
Three
```

**Why:** No `break` → execution falls through.

---

## ✅ switch(true) Pattern

Used for **range conditions**.

```js
function getGrade(score) {
  switch (true) {
    case score >= 90:
      return "A+";
    case score >= 80:
      return "A";
    case score >= 70:
      return "B";
    case score >= 60:
      return "C";
    default:
      return "Fail";
  }
}

console.log(getGrade(85));
```

**Output:** `A`

---

## ✅ 5. Early Return Pattern

Improves **readability & performance**.

```js
function score(value) {
  if (value > 90) return "Value > 90";
  if (value > 80) return "Value > 80";
  if (value > 70) return "Value > 70";
  return "Value ≤ 70";
}

console.log(score(85));
```

---

## 🧠 Summary

| Statement      | Use Case            |
| -------------- | ------------------- |
| `if`           | Single condition    |
| `if-else`      | Two conditions      |
| `else if`      | Multiple conditions |
| `switch`       | Fixed values        |
| `switch(true)` | Ranges              |
| Early return   | Clean logic         |

---

## 📘 JavaScript Exercises – Controll-Flow

---

## Example 1

```js
let x = 2;
switch(x){
   case 2:
      console.log("Two");
   case 3:
      console.log("Three");
}
```

**Output:**

```
Two
Three
```

**Why:**

* There is **no `break`** after `case 2`.
* So execution **falls through** to the next case.

---

## Example 2

**Write a function `getGrade(score)` that:**

* Takes a student's score as input (0 to 100)
* Returns grade based on the logic below

| Score Range   | Grade         |
| ------------- | ------------- |
| 90 - 100      | A+            |
| 80 - 89       | A             |
| 70 - 79       | B             |
| 60 - 69       | C             |
| 33 - 59       | D             |
| 0 - 32        | Fail          |
| Anything else | Invalid Marks |

```js
function getGrade(score) {
  switch (true) {
    case score >= 90 && score <= 100:
      return "A+";
    case score >= 80 && score <= 89:
      return "A";
    case score >= 70 && score <= 79:
      return "B";
    case score >= 60 && score <= 69:
      return "C";
    case score >= 33 && score <= 59:
      return "D";
    case score >= 0 && score <= 32:
      return "Fail";
    default:
      return "Invalid Marks";
  }
}

console.log(getGrade(85));
```

**Output:**

```
A
```

**Why:**

* `switch(true)` is used for **range conditions**.
* It checks each condition until it finds the first `true`.

---

## Example 3 (Rock-Paper-Scissors)

```js
function game(player1, player2) {
  switch (player1) {
    case "rock":
      switch (player2) {
        case "scissors":
          return "rock";
        case "paper":
          return "paper";
        default:
          return "Invalid Input";
      }

    case "paper":
      switch (player2) {
        case "rock":
          return "paper";
        case "scissors":
          return "scissors";
        default:
          return "Invalid Input";
      }

    case "scissors":
      switch (player2) {
        case "paper":
          return "scissors";
        case "rock":
          return "rock";
        default:
          return "Invalid Input";
      }

    default:
      return "Invalid Input";
  }
}

console.log(game("rock", "scissors"));
console.log(game("paper", "rock"));
console.log(game("scissors", "paper"));
```

**Output:**

```
rock
paper
scissors
```

**Why:**

* Each player value is matched using `switch`.
* Nested switch checks the opponent’s move.
* Winner is returned based on the rules.

---

# 📘 JavaScript Loops

Loops are used to run the same block of code multiple times.  
They help to repeat tasks easily.

---

## ✅ Types of Loops in JavaScript

| Loop Type    | Use Case                                    |
|-------------|---------------------------------------------|
| `for`       | When you know the number of iterations      |
| `while`     | When the condition is checked before the loop |
| `do...while`| When the loop must run at least once        |
| `for...in`  | Loop through object keys                    |
| `for...of`  | Loop through array values                   |

---

## 🔹 1) `for` Loop Examples
```js
### Example 1 — Print 1 to 10

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

**Output:**

1
2
3
4
5
6
7
8
9
10
```
---

### Example 2 — Print 10 to 1
```js
for (let k = 10; k >= 1; k--) {
  console.log(k);
}

**Output:**

10
9
8
7
6
5
4
3
2
1
```
---

### Example 3 — Print "Hello World" 10 times
```js
for (let j = 10; j >= 1; j--) {
  console.log("Hello World");
}

**Output:**

Hello World
Hello World
Hello World
Hello World
Hello World
Hello World
Hello World
Hello World
Hello World
Hello World

```
---

### Example 5 — Print odd numbers 1 to 20
```js
for (let n = 1; n <= 20; n += 2) {
  console.log(n);
}

**Output:**

1
3
5
7
9
11
13
15
17
19
```

# 🔹 2) while Loop Examples

## Example 6 — while loop 1 to 10

let d = 1;
while (d <= 10) {
  console.log("while loop :", d);
  d++;
}

**Output:**

while loop : 1
while loop : 2
while loop : 3
while loop : 4
while loop : 5
while loop : 6
while loop : 7
while loop : 8
while loop : 9
while loop : 10

## Example 7 — 50 to 20

let e = 50;
while (e >= 20) {
  console.log("Make It True Loops E:", e);
  e--;
}


**Output:**

Make It True Loops E: 50
Make It True Loops E: 49
Make It True Loops E: 48
...
Make It True Loops E: 20

## Example 8 — 60 to 20

let f = 60;
while (f >= 20) {
  console.log("Make It True Loop F :", f);
  f--;
}

**Output:**

Make It True Loop F : 60
Make It True Loop F : 59
Make It True Loop F : 58
...
Make It True Loop F : 20

## Example 9 — 30 to 20

let c = 30;
while (c >= 20) {
  console.log("Make It True Loop C :", c);
  c--;
}


**Output:**

Make It True Loop C : 30
Make It True Loop C : 29
...
Make It True Loop C : 20


## Example 10 — 20 to 30

let h = 20;
while (h <= 30) {
  console.log("Make It True Loop H :", h);
  h++;
}

**Output:**

Make It True Loop H : 20
Make It True Loop H : 21
...
Make It True Loop H : 30

## Example 11 — 50 to 20

let g = 50;
while (g >= 20) {
  console.log("Make It True Loop G :", g);
  g--;
}

**Output:**

Make It True Loop G : 50
Make It True Loop G : 49
...
Make It True Loop G : 20

## Example 12 — 20 to 30

let i = 20;
while (i <= 30) {
  console.log("Make It True Loop I :", i);
  i++;
}

**Output:**

Make It True Loop I : 20
Make It True Loop I : 21
...
Make It True Loop I : 30

## Example 13 — 1 to 10 

let j = 1;
while (j <= 10) {
  console.log("Make It True Loop J :", j);
  j++;
}

**Output:**

Make It True Loop J : 1
Make It True Loop J : 2
...
Make It True Loop J : 10

## Example 14 — 50 to 20

let k = 50;
while (k >= 20) {
  console.log("Make It True Loop K :", k);
  k--;
}

**Output:**

Make It True Loop K : 50
Make It True Loop K : 49
...
Make It True Loop K : 20

## Example 15 — 50 to 20

let l = 50;
while (l >= 20) {
  console.log("Make It True Loop L :", l);
  l--;
}

**Output:**

Make It True Loop L : 50
Make It True Loop L : 49
...
Make It True Loop L : 20

