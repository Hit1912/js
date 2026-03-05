// Object Oriented Javascript
// OOPS
 
// dar vakhat blueprint banavo ke object kevo dekhase
// ane shu properties ane methods hase, ane pacchi tena
// upyog thi nava nava objects banvani sakiye chhiye
// tene j kevaay chhe Object Oriented Programming
 
// blueprint (object kevo dekhase, object ma su method)
// --> based on blueprint create objects
 
// blueprint -- constructor
// function based constructor --> Constructor Function
// --> function Name always start with Capital letter
 
function CreatePencil(name, price, color, qty) {

  this.name = name;
  this.price = price;
  this.color = color;
  this.qty = qty;

  // method
  this.write = function (msg) {
    let h1 = document.createElement("h1");
    h1.textContent = msg;
    h1.style.color = this.color;

    console.log(this);

    document.querySelector("body").appendChild(h1);
  };
}

// Objects
let pencil1 = new CreatePencil("Natraj", 100, "red", 10);
console.log("Natraj Pencil", pencil1);

let pencil2 = new CreatePencil("Apsara", 100, "blue", 20);
console.log("Apsara Pencil", pencil2);


// Eraser Constructor
function CreateEraser(name, price, color, size) {
  this.name = name;
  this.price = price;
  this.color = color;
  this.size = size;
}

// erase method
CreateEraser.prototype.erase = function () {
  let h1 = document.querySelector("h1:last-child");

  if (h1) {
    h1.remove();
  }
};

// Objects
let eraser1 = new CreateEraser("Natraj Eraser", 5, "pink", "small");
let eraser2 = new CreateEraser("Apsara Eraser", 8, "white", "medium");

console.log(eraser1);
console.log(eraser2);


// jo construction function koi field tena prototype
// ma add attech kari de to te field badha object ma available thase
CreatePencil.prototype.shape = "round";


// what is prototype: prototype is a property of function which is
// used to add new field to all the object created by that function

// Class in JavaSctipt
// class is a syntatical sugar over construction function, class ma apde constructor function no upyog kariye chhiye
// why use class: class is more readable and easier to understand than construction function

class Creatpen {
    constructor(name ,price,qty , color){
        // what is constructor: constructor is a special method which 
        // is called when an object is created, it is used to initialize
        // the object

        // why use constructor: constructor is used to intialize the
        // object, it is called automatically when an object is created,
        // it is used to set the initial values of the object
  this.name = name;
  this.price = price;
  this.color = color;
  this.qty = qty;

  // write
    this.write = function (msg) {
    let h1 = document.createElement("h1");
    h1.textContent = msg;
    h1.style.color = this.color;

    console.log(this);

    document.querySelector("body").appendChild(h1);
  };

    }
}

let pen = new Creatpen("Cello",160,10,"green");
let pen1 = new Creatpen("Reynold",200,10,"red");


// extends ---> super
// create a new class that hold old class value and also have some new values

// copy old class and add new value
class User {
    constructor(name,email,password ){
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = "User";
    }
}

let user = new User("test","test@test.com","abc@123");
console.log("User",user);

