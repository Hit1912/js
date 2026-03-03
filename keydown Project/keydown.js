// let h1 = document.querySelector("h1")

// window.addEventListener("keydown", (dets) => {
//   console.log(dets.key);
//   h1.textContent = dets.key;
// if (dets.key === " ") {
//     h1.textContent = "Space";
// }   
// });

// SECOND METHOD
let h1 = document.querySelector("h1");

window.addEventListener("keydown", (dets) => {

    if (dets.key === " ") {
        h1.textContent = "Space";
    } else {
        h1.textContent = dets.key;
    }

});
