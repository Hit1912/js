## VARIABLE OF JAVASCRIPT
## Example 1

console.log(nm);

let nm = "name";

❌ Error :- (ReferenceError)

Why :-
let variables are not hoisted in a usable way.
Accessing nm before declaration causes a Temporal Dead Zone (TDZ) error.

## Example 2

console.log(b);

var b = "username";

✅ Output :- undefined

Why :-
var is hoisted to the top and initialized with undefined.
So b exists but has no value at the time of console.log.

## Example 3

var x = 1;

{

    var x = 2;

}

console.log(x);

✅ Output :- 2

Why :- 
var is not block-scoped.
The value inside the block overwrites the global value.

## Example 4

let a = 10;

{

    let a = 20;
   
    console.log("Inside:", a);

}

console.log("Outside:", a);

✅ Output :-

Inside: 20

Outside: 10

Why :-
let is block-scoped.
The inner a exists only inside the block and does not affect the outer a.

## DATA TYPE OF JAVASCRIPT

## Example 1

true + false

✅ Output :- 1

Why :-
true  → 1

false → 0

1 + 0 = 1

## Example 2

null + 1

✅ Output :- 1

Why :-
null → 0

0 + 1 = 1

## Example 3

"12" + 12

✅ Output :- '1212'

Why :-
"12" + "12" = "1212"

## Example 4

!!undefined

✅ Output :- false

Why :-
undefined is falsy

!undefined → true

!!undefined → false

## Example 5

"12" - 1

✅ Output :- 11

Why :-
forces numeric conversion:

Number("12") - 1 = 11

## Example 6

typeof NaN

✅ Output :- number

Why :-
NaN means Not-a-Number

It is the result of an invalid numeric operation

Still belongs to the number data type

## Example 7

Undefined vs Null

let x;

✅ Output :- 

console.log(x);

let y = null;

console.log(y);

undefined

Why :-
let x; = undefined and let y = null; = null
