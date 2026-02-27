// Event page par koi pan action karo tene ek event rise karshe, page par click, hover, typing all are events
// Event Listener event nu reaction give reaction when click, dbclick, hover, typing
// Add Event Listener
// select -> event function what you change
// element.addEventListener("event_name", function(){})
// Common Events: click, input, change, submit, mouseover, keyup
// Click
let btn = document.querySelector(".btn1");
btn.addEventListener("click", ()=>{
if (btn.textContent === "Dark Mode") {
btn.textContent = "Light Mode"
document.body.style.backgroundColor = "black";
} else
{
document.body.style.backgroundColor = "white";
btn.textContent = "Dark Mode";
}
})

document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("colorBtn");
    const box = document.getElementById("box");
    let isRed = false;

    button.addEventListener("click", function () {
        if (isRed) {
            box.style.backgroundColor = "";
            button.textContent = "red"
            isRed = false;
        } else {
            box.style.backgroundColor = "red";
            button.textContent = "white"
            isRed = true;
        }
    });

});

// input
// how to know which is typed ?
let inp = document.querySelector("input");
inp.addEventListener("input", (dets) => {
// console.log(dets);
if (dets.data != null) {
console.log(dets.data);
}
});

// change - when you change elements state
let select = document.querySelector(".sel");
let device = document.querySelector(".device")
select.addEventListener("change", (dets)=>{
console.log(dets.target.value);
device.textContent = dets.target.value; 
})

let box = document.querySelector(".box");
let bg_inp = document.querySelector(".bg-inp");
let border_inp = document.querySelector(".border-inp");

console.log(box);

bg_inp.addEventListener("change", (dets) => {
    box.style.backgroundColor = dets.target.value;
});

border_inp.addEventListener("change", (dets) => {
    box.style.borderColor = dets.target.value;
});

//Key Down
let text = document.querySelector(".keydown");

text.addEventListener("keydown", () => {
text.style.backgroundColor = "black"
text.style.color = "white"
text.style.width = "5rem"
});

//key down ---> keyboard checker


// mousemove and mouseout
let box2 = document.querySelector(".box2");

box2.addEventListener("mousemove", () => {
    box2.style.backgroundColor = "green";
    box2.style.width = "300px";
});

box2.addEventListener("mouseout", () => {
    box2.style.backgroundColor = "skyblue";
    box2.style.width = "100px";
});    

// ==================================================
// Event Object:--
sel.addEventListener("change", (dets)=>{
console.log(dets); // ==> dets  -- that called event object
});

