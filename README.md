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

# 🧠 JavaScript Exercises –  Javascript Variable

Clean, conceptual and **interview‑ready explanations** for `var`, `let`, `const`, hoisting and block scope ✨

---

## 🔹 Example 1 – `let` Hoisting (TDZ)

```js
console.log(nm);
let nm = "name";
```

### ❌ Answer / Error:

```
ReferenceError: Cannot access 'nm' before initialization
```

### 🧠 Why:

* `let` variables **are hoisted**
* But they stay in **Temporal Dead Zone (TDZ)** until initialization
* Accessing before declaration causes an error

📌 `let` is hoisted but **not usable** before declaration.

---

## 🔹 Example 2 – `var` Hoisting

```js
console.log(b);
var b = "username";
```

### ✅ Answer:

```
undefined
```

### 🧠 Why:

* `var` variables are hoisted and **initialized with `undefined`**
* No TDZ for `var`

📌 This is why `var` is considered unsafe in modern JavaScript.

---

## 🔹 Example 3 – `var` Scope (Function Scope)

```js
var x = 1;
{
  var x = 2;
}
console.log(x);
```

### ✅ Answer:

```
2
```

### 🧠 Why:

* `var` does **NOT** have block scope
* Both declarations refer to the **same variable**

📌 Blocks `{}` don’t matter for `var`.

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

### ✅ Answer:

```
Inside: 20
Outside: 10
```

### 🧠 Why:

* `let` is **block scoped**
* Inner block creates a **new variable**
* Outer variable remains unchanged

📌 This prevents accidental overwrites.

---

## 🔹 Example 5 – `const` with Objects

```js
const person = { name: "demo" };

person.name = "user"; // ✅
person = {};           // ❌
```

### ❌ Error:

```
TypeError: Assignment to constant variable
```

### 🧠 Why:

* `const` **prevents reassignment**, not mutation
* Object reference is constant
* Object properties **can be changed**

📌 `const` protects the reference, not the data inside.

---

## 📊 Quick Summary Table

| Keyword | Hoisted | Block Scope | Reassign | TDZ |
| ------- | ------- | ----------- | -------- | --- |
| var     | ✅       | ❌           | ✅        | ❌   |
| let     | ✅       | ✅           | ✅        | ✅   |
| const   | ✅       | ✅           | ❌        | ✅   |

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

---
# 🔄 JavaScript Exercises –  DATA TYPES 

---

## 🔹 Example 1

```js
true + false
```

**Output:**
✔️ `1`

🧠 **Explanation:**

* `true` → `1`
* `false` → `0`
* `1 + 0 = 1`

---

## 🔹 Example 2

```js
null + 1
```

**Output:**
✔️ `1`

🧠 **Explanation:**

* `null` is converted to `0`
* `0 + 1 = 1`

---

## 🔹 Example 3

```js
"12" + 12
```

**Output:**
✔️ `"1212"`

🧠 **Explanation:**

* `+` with a string performs **string concatenation**
* Number `12` becomes string

---

## 🔹 Example 4

```js
!!undefined
```

**Output:**
✔️ `false`

🧠 **Explanation:**

* `undefined` is a **falsy** value
* `!undefined` → `true`
* `!!undefined` → `false`

📌 Double NOT (`!!`) is used to convert values into boolean.

---

## 🔹 Example 5

```js
"12" - 1
```

**Output:**
✔️ `11`

🧠 **Explanation:**

* `-` operator forces **numeric conversion**
* `"12"` → `12`
* `12 - 1 = 11`

---

## ❓ Why `typeof NaN === "number"`

```js
typeof NaN
```

**Output:**
✔️ `"number"`

🧠 **Explanation:**

* `NaN` means **Not a Valid Number**
* It is the result of a **failed numeric operation**
* JavaScript still treats it as a number type

### ❌ Incorrect Example

```js
"hello" + 5
```

**Output:**
✔️ `"hello5"`

📌 This is **NOT NaN** because `+` does string concatenation.

### ✅ Correct NaN Example

```js
"hello" - 5
```

**Output:**
✔️ `NaN`

---

