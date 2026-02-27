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

// max age

