let add = document.querySelector("#add-note");
let close = document.querySelector(".closeForm");
let form = document.querySelector("form");
let formContainer = document.querySelector(".form-container");
let stack = document.querySelector(".stack");
let upBtn = document.querySelector("#upBtn");
let downBtn = document.querySelector("#downBtn");
let dots = document.querySelectorAll(".dot");

// OPEN FORM
add.addEventListener("click", () => {
  formContainer.style.display = "block";
});

// CLOSE FORM
close.addEventListener("click", () => {
  formContainer.style.display = "none";
});

// FORM SUBMIT
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let photo = document.querySelector(
    'input[placeholder="https://example.com/photo.jpg"]'
  );
  let username = document.querySelector(
    'input[placeholder="Enter full name"]'
  );
  let home = document.querySelector(
    'input[placeholder="Enter home town"]'
  );
  let note = document.querySelector(
    'input[placeholder="e.g., Quick appointment note"]'
  );
  let category = document.querySelectorAll('input[name="category"]');

  const imgUrl = photo.value.trim();
  const u_name = username.value.trim();
  const town = home.value.trim();
  const purpose = note.value.trim();

  let selected = "";
  category.forEach((element) => {
    if (element.checked) {
      selected = element.value;
    }
  });

  // ✅ Proper Validation (STOP if error)
  if (!imgUrl || !u_name || !town || !purpose) {
    alert("Please fill all fields");
    return;
  }

  saveData({
    imgUrl,
    u_name,
    town,
    purpose,
    selected,
    cardColor: "white",
  });

  form.reset();
  formContainer.style.display = "none";

  RenderUi(); // refresh UI
});

// SAVE DATA
function saveData(note) {
  let data = JSON.parse(localStorage.getItem("notes")) || [];
  data.push(note);
  localStorage.setItem("notes", JSON.stringify(data));
}

// RENDER UI
function RenderUi() {
  stack.innerHTML = ""; // ✅ Clear before rendering

  let allData = JSON.parse(localStorage.getItem("notes")) || [];

  allData.forEach((element) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.style.background = element.cardColor || "white";

    let img = document.createElement("img");
    img.classList.add("avatar");
    img.src = element.imgUrl;

    // fallback image
    img.onerror = function () {
      this.src = "https://via.placeholder.com/70";
    };

    let h2 = document.createElement("h2");
    h2.textContent = element.u_name;

    let info1 = document.createElement("div");
    info1.classList.add("info");

    let home = document.createElement("span");
    home.textContent = "Home town";

    let town = document.createElement("span");
    town.textContent = element.town;

    info1.appendChild(home);
    info1.appendChild(town);

    let info2 = document.createElement("div");
    info2.classList.add("info");

    let purpose = document.createElement("span");
    purpose.textContent = "Purpose";

    let note_msg = document.createElement("span");
    note_msg.textContent = element.purpose;

    info2.appendChild(purpose);
    info2.appendChild(note_msg);

    let buttons = document.createElement("div");
    buttons.classList.add("buttons");

    let call = document.createElement("button");
    call.classList.add("call");
    call.innerHTML = `<i class="ri-phone-line"></i> Call`;

    let msg = document.createElement("button");
    msg.classList.add("msg");
    msg.innerHTML = `<i class="ri-message-line"></i> Message`;

    buttons.appendChild(call);
    buttons.appendChild(msg);

    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(info1);
    card.appendChild(info2);
    card.appendChild(buttons);

    stack.appendChild(card);
  });
}

// INITIAL LOAD
RenderUi();

// MOVE UP
upBtn.addEventListener("click", () => {
  let lastchild = stack.lastElementChild;
  if (lastchild) {
    stack.insertBefore(lastchild, stack.firstElementChild);
  }
});

// MOVE DOWN
downBtn.addEventListener("click", () => {
  let firstchild = stack.firstElementChild;
  if (firstchild) {
    stack.appendChild(firstchild);
  }
});

// COLOR CHANGE
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    let color = window.getComputedStyle(dot).backgroundColor;
    let firstCard = stack.firstElementChild;

    if (!firstCard) return;

    firstCard.style.background = color;

    let allData = JSON.parse(localStorage.getItem("notes")) || [];
    if (allData.length > 0) {
      allData[0].cardColor = color;
      localStorage.setItem("notes", JSON.stringify(allData));
    }
  });
});