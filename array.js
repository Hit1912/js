// Array -- Hold multiple values at same time
// ["Mobile", "Laptop", "Tablet", 5000, 25, 588 ]
// ["a", "b", "Hello"]
// [2, 4, 5, 6]

// create
// variable_name = [values]
let arr = [1, 2, 3, 4];
// access
// position = [0 1 2 3]
// access
// array_name[position / index]
arr[0]
// modify
// array_name[position] = new value
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
arr[3] = 40;

// Array Methods
//push(), pop(), shift(), unshift() , splice(), slice(), reverse(), sort()

//1. push() -- add value at the end of array
let a = [1, 2, 3,4,5];
//variable || function.method() ---> Koi variable ke function in pachhal dot(.) kari ne lakho to te method kehvay
a.push(700); 
//Use Case ---> Enter New Product into existing product list
// arr = [1, 2, 3, 4];
// console.log(arr);
// arr[0] = 10;
// console.log(arr);
// arr[1] = 20;
// console.log(arr);
// arr[2] = 30;
// console.log(arr);
// arr[3] = 40;
// console.log(arr);
// a = ["mobile", "laptop", "mouse", "Keyboard"];
// console.log(a);
// a.push("cpu");  // ADD ITEM IUN ARRAY AT LAST POSITION
// console.log(a);
//a = ["mobile", "laptop", "mouse", "Keyboard"];

//2. pop() -- remove value from the end of array
// let b = [10, 20, 30, 40, 50];
// b.pop();

//Use Case :-
// let stack = ["HTML", "CSS", "JS"];
// let last = stack.pop();
// console.log(last);  // "JS"
// console.log(stack); // ["HTML", "CSS"]

// //3. shift() -- remove value from the beginning of array
// let c = [10 , 20, 30, 40, 50];
// c.shift();

//Use Case :-
// let c = [10, 20, 30, 40, 50];
// console.log("Before shift:", c);
// let removed = c.shift();
// console.log("Removed value:", removed);
// console.log("After shift:", c);


// //4. unshift() -- add value at the beginning of array
// let d = [10, 20, 30, 40, 50];
// d.unshift(5);

//Use Case :-
// let d = [10, 20, 30, 40, 50];
// console.log("Before unshift:", d);
// let newLength = d.unshift(5)
// console.log("New length:", newLength);
// console.log("After unshift:", d);

//5. splice() -- add / remove value from specific position
// let e = [10, 20, 30, 40, 50];
// e.splice(3,2);

// Use Case :-
// let cart = ["Mobile", "Laptop", "Headphones"];
// cart.splice(1, 1); // index 1 thi 1 item remove
// console.log(cart);
// // ["Mobile", "Headphones"]


//6. slice() -- extract a portion of array
// let f = [10, 20, 30, 40, 50];
// let newArray = f.slice(1,4);

// Use Case :-
// let products = ["Mobile", "Laptop", "Tablet", "Watch", "Camera"];
// let featured = products.slice(0, 3);
// console.log(featured);
// // ["Mobile", "Laptop", "Tablet"]
// console.log(products);
// // Original array same rahe


//7. reverse() -- reverse the array
//let g = [10, 20, 30, 40, 50];   
//g.reverse();
// Use Case :-
// let names = ["Alice", "Bob", "Charlie"];
// names.reverse();
// console.log(names);
// // ["Charlie", "Bob", "Alice"]

//8. sort() -- sort the array
//let h = [50, 20, 40, 10, 30];
//h.sort();
//let h = [10,20,30,40,50];
// Use Case :-
// let scores = [85, 42, 96, 73, 58];
// scores.sort();
// console.log(scores);
// // [42, 58, 73, 85, 96]


// 9. For Each loop
// For Each -- array ni darek value mate loop chalse 
let i = [10,35,40,68];

i.forEach((val) => {
    let new_val = val + 10;
    console.log(new_val);
});
[5, 58, 42, "hello"].forEach(val =>{
    let new_arr = val + 2;
    console.log(new_arr)
})

