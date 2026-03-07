// Design Patterns:
// to make a scalable project or write a thousand lines of code you have to learn about design pattern

// Module Pattern (IIFE)
// Module Pattern ek design pattern chhe, jema aapde code ek self executing function (IIFE) ni andar lakhiye chhiye, jethi variable and fnc private rahe

// in this fnc we can only return that values or fnc that we want to use outside

// main fecture or this pattern is data hidding(encapsulation) and clean structure, secure code, reusable and manageable code
// IIFE
// let bank = (function () {
//   let bankbalance = 10000;

//   function checkbalance() {
//     console.log(bankbalance);
//   }

//   function setbalance(val) {
//     bankbalance += val;
//   }

//   function withdraw(val) {
//     if (val < bankbalance) {
//       bankbalance -= val;
//       console.log("new balance", bankbalance);
//     } else {
//       console.log(
//         "bhai / ben tu taru balance joy le pela pachhi bija ne paisha apaje , jo aa ryu taru balance",
//         bankbalance,
//       );
//     }
//   }

//   return {
//     checkbalance,
//     setbalance,
//     withdraw,
//   };
// })();

// let abc = () => {
//   let a = 25;
//   console.log(a);
// };

// in Module pattern --> we create a IIFE --> IIFE return ---> we create an object that retrun function

// Revealing Module Pattern

// Factory Function Pattern
// Ek function banavo chho, je objects create kare chhe (factory = objects banava nu machine)

// factory function pattern ek aevi design chhe jema aapade ek simple function banaviye chhiye,
// je nava objects create kari ne return kare chhe

// aa pattern no main idea chhe ---> object creation ne ek function na upyog thi control karvu

// every time will call a factory function, tyare ek new object malse jema aapade
// methods and private data rakhi sakiye chhiye

// aa pattern tyare use karva ma aave chhe jayre, ek j type na multiple objects create karvana hoy,
// jeva ke users, products, tasks, etc.

// function createProduct(name , price, companyName){
//     let stock = 10;

//     return {
//         name, 
//         price, 
//         companyName,
//         buy(qty){
//             if(qty< stock){
//                 stock -= qty;
//                 console.log(`booked ${name}, left stock are : ${stock}`);
//             }else{
//                 console.error(`we don't have these many pieces.we only have: ${stocks}`,

//                 );
//             }
//         },
//         refillstock(qty){
//             stock += qty;
//             console.log(`stock updated. new stock : ${stock}`);
//         },
//     };
// }

// let samsung = createProduct("S26 Ultra", 140000, "samsung");
// let kitkat = createProduct("kitkat", 20, "nestle");
// observer pattern (basic pub-sub)(class)

// observer pattern (basic pub-sub)

class Youtube {
  constructor() {
    // store subscribers in array
    this.subscribers = [];
  }

  countUser() {
    let total = this.subscribers.length;
    console.log("You have total subscribers:", total);
  }

  subscribe(user) {
    this.subscribers.push(user);
    console.log(`You have new subscriber: ${user.name}`);
  }

  notify(data) {
    this.subscribers.forEach((sub) => {
      sub.update(data);
    });
  }
}

class User {
  constructor(name) {
    this.name = name;
  }

  update(data) {
    console.log(`${this.name} received notification: ${data}`);
  }
}

// create youtube channel
let hj = new Youtube();

// create users
let sub1 = new User("test_user");
let sub2 = new User("harshad");
 

