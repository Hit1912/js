function userdata() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((user) => {
        renderUI(user);
      });
    })
    .catch((error) => {
      console.log("Error fetching data:", error);
    });
}

userdata();

function renderUI(user) {
  let container = document.querySelector(".main");

  container.innerHTML += `
  
  <div class="group perspective">
    <div class="relative preserve-3d w-full h-72">

      <!-- Front Side -->
      <div class="absolute inset-0 backface-hidden bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-2xl transition">

        <img 
        src="https://ui-avatars.com/api/?name=${user.name}&background=random&size=128"
        class="w-20 h-20 rounded-full shadow-md mb-3"
        />

        <h2 class="text-lg font-bold text-gray-800">
          ${user.name}
        </h2>

        <p class="text-gray-500">
          @${user.username}
        </p>

        <p class="text-sm text-gray-400 mt-1">
          ${user.email}
        </p>

        <span class="mt-3 text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
          ${user.address.city}
        </span>

      </div>


      <!-- Back Side -->
      <div class="absolute inset-0 rotate-y-180 backface-hidden rounded-2xl p-6 text-white
      bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500
      flex flex-col justify-center">

        <h2 class="text-xl font-bold mb-2">
          ${user.company.name}
        </h2>

        <p class="text-sm italic mb-3">
          "${user.company.catchPhrase}"
        </p>

        <div class="text-sm space-y-1">
          <p>📧 ${user.email}</p>
          <p>📍 ${user.address.street}</p>
          <p>🌆 ${user.address.city}</p>
          <p>📞 ${user.phone}</p>
        </div>

      </div>

    </div>
  </div>

  `;
}