// performance-optimizations:

// bebouncing --> jyare thame koi action(events like mouse hover,
// input, click etc) and you don't want to fire a event or perform
// action(ex. like you don't want to print on console every time when
// you enter something in your input field)

// you define a delay and when that delay come the function will
// be run(you got a reaction)
let btn = document.querySelector("button");
let body = document.querySelector("body");

function chagneColor(delay) {
  setTimeout(() => {
    body.style.backgroundColor = "black";
  }, delay);
}

btn.addEventListener("click", () => {
  chagneColor(3000);
});

let input = document.querySelector("input");

input.addEventListener("keyup", () => {
  chagneColor(3000);
});

function print(fnc, delay) {
  let timer;
  return function (...agrs) {
    clearTimeout(timer);
    timer = setTimeout(function () {
      fnc(...agrs);
    }, delay);
  };
}

input.addEventListener(
  "input",
  print(function () {
    console.log(input.value);
  }, 2000),
);
 