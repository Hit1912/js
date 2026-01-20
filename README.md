// Example 1

console.log(nm);
let nm = "name";

❌ Error (ReferenceError)

// Example 2

console.log(b);
var b = "username";

✅ Output: undefined


// Example 3

var x = 1;
{
    var x = 2;
}
console.log(x);

✅ Output: 2

//// Example 4

let a = 10;
{
    let a = 20;
    console.log("Inside:", a);
}
console.log("Outside:", a);

✅ Output:
Inside: 20
Outside: 10
