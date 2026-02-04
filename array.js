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
let g = [10, 20, 30, 40, 50];   
//g.reverse();
// Use Case :-
// let names = ["Alice", "Bob", "Charlie"];
// names.reverse();
// console.log(names);
// // ["Charlie", "Bob", "Alice"]

//8. sort() -- sort the array
let h = [50, 20, 40, 10, 30];
h.sort();
//let h = [10,20,30,40,50];
// Use Case :-
// let scores = [85, 42, 96, 73, 58];
// scores.sort();
// console.log(scores);
// // [42, 58, 73, 85, 96]


