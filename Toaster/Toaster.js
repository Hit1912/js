let d = 20;
function abc() {
    console.log(d);
}
function def(){
    let d = 25;
    abc();
}
def();
//clg ans -->

function parent (){
    let a = 12;
    return function(){
        console.log(a);
    };
}
let fnc1 = parent()();
console.log(fnc1);


//Counter
function counter(){
    let a = 0;
    return function(){
        a++;
        console.log(a);
    };
}

let fnc = counter();
fnc(); //1
fnc(); //2 
fnc(); //3
fnc(); //4
fnc(); //5

let fnc2 = counter();
fnc2();
fnc2();
fnc2();
fnc2();
fnc2();







