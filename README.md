# 📘 JavaScript Variables & Data Types

This repository explains **JavaScript variable behavior and data type coercion**
with simple examples and clear explanations.  
Useful for **beginners**, **interview prep**, and **revision**.

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

## 📌 DATA TYPES & TYPE COERCION

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

