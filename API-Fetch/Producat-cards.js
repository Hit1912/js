// Product Project
function userdata() {
  fetch("https://dummyjson.com/products")
    .then((rawdata) => {
      console.log(rawdata);
      return rawdata.json(); // convert raw data into JSON formate
    })
    .then((data) => {
      console.log(data); //final data
      console.log(data.products);

      data.products.forEach((user) => {
        rendorui(user);
      });
    });
}
userdata();

function rendorui(product) {
  let div = document.querySelector(".main");

  div.innerHTML += `
  <div class="group h-96 w-full perspective">
    <div class="relative h-full w-full preserve-3d shadow-xl rounded-2xl">

      <div class="absolute inset-0 backface-hidden bg-white rounded-2xl overflow-hidden border border-slate-100 flex flex-col">

        <div class="relative h-48 bg-slate-100 overflow-hidden">
          <img src="${product.thumbnail}" 
               alt="${product.title}" 
               class="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110">

          <span class="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded">
            ${product.discountPercentage}% OFF
          </span>
        </div>

        <div class="p-4 flex flex-col flex-grow">
          <div class="flex justify-between items-start">
            <h3 class="font-bold text-slate-800 text-lg leading-tight">${product.title}</h3>
            <span class="text-indigo-600 font-bold">$${product.price}</span>
          </div>

          <p class="text-xs text-slate-500 mt-2 line-clamp-2">
            ${product.description}
          </p>

          <div class="mt-auto flex items-center justify-between">
            <div class="flex items-center text-yellow-400 text-sm">
              ⭐ ${product.rating}
            </div>

            <span class="text-[10px] font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
              ${product.stock > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </div>
        </div>

        <div class="bg-slate-50 text-center py-2 text-[10px] text-slate-400 uppercase tracking-widest border-t border-slate-100">
          Hover to see details
        </div>

      </div>

      <div class="absolute inset-0 backface-hidden rotate-y-180 bg-indigo-900 rounded-2xl p-6 text-white flex flex-col">

        <h4 class="text-sm font-bold uppercase tracking-wider text-indigo-300 border-b border-indigo-700 pb-2">
          Product Info
        </h4>

        <div class="mt-4 space-y-2 text-xs">
          <div class="flex justify-between"><span class="text-indigo-300">Brand:</span> <span>${product.brand}</span></div>
          <div class="flex justify-between"><span class="text-indigo-300">Category:</span> <span>${product.category}</span></div>
          <div class="flex justify-between"><span class="text-indigo-300">Rating:</span> <span>${product.rating}</span></div>
          <div class="flex justify-between"><span class="text-indigo-300">Stock:</span> <span>${product.stock}</span></div>
        </div>

        <div class="mt-auto flex gap-2">
          <button class="flex-1 bg-white text-indigo-900 text-xs font-bold py-2 rounded-lg hover:bg-indigo-100 transition-colors">
            Add to Cart
          </button>

          <button class="w-10 h-10 flex items-center justify-center bg-indigo-800 rounded-lg hover:bg-indigo-700 transition-colors">
            ❤️
          </button>
        </div>

      </div>

    </div>
  </div>
  `;
}