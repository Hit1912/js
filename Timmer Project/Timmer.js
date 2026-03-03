// SetTimout , clearTimout

//settimeout --> run only one time
// timeout -- in ms
let timmer = setTimeout(()=>{
    console.log("Hello");
},2000);

//clearTimeOut
clearTimeout(timmer);

//SetInterval , clearInterval
//setInterval --> Run into loop(infinte times)
let timmer1 = setInterval(()=>{
    console.log("Hi From JabhScript");
},2000);

//clear intrtval
clearInterval(timmer1);

//Counter
let number = 0;
let num_counter = setInterval(() =>{
    if(number <= 10){
        console.log(number);
        number++;
    }
},1000);


// PopUp Windows
 
let card = document.querySelector(".card");
let btn = document.querySelector("button");
 
setTimeout(() => {
    card.style.display = "block";
}, 5000);
btn.addEventListener("click", () => {
    card.style.display = "none";
});
 
 

