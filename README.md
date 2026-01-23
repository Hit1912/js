# 📘 JavaScript 

---

## 📌 VARIABLES IN JAVASCRIPT

### 🔹 Variable Hoisting & Scope

| Example | Code | Output | Explanation |
|------|------|--------|-------------|
| **1** | `console.log(nm); let nm = "name";` | ❌ ReferenceError | `let` variables are hoisted but not initialized. Accessing before declaration causes a **Temporal Dead Zone (TDZ)** error. |
| **2** | `console.log(b); var b = "username";` | `undefined` | `var` is hoisted and initialized with `undefined`. |
| **3** | `var x = 1; { var x = 2; } console.log(x);` | `2` | `var` is **not block-scoped**. Inner value overwrites outer value. |
| **4** | `let a = 10; { let a = 20; console.log(a); } console.log(a);` | `Inside: 20`<br>`Outside: 10` | `let` is **block-scoped**. Inner variable does not affect outer variable. |

---

## 📌 DATA TYPES 

### 🔹 JavaScript Type Conversion Examples

| Example | Expression | Output | Explanation |
|------|------------|--------|-------------|
| **1** | `true + false` | `1` | `true → 1`, `false → 0` |
| **2** | `null + 1` | `1` | `null` converts to `0` |
| **3** | `"12" + 12` | `"1212"` | `+` with a string performs **concatenation** |
| **4** | `!!undefined` | `false` | `undefined` is falsy |
| **5** | `"12" - 1` | `11` | `-` forces numeric conversion |
| **6** | `typeof NaN` | `"number"` | `NaN` is a failed numeric operation but still a number |

---

## 📌 UNDEFINED vs NULL

### 🔹 Comparison Table

| Feature | `undefined` | `null` |
|------|-------------|--------|
| Meaning | Variable declared but not assigned | Explicit empty value |
| Assigned by | JavaScript | Developer |
| Type | `"undefined"` | `"object"` (JavaScript bug) |
| Falsy | ✅ | ✅ |

# 📘 JavaScript Operators Guide

---

## 📌 Types of Operators in JavaScript

- Arithmetic Operators  
- Comparison Operators  
- Logical Operators  
- Assignment Operators  
- Unary Operators  
- Ternary Operator  

---

## ➕ Arithmetic Operators

| Operator | Description | Example |
|--------|------------|---------|
| `+` | Addition / Concatenation | `1 + 2 → 3` <br> `"user" + " Name" → "user Name"` |
| `-` | Subtraction | `5 - 2 → 3` |
| `*` | Multiplication | `2 * 3 → 6` |
| `/` | Division | `6 / 2 → 3` |
| `%` | Modulus (Remainder) | `5 % 2 → 1` |
| `**` | Exponentiation | `2 ** 3 → 8` |
| `++` | Increment | `a++` |
| `--` | Decrement | `a--` |

---

## 🔍 Comparison Operators

| Operator | Description | Example |
|--------|------------|---------|
| `==` | Equal (value only) | `5 == "5" → true` |
| `===` | Strict Equal (value + type) | `5 === "5" → false` |
| `!=` | Not Equal (value only) | `5 != "5" → false` |
| `!==` | Strict Not Equal | `5 !== "5" → true` |
| `>` | Greater Than | `5 > 3 → true` |
| `<` | Less Than | `2 < 4 → true` |
| `>=` | Greater or Equal | `5 >= 5 → true` |
| `<=` | Less or Equal | `3 <= 5 → true` |

---

## 🔗 Logical Operators

Used to combine multiple conditions.

| Operator | Description | Example |
|--------|------------|---------|
| `&&` | Logical AND | `true && false → false` |
| `||` | Logical OR | `true || false → true` |
| `!` | Logical NOT | `!true → false` |

## 📝 Assignment Operators

Used to assign values to variables.

| Operator | Example | Meaning |
|--------|--------|--------|
| `=` | `a = 5` | Assign |
| `+=` | `a += 3` | `a = a + 3` |
| `-=` | `a -= 2` | `a = a - 2` |
| `*=` | `a *= 4` | `a = a * 4` |
| `/=` | `a /= 2` | `a = a / 2` |
| `%=` | `a %= 3` | `a = a % 3` |

## 🔁 Unary Operators

Operate on a single operand.

| Operator | Description | Example |
|--------|------------|---------|
| `++` | Increment | `a++` |
| `--` | Decrement | `a--` |
| `+` | Convert to number | `+a` |
| `-` | Negate number | `-a` |

## ❓ Ternary Operator

Used as a short form of `if-else`.

| Part | Description | Example |
|-----|------------|---------|
| Condition | Expression to evaluate | `age >= 18` |
| `?` | If condition is true | `"Yes"` |
| `:` | If condition is false | `"No"` |


# Excercise
## Example 1 

let x = 10;
let y = 20;

if (x > 5 && y > 5) {
  console.log("Both are greater than 5");
} else {
  console.log("One or both are not greater than 5");
}

 Output:-
 ✔️  Both are greater than 5

## Example 2

let isAdmin = true;
let isLoggedIn = false;

if (isAdmin || isLoggedIn) {
  console.log("Access granted");
} else {
  console.log("Access Denied");
}

 Output:-
  ✔️ Access granted

## Example 3

let temp = 35;

if (!(temp > 30)) {
  console.log("Hot day");
} else {
  console.log("Pleasant day");
}

Output:-
❌ Pleasant day


## Example 4

if (temp > 30) {
  console.log("Hot day");
}

Output:-


## Example 5

let score = 78;

let grade = score >= 90 ? "A" :
            score >= 80 ? "B" :
            score >= 70 ? "C" : "D";

console.log("Grade:", grade);


Output:-
✔️ Grade: C

## Example 6

let points = 120;

let status = points >= 100 ? "Gold" :
             points >= 50 ? "Silver" : "Bronze";

console.log("Status:", status);

Output:-
✔️ Status: Gold

## Example 7

let loggedIn = true;
let hasToken = false;

let access = loggedIn && hasToken ? "Allow" : "Deny";
console.log("access:", access);

Output:-
✔️ access: Deny


## Example 8

let a = 5;
a++;
console.log(a);

Output:-
✔️ 6


## Example 9

let a = 8;
++a;
console.log(a);

Output:-
✔️ 9

## Example 10

let b = 4;
let c = b++;
console.log(b, c);

Output:-
✔️ 5 4


## Example 11

let b = 4;
let c = ++b;
console.log(b, c);

Output:-
✔️ 5 5


## Example 12

let m = 10;
console.log(m--);
console.log(m);

Output:-
✔️ 10
    9

## Example 13

let n = 5;
let result = n++ + ++n;
console.log(result);

Output:-
✔️ 12


## Example 14

let likes = 100;

function likePost() {
  result ++likes; // ❌ INVALID
}

console.log(likePost());
console.log(likes);


Output:-
❌ Uncaught SyntaxError

## Example 15

let count = 5;

if (count-- === 5) {
  console.log("Matched");
} else {
  console.log("Not Matched");
}

Output:-
✔️ Matched




