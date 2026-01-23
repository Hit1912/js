//var (ES5)

var ac = "team";
var _123 = "123";
var $123 = "hit";
//var 123 = "test"; 
b = 10;  // never use

//let
//let temp = "dungrani";
//const
let team ="dungrani";   
const team_const = "dungrani!!";

// variable --> team data store (ex. Fipcard, username, password, age, address, phone number, email, etc)


//Declarations variable &  initialization variable
    var d;  // Declaration variable 
    var team_d = 12; // Declaration and initialization variable first time
    //var add value into window
    //var is function scoped
    //var can be re-declared and re-assigned
    var name = "user name";
    var name1 = "user name";


// Reassignment , redeclaration variable
var temp = 12;
temp = "dungrani"; // re-assigned
var temp = "dungrani"; // re-declared
/* Error Cases bexause of let and const are block scoped
   let and const cannot be re-declared in the same scope
   const must be initialized during declaration
   const cannot be re-assigned */
// let team = "team"; 
// var team = "test"; //you cannnot re-declare let variable
const temp_b = "dungrani";
//temp_b = "username"; // you cannot re-assign const variable
 
//SCOP 
// var 
// Global Scope
var e =23; // global scope
console.log("global scop " + e);
{
    var e =25; //block scope
    console.log("block scop " + e);
} 
function abc() {
    var e = 30; //function scope    
    console.log("function scop " + e);
}
abc();
console.log("outside " + e);

// let  
// Global Scope
let f =23; // global scope
console.log("global scop " + f);
{
    let f =25; //block scope
    console.log("block scop " + f);
} 
function abc() {
    let f = 30; //function scope    
    console.log("function scop " + f);
}
abc();
console.log("outside " + f);

// var: function-scoped, not block-scoped, can be redeclared and updated
// let: block-scoped, cannot be redeclared, but can be updated


//Temporal Dead Zone (TDZ)
console.log(h);
var h = 24;
/*
//console.log(g);
console.log(j);
let j = 12;

//Hoisting Imapact
//Hoisting --> When your create variable into js that break into two part first part is declare part that go to up and there initialization part that go down
var temp_d = 12;
//var temp_d;  --> undefined; --> that go to up
//temp_d = 12;  --> that go to down (means stuck into line 66)
//if you use console.log before initialization that give you undefined;

let temp_d_let = 24;
*/
//let variable not use before initialization
//if you use console.log before initialization that give you reference error;
//Hosting Impact on var, let and const
/*
var --> hoist --> undefined
let --> hoist --> error
const --> hoist --> error
*/  


