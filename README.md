
## Example 1
console.log(nm);
let nm = "name";

❌ Error (ReferenceError)
Why:-
let variables are not hoisted in a usable way.
Accessing nm before declaration causes a Temporal Dead Zone (TDZ) error.

## Example 2
console.log(b);
var b = "username";

✅ Output: undefined
Why:-
var is hoisted to the top and initialized with undefined.
So b exists but has no value at the time of console.log.

## Example 3
var x = 1;
{
    var x = 2;
}
console.log(x);

✅ Output: 2

Why:-var is not block-scoped.
The value inside the block overwrites the global value.

## Example 4
let a = 10;
{
    let a = 20;
    console.log("Inside:", a);
}
console.log("Outside:", a);

✅ Output:
Inside: 20
Outside: 10

Why:-
let is block-scoped.
The inner a exists only inside the block and does not affect the outer a.
