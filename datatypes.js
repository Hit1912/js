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

//BigInt:
//Chaak range of number , Number.Max_SAFE_INTEGER
let number = 9007199254740991;
number= number+6;
let num2 = 9007199254740991n;
num2 + 4n; 

//<-------- Non-Primitive Data Types -------->
//Type : Object, Array, Function
let temp_array = ["user1","user2","user3"]; 
let temp_obj ={ name:"test", age:25, phone_number:"1234567890"};
let profiles = [
{name:"test1", age:25, phone_number:"1234567890"},
{name:"test2", age:26, phone_number:"1234567891"},
{name:"test3", age:27, phone_number:"1234567892"}
];
function name (params){}

//Dyanamic Typing
let u_name = "username"; // string
u_name = 25; // number
u_name = {}; // object
//javascript ---> typescript(ts)

// typeof quirks
// typeof 12
// check type of variable use --> ex. typeof NaN, typeof
// null, 1 + "1", 1 == "1", 1 === "1"
// why typeof NaN --> number
// NaN is a failed number oprations that why that type is number
// ex. "hello" - 5 --> NaN

//Type Conversion
//"5" + 1 // + --> value Add and Coeration (Mix)
//"5" -1 

//Truthy and Falsy Values
//0, false , "", null, undefined, NaN ,document.all ,--> false
//ex. !!0 ---> check value is true or false
//ex. if(null){}, js convert it into false
//ex. if(-1){}, js convert it into true
//All ----> true

//Example 1
true + false

//Example 2