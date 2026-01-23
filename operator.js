/* Operator */
// Arithmetic Operators , Comparison Operators , Logical Operators , Assignment Operators ,Unary Operators ,Ternary Operators

//Arithmetic Operators
//+,-,*,/,%,++,--
// + ---> Addition , Concatenation
//Example 
//1+2 --->Add
//"user" + " " + "Name" ---> Concat
// 5+ "5" --> concat, 5+5 ---> Add

// -
//Example. 2-1
// /,*
//Example 2*3, 6/2
// % --> Modulus (Remainder) (sheshfal) (reminder)
//Example 5%2 --> 1 (5/2 = 2 and remainder is 1)
//Example 12%4 --> 0 (12/4 = 3 and remainder is 0)
//example 9%2 --> 1 (9/2 = 4 and remainder is 1)
// ** (Exponentiation) (square)
//Example 2**3 --> 8 (2*2*2 = 8)


/* Comparison Operators */
//==,===,!=,!==,>,<,>=,<=
// == (Equal to) (value)
//Example 5=="5" , 12==13  --> (Don't check type,only check value ,not strict comparison)

// === (Strict Equal to) (value and type)
//Example 5==="5" , 12===13  --> (Check value and type , strict comparison)

// != (Not Equal to) (value)
//Example 5!="5" , 12!=13  --> (Don't check type,only check value ,not strict comparison)

// !== (Strict Not Equal to) (value and type)
//Example 5!=="5" , 12!==13  --> (Check value and type , strict comparison)

// > (Greater than)
//Example 5>3 , 2>4
// < (Less than)
//Example 5<3 , 2<4
// >= (Greater than or Equal to)
//Example 5>=3 , 2>=4
// <= (Less than or Equal to)
//Example 5<=3 , 2<=4

/* Logical Operators */
// && (Logical AND) , || (Logical OR) , ! (Logical NOT)

// && (Logical AND)
//Example true && true --> true     
//Example true && false --> false   
//Example false && false --> false
// 2. 12<10 && 14<15 As a example --> false

// || (Logical OR)
//Example true || true --> true
//Example true || false --> true   
//Example false || false --> false  

// ! (Logical NOT)
//Example !true --> false   
//Example !false --> true


/* Assignment Operators */
//=,+=,-=,*=,/=,%=
// = (Assign)
//Example a=5  (assign 5 to a)

// += (Add and Assign)
//Example a+=3  (a=a+3)

// -= (Subtract and Assign)
//Example a-=2  (a=a-2)

// *= (Multiply and Assign)
//Example a*=4  (a=a*4)

// /= (Divide and Assign)
//Example a/=2  (a=a/2)

// %= (Modulus and Assign)
//Example a%=3  (a=a%3)

/* Unary Operators */
// ++ (Increment) , -- (Decrement) , + (Unary plus) , - (Unary negation)
// ++ (Increment)
//Example a++  (Increase a by 1)

// -- (Decrement)
//Example a--  (Decrease a by 1)

// + (Unary plus)
//Example +a  (Convert a to number)

// - (Unary negation)
//Example -a  (Convert a to number and negate it)

/* Ternary Operator */
// condition ? expression1 : expression2
//Example 
// let age = 18;
// let canVote = (age >= 18) ? "Yes" : "No";
// console.log(canVote); // Output: Yes

//In this example, the condition age >= 18 is evaluated. If it's true, the expression "Yes" is returned; otherwise, "No" is returned.


/* ---> Excercise  <--- */
//Example 1: Write a program to check if a number is even or odd using the modulus operator.

// let x = 10;
// let y = 20;

// if (x > 5 && y > 5) {
//   console.log("Both are greater than 5");
// } else {
//   console.log("One or both are not greater than 5");
// }