// 10. Map() Method:
// map tayre j use karvu jayre ek new array create karvo che
// fisrt map create a black array  -- only for understanding
let data = [10, 20, 50, 40, 15];
// same like a for each loop but map return a new array
let temp_data = data.map((val) => {
    if (val > 20) {
        return val;
    }
});

let marks = [10, 5, 30, 40, 50];
let final_marks = marks.map((val) =>{
 if(val == 5){
    return val + 4;
 }
   return val;
})

// 11. Filter
// Filter tyare use karvu ke jayre ek new array create karvo chhe with conditon
// in return true/false
// if true --> add into new array
// if else(false) --> not add into new array
let laptops_price = [15000, 20000, 3000, 65000, 99000, 45000];
let expensive_laptops  = laptops_price.filter((price)=> {
    if (price > 30000) return true;
});

// use case -- data ma thi specific data new array ma store karvo hot based on condtion
// ex . product ma thi specific price na product new array ma store karva hoy
// if  you want to show only expensive product on your homepage
// if you want to filter product based on price
let product_type = ["mobile", "leptop", "mouse", "keyborad"];
let filter_product_type = product_type.filter((type) =>{
    if (type == "tablet" || type == "mobile") return true
});  

// 12. reduce
// reduce kayre j use karvu ke jare ek single value calculate karvi hot from array
let total_price = [10, 68, 45, 58, 48];
 let final_price = total_price.reduce((z,val) =>{
    return z + val;
 }, 0); // intial value of z 
 // 0 + 10 =10
 // 10 + 68 = 78
 // 78 + 45 = 123
 console.log("final price:", final_price)
 // z --> je value function ma return thase te z ma store thase -- > z name change kari sako cho 
 // val --> array ni darek value

//  13. find
// find tyare j use karvu ke jare array mathi ek value find karvi hoy based on condition
// find() return kare chhe array no element --> callback no return value nahi
// never returns what you return inside it
// returns the array element itself -- not return array
// .find() stops at the first match
// It does not continue looping
let product = ["Laptop", "Mobile", "Tablet", "Desktop", "Smart Watch"];
let find_product = product.find( (item) => {
    console.log("can't find product"); // not working why??
    if (item === "Tablet") {
        return true;
    } else if (item === "Desktop") {
        return true;
    } else {
        return "Not Found";
    }
});

// find vs filter
// Real-life Scenario: Shopping Mall Security
// your are a security guard at a shopping mall
// chack the list of visitors

let people = ["John", "Sara", "Mike", "Anna", "David", "Sara"];

// find --> you are looking for the first personnamed "Sara" in the list and stop searching (Pehli var j male, bas e j and Anagal check j na kare)
let person = people.find((name) => name === "Sara");
console.log(person);

// filter --> you want to find all visitors named "Sara" in the list (all data check kare and list na end sudhi check kare)
let AllSara = people.filter((name) => name ===
"Sara");
console.log(AllSara);

// example 2: Book bus for travel

// 14. some()
// check kare chhe ke array ma koi pan ek item
// codition satisfy kare chhe ke nahi
// condition true aave tyare stop kare
// some() vs find() --> some() can't return you value
// its return true or false, find() return value of array
// give ans in true and false
let marks1 = [10, 20, 35, 80];
let any = marks1.some( (val) => {
    if (val > 85) return 12;
    // if (val < 85) return "need improvement";
});

// 15. every()
// check kare chhe ke array ma baddha j items
//condition satisfy kare chhe ke nahi
// true -- baha items condition match kare
// false -- ek pan fail thay to
let def =[20, 30, 40, 50];
let num = def.every(function(val){
  return val < 40;
})

// some(), find(), filter(), every()
// let products = ["Tablet", "Mobile", "Laptop", "Mobile"]
// method --> condition --> output
// .some() --> item === "Mobile" --> true
// .find() --> item === "Mobile" --> "Mobile"
// .filter() --> item === "Mobile" --> ["Mobile", "Mobile"]
// .every() --> item === "Mobile" --> false

