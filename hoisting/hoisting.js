console.log(a)
sayHi();
console.log(b);
var a = 10;

function sayHi() {
    console.log("Hello Junaid")
}
let b = 20;


// explanation :------------------
// code execute in 02 Phases
// when code runs javascript create Global Execution Context where hold the Decalations like variable and function only;

// PHASE 01 - INITIALISATION OR HOLDING IN EXECUTION CONTEXT;
// #01 console.log(a)  :- it's a statement so it will get ignore;
// #02 sayHi() function  :- it's a FUNCTION CALL / INVOCATION so it will also ignored;
// #03 console.log(b) : - it's a statement so it will get ignore too like first;
// #04 a variable declared with var (key) so it will take a to the execution context and store the reference of a as { a:undefined } because a is a declaration and it's value is executable or assignment so it will not considered cuz it store only declaration;
// #05 Function in javscript are fully hoisted they will moved to execution context as it as;
// #06 b variable declared with let (key) so it will take b to the execution context and store the reference of b as "b"  not initisation it remain in temporal zone;


// PHASE 02 - Phase 2 is simply sequential line-by-line execution — no async involved
// resul will be like this of the above code

// console.log(a)   - undefined
// sayHi();         - Hello Junaid
// console.log(b);  - ReferenceError: Cannot access 'b' before initialization

// var a = 10;
// function sayHi() {
//     console.log("Hello Junaid")
// }
// let b = 20;