let form = document.querySelector('form');
let inp = document.querySelectorAll('input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
        console.log(inp[0].value);
        console.log(inp[1].value);
        console.log(inp[2].value);
        console.log(inp[3].value);
        console.log(inp[4].value);

        //Create 
        let card = document.createElement('div');
        let dp_div = document.createElement('div');
        let img = document.createElement('img');
        let h3 = document.createElement('h3');
        let h4 = document.createElement('h4');
        let h5 = document.createElement('h5');
        let h6 = document.createElement('h6');
        
        console.log(card , dp_div , img , h3 , h4 , h5 , h6);
  
        //Add class
        card.classList.add("card");
        dp_div.classList.add("dp-img");
       
        //add into html
       document.body.append(card);


        //add child
        card.appendChild(dp_div);
        dp_div.appendChild(img);
        card.appendChild(h3);
        card.appendChild(h4);
        card.appendChild(h5);
        card.appendChild(h6); 
        
        console.log(card);

        // Set Default
            img.setAttribute('src', "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" );
            h3.textContent = "User Name";
            h4.textContent = "User Bio";
            h5.textContent = "User Email";
            h6.textContent = "User Phone";

        //text content add
        img.setAttribute('src', inp[0].value );
        h3.textContent = inp[1].value;
        h4.textContent = inp[2].value;
        h5.textContent = inp[3].value;
        h6.textContent = inp[4].value;

        //input clear
        inp.forEach(inp => {
            if(inp.value !== "Submit"){
                inp.value = "";
            }
        });
});