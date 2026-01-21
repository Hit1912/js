//Data Types in JavaScript
//Two types data types
//1. Primitive data types
// Copy --> real value
let a = 5;
let b = a; 
// copy value of a into b

//Type  -->  String, Number, Boolean, Null, Undefined, Symbol, BigInt

//2. Non-primitive data types      (Reference data types [])
// Copy --> give reference of parent
let team_d = [1, 2, 3];
let team_e = team_d; // copy reference of team_d into e
//Type  -->  Object, Array, Function


// <-------- Primitive Data Types -------->
// Type : string, number, boolean, null, undefined, symbol, bigint
// String
// '' -single quotes
// "" -double quotes
// `` -backticks 
let d = "name";
d = "username";
d = `firstname`;

// Number
let e = 25;
e = 25.5;   
e = -25;

// Boolean
let f = true;
f = false;

// Null
//you give a value 
let g = null;

// Undefined
//you don't give a value , by default value 
let h; 

// Symbol
let u1 = Symbol("uid");
let u2 = Symbol("uid");
// chreck u1 = = u2
let obj = {uid : 1,name : "test",email : "test@example.com"};
let u3 = "uid" ;
let u4 = Symbol("uid");
//obj [u3] --> "001";