// Destructuring oprator -- give value to variable
//(ex. we don't use every time arr1[1], just save it into variable let [ ,k] = arr1)
let arr4 = [1, 2, 3, 4, 5]
let [ , , k] = arr4; // --> destructuring
// let [j, , k] = arr;
console.log(k);
let user_data = ["text", "text@gmail.com", "Male","Surat"]

// spread oprator -- copy value from main array
let arr8 = [1, 2, 3, 4, 5, 6, 7];
// let arr4 = arr3 ; // - just give reference not
// copy value(when you change into arr4 that will be
// change arr3 too)
let arr9 = [...arr8];
// ... --> rest --> into function
// ... --> spred --> into Array and Object

// // Examples
// // ✅ Examples 1
// let tasks = ['Wake up', 'Brush teeth'];
// tasks.push('Buy milk');

// // ✅  Examples 2

// let notifications = ['Email', 'Message', 'Reminder'];
// notifications.pop();

// // ✅  Examples 3

// let customers = ['Customer1', 'Customer2', 'Customer3'];
// customers.shift();

// // ✅  Examples 4

// let playlist = ['Song B', 'Song C'];
// playlist.unshift('Song A');

// // ✅  Examples 5

// let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
// students.splice(1, 1, 'John', 'Sara');

// // ✅  Examples 6
// let colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];
// let primaryColors = colors.slice(0, 3);

// // ✅  Examples 7

// let digits = [1, 2, 3, 4, 5];
// digits.reverse();   

// // ✅  Examples 8

// let ages = [25, 18, 30, 22, 27];
// ages.sort();    

// // ✅  Examples 9

// let scores = [45, 12, 78, 34, 89];
// scores.sort((a, b) => a - b);

// // ✅  Examples 10

// let prices = [199, 49, 999, 299, 149];
// prices.sort((a, b) => a - b);

// // ✅  Examples 11

// let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
// let firstThree = products.slice(0, 3);

// // ✅  Examples 12

// let fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
// fruits.splice(2, 1, 'Mango', 'Pineapple');

// // ✅  Examples 13

// let steps = ['Step 1', 'Step 2', 'Step 3'];
// steps.reverse();
// steps.push('Final Step');

// // ✅  Examples 14

// let names = ['alice', 'Bob', 'charlie', 'David'];
// names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

// // ✅  Examples 15

// let movies = ['Avatar', 'Titanic', 'Gladiator'];

// movies.push('Inception');   // add
// movies.shift();             // remove first
// movies.sort();              // sort

// // ✅  Examples 16

// let nums1 = [1, 2, 3, 4];
// let removed = nums1.splice(1, 2);

// // ✅  Examples 17

// let nums2 = [10, 20, 30, 40];
// let result = nums2.slice(1, 3);

// // ✅  Examples 18

// let letters = ['a', 'b', 'c'];
// let reversedLetters = letters.reverse();

// // ✅  Examples 19

// let arr = ['x', 'y', 'z'];
// arr.splice(1, 0, 'new');

// // ✅  Examples 20

// let values = [100, 200, 300, 400, 500];
// let sliced = values.slice(-3, -1);

// // ✅  Examples 21

// let arr2 = [1, 2, 3];
// arr2.push(arr2.shift());


// 1. Double daily steps count

// Real life: Fitness app doubling step goal

const steps = [1000, 2000, 3000];

function doubleSteps(step) {
  return step * 2;
}

const newSteps = steps.map(doubleSteps);



// 2. Convert minutes to seconds

// Real life: Video duration calculation

const minutes = [1, 5, 10];

const seconds = minutes.map(function(min) {
  return min * 60;
});



// 3. Add ₹50 delivery charge to prices

// Real life: Food delivery app

const prices1 = [200, 350, 500];

const finalPrices = prices1.map(price => price + 50);



// 4. Convert exam marks to grades

// Real life: Result system

const marks2 = [35, 72, 88, 40];

function getGrade(mark) {
  return mark >= 40 ? 'Pass' : 'Fail';
}

const grades = marks.map(getGrade);



// 5. Capitalize names

// Real life: Display usernames properly

const names = ['rahul', 'neha', 'amit'];

const formattedNames = names.map(name =>
  name[0].toUpperCase() + name.slice(1)
);



