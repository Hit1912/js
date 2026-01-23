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
