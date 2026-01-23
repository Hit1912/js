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
// let age, weight, height, gender;
 
// age = prompt("enter age : ");
// weight = prompt("enter weight : " );
// height = prompt("enter height : ");
// gender = prompt("enter gender : ");
 
// if(age >= 18 && age <= 25 && weight <= 70 && height >= 5 && height <= 6 && gender === "male"){
//     console.log("he is fit.");
// }
// else if(age >= 18 && age <= 25 && weight <= 50 && height >= 4.5 && height <= 5.5 && gender === "female"){
//     console.log("she is fit.")
// }
// else{
//     console.log("you are not fit.")
// }


// Switch Case Statement
// switch ("BOGO")  // value ---> Case Value sathe match kaeshe ane code run thase
// {
//     case "First50":
//         console.log("You got 50% off");
//         break;
//     case "BOGO":
//         console.log("Buy One Get One Free");
//         break;
//     case "FREESHIP":
//         console.log("Free Shipping on your order");
//         break;
//     default:
//         console.log("Invalid Promo Code");
// }


// Day Message System

// Take input from user
// let day = prompt("Enter day (Monday, Friday, Saturday, Sunday)");

// Switch Case
// switch (day) {
//     case "Monday":
//         console.log("Start of the work week");
//         break;
//     case "Friday":
//         console.log("Weekend is coming 🎉");
//         break;
//     case "Saturday":
//     case "Sunday":
//         console.log("It's a holiday 😎");
//         break;
//     default:
//         console.log("Invalid day");
// }

//Early Return Pattern
// function score(value){
//     if (value >90){
//         return "Value is more than 90";
//     } else if (value >80){
//         return "Value is more than 80";
//     } else if (value >70){
//         return "Value is more than 70";
//     }else if (value >60){
//         return "Value is more than 60";
//     } else {
//         return "Value is less than or equal to 60";
//     }
// }
// score(100);
// console.log(score(95));

// function score1(value){
//     if (value >90) return "Value is more than 90";
//     if (value >80) return "Value is more than 80";      
//     if (value >70) return "Value is more than 70";  
//     if (value >60) return "Value is more than 60";
//     return "Value is less than or equal to 60";
// }
// score1(85);
// console.log(score1(85));

/* ---> Other Example <--- */
// function login(username, password){
//     if (username !== "admin") return "Invalid Username";
//     if (password !== "1234") return "Invalid Password";
//     return "Login Successful";
// }

// console.log(login("admin", "1234"));   // Login Successful
// console.log(login("user", "1234"));    // Invalid Username

/* ---> Exercises 1 <--- */

let x = 2;
switch(x){
   case 2:
      console.log("Two");
   case 3:
      console.log("Three");
}

/*---> Exercise 2 <--- */
// function getGrade(score) {
//   switch (true) {
//     case (score >= 90 && score <= 100):
//       return "A+";
//     case (score >= 80 && score <= 89):
//       return "A";
//     case (score >= 70 && score <= 79):
//       return "B";
//     case (score >= 60 && score <= 69):
//       return "C";
//     case (score >= 33 && score <= 59):
//       return "D";
//     case (score >= 0 && score <= 32):
//       return "Fail";
//     default:
//       return "Invalid Marks";
//   }
// }

// console.log(getGrade(85));  


/*---> Exercise 3 <--- */

function game(player1, player2) {
  switch (player1) {
    case "rock":
      switch (player2) {
        case "scissors":
          return "rock";
        case "paper":
          return "paper";
        default:
          return "Invalid Input";
      }

    case "paper":
      switch (player2) {
        case "rock":
          return "paper";
        case "scissors":
          return "scissors";
        default:
          return "Invalid Input";
      }

    case "scissors":
      switch (player2) {
        case "paper":
          return "scissors";
        case "rock":
          return "rock";
        default:
          return "Invalid Input";
      }

    default:
      return "Invalid Input";
  }
}
console.log(game("rock", "scissors"));   
console.log(game("paper", "rock"));      
console.log(game("scissors", "paper"));  