// 6. Apply 10% discount

// Real life: Shopping sale

const prices = [500, 1000, 1500];

function applyDiscount(price) {
  return price - price * 0.10;
}

const discounted = prices.map(applyDiscount);



// 7. Add bonus points to scores based on condition

// Real life: Game scoring system

const scores = [45, 60, 85];

const finalScores = scores.map(score => {
  if (score >= 80) return score + 20;
  if (score >= 50) return score + 10;
  return score;
});



// 8. Convert temperatures with formula

//Real life: Weather app

const celsius = [0, 20, 30];

function toFahrenheit(temp) {
  return (temp * 9/5) + 32;
}

const fahrenheit = celsius.map(toFahrenheit);



// 9. Generate table of numbers

//Real life: Math learning app

const numbers = [1, 2, 3, 4];

const tableOfTwo = numbers.map(num => num * 2);



// 10. Combine map with string formatting

//Real life: SMS notification system

const balances = [500, 1200, 300];

const messages = balances.map(balance =>
  `Your balance is ₹${balance}`
);

// - JavaScript .filter() Method Example:

// ### 1. Get even numbers
// **Real life:** Find even roll numbers

const numbers1 = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers1.filter(num => num % 2 === 0);



// ### 2. Filter adults
// **Real life:** Allow only 3+ users

const ages = [2, 1, 10, 16, 5];
function isAdult(age) {
  return age >= 18;
}
const adults = ages.filter(isAdult);


// ### 3. Remove empty items
// **Real life:** Clean user input

const inputs = ['Hello', '', 'World', '', 'JS'];
const validInputs = inputs.filter(text => text !== '');



// ### 4. Filter passing marks
// **Real life:** Exam result system

const marks3 = [35, 72, 88, 40, 25];
const passedStudents = marks3.filter(mark => mark >= 40);


// ### 5. Get affordable prices
// **Real life:** Shopping app price filter

const prices3 = [199, 499, 999, 1499, 299];
const affordable = prices3.filter(price => price <= 500);

// ### 6. Filter long words
// **Real life:** Search keyword validation

const words = ['hi', 'hello', 'javascript', 'ok'];
function isLongWord(word) {
  return word.length > 3;
}
const longWords = words.filter(isLongWord);


// ### 7. Filter positive numbers
// **Real life:** Bank transaction validation

const transactions = [200, -100, 500, -50, 300];
const credits = transactions.filter(amount => amount > 0);


// ### 8. Filter numbers within a range
// **Real life:** Score selection

const scores1 = [45, 60, 85, 30, 90];
const selectedScores = scores1.filter(score => score >= 50 && score <= 90);


// ### 1. Total money in wallet
// **Real life:** Add all cash amounts

const money = [100, 200, 50];
const totalMoney = money.reduce((sum, amount) => sum + amount, 0);

// ### 2. Total steps walked in a week
// **Real life:** Fitness tracker

const steps1 = [3000, 5000, 4000, 6000];
function addSteps(total, step) {
  return total + step;
}
const weeklySteps = steps1.reduce(addSteps, 0);


// ### 3. Find total cart price
// **Real life:** Shopping bill

const prices4 = [499, 299, 199];
const totalPrice = prices4.reduce((total, price) => total + price, 0);


// ### 4. Find maximum score
// **Real life:** Highest exam mark

const marks4 = [45, 88, 67, 92];
const highest = marks4.reduce((max, mark) => {
  return mark > max ? mark : max;
}, marks[0]);

// ### 5. Count total characters
// **Real life:** Text length calculation

const words4 = ['Hi', 'Hello', 'JS'];
const totalChars = words4.reduce((count, word) => count + word.length, 0);

// ### 6. Combine words into a sentence
// **Real life:** Message builder

const words5 = ['Learning', 'JavaScript', 'is', 'fun'];
const sentence = words5.reduce((text, word) => text + ' ' + word);

// ### 7. Count passed students
// **Real life:** Result summary

const marks5 = [35, 72, 88, 40, 25];
const passCount = marks5.reduce((count, mark) => {
  return mark >= 40 ? count + 1 : count;
}, 0);


