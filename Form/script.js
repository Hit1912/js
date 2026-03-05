let form = document.querySelector("form");
let username = document.querySelector("input[name='name']");
let role = document.querySelector("input[name='role']");
let bio = document.querySelector("input[name='bio']");
let img = document.querySelector("input[name='img']");

// method with this keyword
const UserManager = {
    users: [],
    // form event
    init: function () {

        form.addEventListener("submit", this.submit.bind(this));
        // console.log("this value",this);
    },

    // submit form method

    submit: function (e) {
        e.preventDefault();
        console.log("form submitted");
        console.log("submit", this);
        this.addUser();
    },

    // add user method
    addUser: function () {
        console.log("add user", this);
        this.users.push({
            username: username.value,
            role: role.value,
            bio: bio.value,
            img: img.value,
        });
        console.log(this.users);

        form.reset();
        this.renderUI();
    },

    // render ui
    renderUI: function () {
        console.log(this.users);
        let div = document.querySelector(".users");

        this.users.forEach((data) => {
            div.innerHTML = `<div
        class="card bg-white/80 backdrop-blur rounded-2xl flex items-center justify-center flex-col gap-4 p-4"
      >
        <img
          src="https://media.gettyimages.com/id/517443374/photo/mahatma-gandhi.webp?s=612x612&w=gi&k=20&c=LGspH3rCMWs7DzLRis6Wi90SK1rlybMJVqe6IjlLfLA="
          alt="image"
          class="w-72 h-72 rounded-full object-cover my-5 border-4 border-blue-100"
        />
        <h2
          class="text-2xl font-bold text-blue-950 drop-shadow-xl drop-shadow-blue-100 mb-1"
        >
          Dogesh Bro
        </h2>
        <p class="text-xl font-medium text-gray-500">Web Developer</p>
        <p class="px-4 text-center text-lg text-slate-400">
          Lorem ipsum dolor sit amet consectetur adipiicing elit. Fugit, nam.
        </p>
      </div>`
        });
    },
};

UserManager.init();