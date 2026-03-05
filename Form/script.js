let form = document.querySelector("form");
 
let username = document.querySelector("input[name='name']");
let role = document.querySelector("input[name='role']");
let bio = document.querySelector("input[name='bio']");
let img = document.querySelector("input[name='img']");
 
let div = document.querySelector("#cardContainer");
 
const UserManager = {
 
    users: [],
 
    init: function () {
 
        // Load stored users when page loads
        const storedUsers = localStorage.getItem("users");
 
        if (storedUsers) {
            this.users = JSON.parse(storedUsers);
            this.renderUi();
        }
 
        form.addEventListener("submit", this.submit.bind(this));
    },
 
    submit: function (e) {
        e.preventDefault();
        this.addUser();
    },
 
    addUser: function () {
 
        const newUser = {
            username: username.value,
            role: role.value,
            bio: bio.value,
            img: img.value
        };
 
        this.users.push(newUser);
 
        // Save to LocalStorage
        localStorage.setItem("users", JSON.stringify(this.users));
 
        form.reset();
 
        this.renderUi();
    },
 
    renderUi: function () {
 
        div.innerHTML = "";
 
        this.users.forEach((data) => {
 
            div.innerHTML += `
           
            <div class="card bg-white max-w-sm w-full text-center border border-blue-200 rounded-2xl p-8 shadow-xl hover:scale-105 transition">
 
                <img
                src="${data.img}"
                alt="image"
                class="w-40 h-40 mx-auto object-cover rounded-full border-4 border-blue-200 drop-shadow-lg"
                />
 
                <h2 class="text-2xl text-slate-700 mt-4 font-bold">
                ${data.username}
                </h2>
 
                <p class="text-lg text-orange-600 mt-2 font-semibold">
                ${data.role}
                </p>
 
                <p class="text-sm text-gray-600 mt-3">
                ${data.bio}
                </p>
 
            </div>
           
            `;
        });
 
    }
 
};
 
UserManager.init();