// ### 8. Calculate final balance
// **Real life:** Bank account calculation

const transactions1 = [1000, -200, -300, 500];
const finalBalance = transactions1.reduce((balance, amount) => balance + amount, 0);

// ### 10. Build comma-separated string
// **Real life:** Display values in UI

const items = ['Pen', 'Book', 'Pencil'];
const result = items.reduce((text, item) => text + ', ' + item);


// ### Q1. Shopping App – Discounted Total



// You are given a list of item prices.

// **Tasks:**



// 1. Keep only items costing more than 500

// 2. Apply a 10% discount to those items

// 3. Find the total amount to pay




const prices5 = [200, 800, 1200, 450, 700];


 const total = prices5

.filter(price => price > 500)

.map(price => price * 0.9)

.reduce((sum, price) => sum + price, 0);





// ### Q2. Fitness App – Total Active Minutes



// You are given daily activity minutes.

// **Tasks:**



// 1. Keep only days with more than 30 minutes activity

// 2. Convert minutes to calories (1 min = 5 calories)

// 3. Calculate total calories burned




const minutes6 = [20, 45, 60, 15, 90];


const totalCalories = minutes6

.filter(min => min > 30)

.map(min => min * 5)

.reduce((total, cal) => total + cal, 0);




// ### Q3. Exam System – Average of Passed Marks



// You are given marks of students.

// **Tasks:**



// 1. Keep only passing marks (>= 40)

// 2. Calculate the average of passed marks



const marks6 = [35, 72, 88, 40, 25, 90];


const passed = marks6.filter(mark => mark >= 40);

const average = passed.reduce((sum, mark) => sum + mark, 0) / passed.length;



// ### Q4. Salary System – Monthly Payout



// You are given daily wages.

// **Tasks:**



// 1. Keep wages greater than 500

// 2. Add a bonus of 100 to each

// 3. Calculate total payout




const wages = [300, 800, 450, 1000, 600];



const totalPayout = wages

.filter(wage => wage > 500)

.map(wage => wage + 100)

.reduce((total, wage) => total + wage, 0);



// ### Q5. Online Course – Completion Points



// You are given lesson completion percentages.

// **Tasks:**



// 1. Keep only completed lessons (>= 50%)

// 2. Convert percentage into points (percentage × 2)

// 3. Calculate total points




const progress = [20, 50, 75, 40, 100];


 const totalPoints = progress

.filter(p => p >= 50)

.map(p => p * 2)

.reduce((sum, p) => sum + p, 0);



// ### Q6. Bank Transactions – Final Balance



// You are given a list of transactions.

// **Tasks:**



// 1. Keep only credit transactions (positive values)

// 2. Add 2% interest to each credit

// 3. Calculate final credited amount




const transactions3 = [1000, -500, 2000, -300, 1500];


 const creditedAmount = transactions

.filter(amount => amount > 0)

.map(amount => amount * 1.02)

.reduce((total, amount) => total + amount, 0);




// ### Q7. Game App – Final Score



// You are given scores from multiple rounds.

// **Tasks:**



// 1. Keep scores greater than 50

// 2. Add bonus points (+10)

// 3. Calculate final score


const scores2 = [30, 60, 90, 45, 80];


const finalScore = scores

.filter(score => score > 50)

.map(score => score + 10)

.reduce((sum, score) => sum + score, 0);


// ### Q8. E-commerce – Total Taxed Amount



// You are given item prices.

// **Tasks:**



// 1. Keep items priced above 1000

// 2. Add 18% tax

// 3. Calculate final payable amount




const prices2 = [500, 1200, 3000, 800, 1500];


const finalAmount = prices

.filter(price => price > 1000)

.map(price => price * 1.18)

.reduce((sum, price) => sum + price, 0);



// ### Q9. Attendance System – Reward Points



// You are given daily attendance hours.



// **Tasks:**



// 1. Keep days with attendance >= 8 hours

// 2. Convert hours into points (1 hour = 10 points)

// 3. Find total points earned




const hours = [6, 8, 9, 7, 10];


