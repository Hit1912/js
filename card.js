// 1. select --> Event --> Function(Change)
// 2. Show Form and Close Form
// 3. form - validation, submit, reset
// 4. store into localstorage
// 5. createElement and show data
// 6. show All data into HTML
// 7. Create UP and Down Btn

let add = document.querySelector("#add-note");
let close = document.querySelector(".closeForm");
let form = document.querySelector(".form-container");

add.addEventListener("click", () => {
  form.style.display = "block";
});

close.addEventListener("click", () => {
  form.style.display = "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let photo = document.querySelector('input[placeholder="https://example.com/photo.jpg"]') 
  let username = document.querySelector('input[placeholder="Enter full name"]')
  let home = document.querySelector('input[placeholder="Enter home town"]')
  let note= document.querySelector('input[placeholder="e.g., Quick appointment note"]')
  let category = document.querySelector('input[name="category"]')

    // console.log(username, photo, home, note, category);
    
    //Trim() All Input value
    const imgurl = photo.Value.trim();
    const u_name = username.Value.trim();
    const twon = home.Value.trim();
    const purpose = note.Value.trim();

    if(imgurl === ""){
        alert("Pelase Enter the image url");
        return;
    }

    if(u_name === ""){
        alert("Pelse enter your name");
    }

    if(twon === ""){
        alert("Peles enter your town");
    }
    if(purpose === ""){
        alert("plese enter the note")
        
    }

});


 