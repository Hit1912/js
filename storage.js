// localStorage API: setItem, getItem, removeItem, clear
// localstorage --> save that data into browser's storage, after close browser data wasn't deleted
// (browser nu aevu storage ke jema data store thai chhe and browser band thai jay to pan data delete thato nathi)
// ~ 5 MB storage

// setItem
// localStorage.setItem("key", value)
localStorage.setItem("username", "password");

// getItem
// localStorage.getItem("key_name")
console.log(localStorage.getItem("username"));

// removeItem
// localStorage.removeItem("name")

// updateItem
localStorage.setItem("Name", "lassi");
console.log(localStorage.getItem("Name"));

// sessionStorage API
// Session Storage ---> save that for temporarily time when you
// close tab delete was deleted
// (aa storage data ne temporarily time mate save kari ne rakhe
// chhe, jyare pan tab close karsho tyare teni sathe data pan delete
// thai jai chhe)
// ~ 5Mb Storage

// setItem
sessionStorage.setItem("email", "test@gmail.com");

// getItem
console.log(sessionStorage.getItem("email"));

//update item
sessionStorage.setItem("email", "demo@gmail.com");
console.log(sessionStorage.getItem("email"));

// clear
// sessionStorage.clear();


// Basic cookie structure (manual key = Value;)
// Cookie --> store data into browser cookies
// (Cookie data ne browser na cookies name ni property ma save
// kare chhe, cookie no use light data save karva mate thai chhe)
// when you reload web page data will be automatically send to
// server
// ~ 4 KB storage
document.cookie = "name=test1";

// max age
document.cookie = "email=test@gmail.com; max-age=60";

//PROJECT - 1

//Dark light Mode ---> Save into local stroage
let btn = document.querySelector("button");
let body = document.querySelector("body");

//localstoragre ---> value ----> classList.add(theme)
if(body.classList.add(localStorage.getItem("theme")) === "dark"){
    body.classname = ""
    body.classList.add(localStorage.getItem("theme"));
         btn.textContent ="Light Mode";
        btn.style.color = "#222";
        btn.style.backgroundColor = "#555";
       localStorage.setItem("theme","dark") 
}

btn.addEventListener("click",() => {
    console.log("btn clicked");

    if(body.classList.contains("light")){
        body.classList.remove("light");
        body.classList.add("dark");
        btn.textContent ="Light Mode";
        btn.style.color = "#222";
        btn.style.backgroundColor = "#555";
       localStorage.setItem("theme","dark") 
    }else{

        body.classList.remove("dark");
        body.classList.add("light");
        btn.textContent ="Dark Mode";
        btn.style.color = "rgb(224, 224, 224)";
        btn.style.backgroundColor = "white";
        localStorage.setItem("theme","light")
    }
});

function Theme(){

}

//PROJECT - 2

//SearchBar