// ans: 
const totalPoints1 = hours

// .filter(hour => hour >= 8)

// .map(hour => hour * 10)

// .reduce((sum, point) => sum + point, 0);




// ### Q10. Interview Brain Teaser ⭐



// You are given a list of numbers.

// **Tasks:**



// 1. Keep only even numbers

// 2. Square each number

// 3. Find the sum of squares

const numbers5 = [1, 2, 3, 4, 5, 6];

 const sumOfSquares = numbers5

.filter(num => num % 2 === 0)

.map(num => num * num)

.reduce((sum, num) => sum + num, 0);

/************************************************
MAP + FILTER + REDUCE PRACTICE (Q1–Q20)
************************************************/

/* =========================
Q1. Grocery Store – Total Cost
========================= */
const prices10 = [50, 120, 300, 80, 200];

const totalCost = prices1
  .filter(price => price > 100)
  .map(price => price * 1.05)
  .reduce((sum, price) => sum + price, 0);

console.log(totalCost);
// Answer: 651
// Why: Items >100 taxed 5% then summed


/* =========================
Q2. Fitness App – Weekly Calories
========================= */
const minutes1 = [10, 25, 40, 15, 60];

const totalCalories11 = minutes1
  .filter(min => min >= 20)
  .map(min => min * 4)
  .reduce((sum, cal) => sum + cal, 0);

console.log(totalCalories);
// Answer: 500
// Why: Valid workout days converted to calories


/* =========================
Q3. Exam Results – Total Passed Marks
========================= */
const marks10 = [35, 55, 80, 20, 45];

const totalPassedMarks = marks1
  .filter(mark => mark >= 40)
  .reduce((sum, mark) => sum + mark, 0);

console.log(totalPassedMarks);
// Answer: 180
// Why: Only passing marks added


/* =========================
Q4. Bank App – Total Credits
========================= */
const transactions10 = [500, -200, 1000, -300, 700];

const totalCredits = transactions1
  .filter(amount => amount > 0)
  .reduce((sum, amount) => sum + amount, 0);

console.log(totalCredits);
// Answer: 2200
// Why: Only positive transactions counted


/* =========================
Q5. Online Sale – Discounted Bill
========================= */
const prices20 = [800, 1500, 3000, 600, 1200];

const discountedBill = prices2
  .filter(price => price > 1000)
  .map(price => price * 0.85)
  .reduce((sum, price) => sum + price, 0);

console.log(discountedBill);
// Answer: 4845
// Why: Items above 1000 discounted 15%


/* =========================
Q6. Attendance – Reward Points
========================= */
const hours1 = [5, 7, 8, 6, 9];

const rewardPoints = hours1
  .filter(hour => hour >= 7)
  .map(hour => hour * 10)
  .reduce((sum, point) => sum + point, 0);

console.log(rewardPoints);
// Answer: 240
// Why: Only valid hours earn points


/* =========================
Q7. Delivery App – Total Distance
========================= */
const distances = [3, 6, 10, 4, 8];

const totalDistance = distances
  .filter(d => d > 5)
  .map(d => d + 1)
  .reduce((sum, d) => sum + d, 0);

console.log(totalDistance);
// Answer: 27
// Why: Long trips get 1km bonus


/* =========================
Q8. Salary System – Final Salary
========================= */
const salaries = [18000, 25000, 30000, 15000];

const totalSalary = salaries
  .filter(sal => sal > 20000)
  .map(sal => sal + 2000)
  .reduce((sum, sal) => sum + sal, 0);

console.log(totalSalary);
// Answer: 59000
// Why: Eligible salaries get bonus


/* =========================
Q9. Study App – Total Study Time
========================= */
const hours2 = [0.5, 1.5, 2, 0.75, 3];

const totalStudyMinutes = hours2
  .filter(hour => hour > 1)
  .map(hour => hour * 60)
  .reduce((sum, min) => sum + min, 0);

console.log(totalStudyMinutes);
// Answer: 390
// Why: Sessions >1hr converted to minutes


