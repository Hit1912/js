//100 USER DATA --->
function userdata() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((rawdata) => rawdata.json())
    .then((data) => {
      console.log(data); // contains 100 posts

      data.forEach((post) => {
        rendorui(post);
      });
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

userdata();

function rendorui(post) {
  let div = document.querySelector(".main");

  div.innerHTML += `
  <div class="animate-fade-in group relative max-w-md w-full bg-white rounded-2xl shadow-sm border border-slate-100 p-8 transition-all duration-500 hover:shadow-2xl hover:border-indigo-100">

      <div class="absolute -top-3 -left-3 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          POST #${post.id}
      </div>

      <div class="relative z-10">
          <span class="text-xs font-bold text-indigo-500 uppercase tracking-widest">
              User ID: ${post.userId}
          </span>

          <h2 class="mt-3 text-2xl font-serif font-bold text-slate-800 leading-tight group-hover:text-indigo-600 transition-colors duration-300">
              ${post.title}
          </h2>

          <div class="mt-4 h-1 w-12 bg-indigo-200 transition-all duration-500 group-hover:w-full"></div>

          <p class="mt-4 text-slate-600 leading-relaxed first-letter:text-3xl first-letter:font-bold first-letter:text-slate-800">
              ${post.body}
          </p>
      </div>

      <div class="mt-8 flex items-center justify-between">
          <button class="text-sm font-semibold text-indigo-600 hover:text-indigo-800 flex items-center group">
              Read More
              <span class="ml-1 transition-transform duration-300 group-hover:translate-x-2">→</span>
          </button>
      </div>

  </div>
  `;
}