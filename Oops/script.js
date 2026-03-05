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
 
function CreatePencil(name, price, color) {
  console.log(this);
 
  this.name = name;
  this.price = price;
  this.color = color;
 
  this.write = function (msg) {
    let h2 = document.createElement("h2");
    h2.textContent = msg;
    h2.style.color = this.color;
    document.body.appendChild(h2);
  };
}
 
let pencil1 = new CreatePencil("Natraj", 3, "red");
let pencil2 = new CreatePencil("Apasara", 5, "blue");
 
 