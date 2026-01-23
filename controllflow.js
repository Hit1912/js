// control Flow Statements in JavaScript

//  If...else Statement (if, else if, else,else-if else)

// If (condition) {} ---> Conditon is true hoy to {} code run
// if (12 < 13)
// {
//     console.log(true);
// }

// if (15 < 13){
//     console.log(true);
// }// Condition is false, that why if statement not run

// if (!12){ //12 ---> true, !12 ---> false
//     console.log("number"); 
// }

// if (!0){
//     console.log("number"); 
// }

// If...else Statement
// if (12 > 13){
//     console.log("true");

// }else{
//     console.log("false");
// }

// if (15 > 13){
//     console.log("true");    
// } // condition is false that why if statement not run
// else{
//     console.log("false");   // if if statement condition is false then run this code
// }   

// if(!12){
//     console.log("number");
// }
// else{
//     console.log("not a number");
// }



// If...else if...else Statement
/*
if (condition1){
    // code block 1
} 
else if (condition2){
    // code block 2
}   else {}
*/

// let loggedin = false;
// let admin = false;
// if (loggedin && admin){
//     console.log("Welcome Admin");
// } else if (loggedin ){
//     console.log("Welcome User");
// } else {
//     console.log("Please log in");
// }


/* Project For Conditional Statements */
// let marks = 78;

// if (marks >= 90) {
//   console.log("Grade A");
// } else if (marks >= 75) {
//   console.log("Grade B");
// } else if (marks >= 60) {
//   console.log("Grade C");
// } else {
//   console.log("Fail");
// }

/* Project2 For Conditional Statements */
// let num = 15;

// if (num % 2 === 0) {
//   console.log("Even Number");
// } else {
//   console.log("Odd Number");
// }


/* Project3 For Conditional Statements */
// let age = 17;

// if (age >= 18) {
//   console.log("Eligible for voting");
// } else {
//   console.log("Not eligible for voting");
// }

/* Project4 For Conditional Statements */
// let username = "admin";
// let password = "1234";

// if (username === "admin" && password === "1234") {
//   console.log("Login Successful");
// } else {
//   console.log("Invalid Credentials");
// }

// Important Example:-


// Switch Case Statement
switch ("BOGO")  // value ---> Case Value sathe match kaeshe ane code run thase
{
    case "First50":
        console.log("You got 50% off");
        break;
    case "BOGO":
        console.log("Buy One Get One Free");
        break;
    case "FREESHIP":
        console.log("Free Shipping on your order");
        break;
    default:
        console.log("Invalid Promo Code");
}


// Day Message System

// Take input from user
let day = prompt("Enter day (Monday, Friday, Saturday, Sunday)");

// Switch Case
switch (day) {
    case "Monday":
        console.log("Start of the work week");
        break;
    case "Friday":
        console.log("Weekend is coming 🎉");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's a holiday 😎");
        break;
    default:
        console.log("Invalid day");
}