/* =========================
Q10. Electricity Usage – Monthly Bill
========================= */
const units = [80, 120, 200, 90, 150];

const electricityBill = units
  .filter(unit => unit > 100)
  .map(unit => unit * 6)
  .reduce((sum, cost) => sum + cost, 0);

console.log(electricityBill);
// Answer: 2820
// Why: Usage >100 charged per unit


/* =========================
Q11. Game Scores – Final Power Score
========================= */
const scores11 = [30, 50, 90, 20, 70];

const powerScore = scores1
  .filter(score => score > 40)
  .map(score => score * 2)
  .reduce((sum, score) => sum + score, 0);

console.log(powerScore);
// Answer: 420
// Why: Qualified scores doubled


/* =========================
Q12. Travel App – Total Fare
========================= */
const rides = [5, 12, 20, 8, 15];

const totalFare = rides
  .filter(km => km > 10)
  .map(km => km + 50)
  .reduce((sum, fare) => sum + fare, 0);

console.log(totalFare);
// Answer: 147
// Why: Long rides get service fee


/* =========================
Q13. Office Work – Productive Hours
========================= */
const hours3 = [4, 6, 8, 5, 9];

const productiveMinutes = hours3
  .filter(hour => hour >= 6)
  .map(hour => hour * 60)
  .reduce((sum, min) => sum + min, 0);

console.log(productiveMinutes);
// Answer: 1380
// Why: Productive hours converted to minutes


/* =========================
Q14. Shopping Cart – Reward Coins
========================= */
const purchases = [300, 800, 1200, 400];

const rewardCoins = purchases
  .filter(amount => amount > 500)
  .map(() => 10)
  .reduce((sum, coin) => sum + coin, 0);

console.log(rewardCoins);
// Answer: 20
// Why: Each qualifying purchase gives 10 coins


/* =========================
Q15. Fuel App – Total Fuel Cost
========================= */
const liters = [3, 6, 10, 4, 8];

const fuelCost = liters
  .filter(l => l > 5)
  .map(l => l * 105)
  .reduce((sum, cost) => sum + cost, 0);

console.log(fuelCost);
// Answer: 2520
// Why: Fuel above 5L charged per liter


/* =========================
Q16. Interview Classic – Sum of Cubes
========================= */
const numbers10 = [1, 2, 3, 4, 5];

const sumOfCubes = numbers1
  .filter(num => num % 2 !== 0)
  .map(num => num ** 3)
  .reduce((sum, num) => sum + num, 0);

console.log(sumOfCubes);
// Answer: 153
// Why: Odd numbers cubed and added


/* =========================
Q17. Performance Tracking – Bonus Points
========================= */
const scores20 = [10, 20, 30, 40, 50];
const avg = scores2.reduce((a, b) => a + b, 0) / scores2.length;

const bonusScore = scores2
  .filter(score => score > avg)
  .map(score => score + 5)
  .reduce((sum, score) => sum + score, 0);

console.log(bonusScore);
// Answer: 100
// Why: Above-average scores get bonus


/* =========================
Q18. Subscription App – Final Bill
========================= */
const plans = [199, 399, 599, 299];

const finalBill = plans
  .filter(plan => plan > 300)
  .map(plan => plan * 1.18)
  .reduce((sum, plan) => sum + plan, 0);

console.log(finalBill);
// Answer: 1177.82
// Why: Premium plans taxed 18%


/* =========================
Q19. Learning App – Achievement Score
========================= */
const scores3 = [45, 60, 70, 30, 80];

const achievementScore = scores3
  .filter(score => score >= 60)
  .map(score => score * score)
  .reduce((sum, score) => sum + score, 0);

console.log(achievementScore);
// Answer: 14900
// Why: Qualified scores squared and summed


/* =========================
Q20. Interview Finisher – Final Sum
========================= */
const numbers2 = [3, 6, 9, 10, 12];

const finalSum = numbers2
  .filter(num => num % 3 === 0)
  .map(num => num * 10)
  .reduce((sum, num) => sum + num, 0);

console.log(finalSum);
// Answer: 300
// Why: Numbers divisible by 3 multiplied and added
 