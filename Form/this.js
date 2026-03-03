// this Keyword

// this keyword special keyword in javascript

// beacause of this keyword we can access the properties and
// methods of an object

// this keyborad is used to refer to the current object

// this keyword is useful when we have to access the properties
// and methods of an object inside a method of that object

// this keyborad context is determined by how a function is called
// (that is the reason why this keyword is called dynamic scope)(this
// ni value this nu use kaya context ma chhe te par depend kare chhe)

//Global Context
console.log("global",this);

//function es5 context
function abc() {
    console.log("function",this);
}
abc();

//Function es5 context
let bcd = () => {
    console.log("FNC ES6",this);
};
bcd(); //Window

// method context
// method --> function in object

// 1. method --> fnc es5
let a = {
    name: "test",
    age: 25,
    write: function () {
        // method --> ek function je koi object ni under hoy tene
        // method kevay. // this --> give object
        // if you use arrow function then this key give you window
        // object because arrow function does not have its own this
        // keyword it takes this value from its parent scope
        // if you create one more function inside method then this
        // loose their value --> solution --> you have to create a
        // arrow function=
        console.log("Method fnc es5",this);
    },
};

// 2. method --> fnc es6
let b = {
    name: "test",
    age: 25,
    write: () => {
        console.log("Method fnc es6",this);
    },
};

b.write(); // window

// 3. method --> fnc es5 ==> fnc es5
let c = {
    name: "test",
    age: 25,
    write: function () {
        function abc() {
            console.log("Method -->fnc es6 into fnc es5 ",this);
        }
        abc();
    },
};

c.write(); // Window

// 4. method --> fnc es6 ==> fnc es6 (arrow function)
let d = {
  name: "test",
  age: 25,
  write: () => {
    function abc() {
      console.log("method fnc es6", this);
    }
    abc();
  },
};

d.write(); // window

//Event handler context
document.querySelector("h1").addEventListener("click",function(){
    console.log("Event handler",this);
});

//class context
class person{
    constructor(){
        this.username = "test";
        this.email = "test@gmail.com";
        console.log("class context",this);
    }
}

let p1 = new person();
console.log(p1);

// context ---> this keyword value
// global context --> window
// function context --> window
// method context with es5 fnc --> object
// method context with es6 fnc --> Window
//