## 🔄 Undefined vs Null

### 🔹 Undefined

```js
let x;
console.log(x);
```

**Output:**
✔️ `undefined`

🧠 Variable declared but **not assigned** any value.

---

### 🔹 Null

```js
let y = null;
console.log(y);
```

**Output:**
✔️ `null`

🧠 Value is **intentionally empty**.

---

## 📊 Quick Comparison

| Feature | undefined    | null                |
| ------- | ------------ | ------------------- |
| Meaning | Not assigned | Intentionally empty |
| Type    | undefined    | object (JS bug 😅)  |
| Falsy   | ✅            | ✅                   |

---

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


# 🧠 JavaScript Exercises – Operators & Conditions

A clean, beginner‑friendly and **beautifully structured** explanation of logical operators, ternary operators, and increment/decrement behavior in JavaScript ✨

---

## 🔹 Example 1 – Logical AND (`&&`)

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
✔️ Both are greater than 5

📌 *Both conditions are true, so the AND condition passes.*

---

## 🔹 Example 2 – Logical OR (`||`)

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
✔️ Access granted

📌 *Only one condition needs to be true for OR.*

---

## 🔹 Example 3 – Logical NOT (`!`) ❌ (Logic Issue)

```js
let temp = 35;

if (!(temp > 30)) {
  console.log("Hot day");
} else {
  console.log("Pleasant day");
}
```

**Output:**
❌ Pleasant day

⚠️ *The NOT operator reverses the condition, causing incorrect logic.*

---

## ✅ Example 4 – Correct Condition

```js
if (temp > 30) {
  console.log("Hot day");
}
```

**Output:**
✔️ Hot day

---

## 🔹 Example 5 – Nested Ternary Operator

```js
let score = 78;

let grade = score >= 90 ? "A" :
            score >= 80 ? "B" :
            score >= 70 ? "C" : "D";

console.log("Grade:", grade);
```

**Output:**
✔️ Grade: C

---

## 🔹 Example 6 – Status Using Ternary

```js
let points = 120;

let status = points >= 100 ? "Gold" :
             points >= 50 ? "Silver" : "Bronze";

console.log("Status:", status);
```

**Output:**
✔️ Status: Gold

---

## 🔹 Example 7 – AND with Ternary

```js
let loggedIn = true;
let hasToken = false;

let access = loggedIn && hasToken ? "Allow" : "Deny";
console.log("access:", access);
```

**Output:**
✔️ access: Deny

---

## 🔹 Example 8 – Post Increment (`a++`)

```js
let a = 5;
a++;
console.log(a);
```

**Output:**
✔️ 6

---

## 🔹 Example 9 – Pre Increment (`++a`)

```js
let a = 8;
++a;
console.log(a);
```

**Output:**
✔️ 9

---

## 🔹 Example 10 – Post Increment Assignment

```js
let b = 4;
let c = b++;
console.log(b, c);
```

**Output:**
✔️ 5 4

📌 *Value is assigned first, then incremented.*

---

## 🔹 Example 11 – Pre Increment Assignment

```js
let b = 4;
let c = ++b;
console.log(b, c);
```

**Output:**
✔️ 5 5

---

## 🔹 Example 12 – Post Decrement

```js
let m = 10;
console.log(m--);
console.log(m);
```

**Output:**
✔️ 10
✔️ 9

---

## 🔹 Example 13 – Mixed Increment

```js
let n = 5;
let result = n++ + ++n;
console.log(result);
```

**Output:**
✔️ 12

🧠 *Avoid this in real code – confusing but important for interviews.*

---

## ❌ Example 14 – Syntax Error

```js
let likes = 100;

function likePost() {
  result ++likes; // ❌ INVALID
}

console.log(likePost());
console.log(likes);
```

**Output:**
❌ Uncaught SyntaxError

✔️ **Correct Version:**

```js
function likePost() {
  likes++;
}
```

---

## 🔹 Example 15 – Post Decrement in Condition

```js
let count = 5;

if (count-- === 5) {
  console.log("Matched");
} else {
  console.log("Not Matched");
}
```

**Output:**
✔️ Matched

---
