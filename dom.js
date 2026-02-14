// DOM -- Document Object Model
// All Website Code --> DOM
// Website Output --> DOM
// DOM -- HTML body

// DOM Tree Structure:
// Node --> Element (ex. h1, p, b, i), text (ex. lorem), comment

// DOM Manipulation - change body
// select element from html
// chagne text, change html, change css, change attribute, event listeners

// Selecting Elements
// getElementById
let a = document.getElementById("abc");

// getElementsByClassName
let b = document.getElementsByClassName("abc");

// getElementsByTagName
let temp_c = document.getElementsByTagName("h1");

// querySelector and querySelectorAll
// most used in project and used by company
let c = document.querySelector("h1") // -- only select first element that find in your html
let d = document.querySelectorAll("h1") // select all elements in you r html

// // Text/Content access: innerText, textContent, innerHTML
let e = document.querySelector("h1")
console.dir(e);
e.innerText = "first h1 tag";
// document.querySelector("h1").innerText = "first h1 tag"

// e.textContent = "h1 tag"

e.innerHTML = "<i>first h1 tag</i>"
// e.outerHTML = "<i>h1 with OuterHTML</i>"
// e.outerHTML = "h1 with outertext"

// outer vs inner
// innerText -- show text between tag -- ignore tag
// outerText -- show text between tag -- remove tag

// innerHTML -- show text between too tag -- not tag
// outerHTML -- show text with tag

