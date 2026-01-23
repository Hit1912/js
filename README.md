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

📌 The name *JavaScript* was chosen for marketing purposes and is **not directly related to Java**.

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
