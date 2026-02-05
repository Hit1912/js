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
