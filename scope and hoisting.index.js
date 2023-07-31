 console.log(a); // What will be the output?
var a = 5;  undefined
console.log(b); // What will be the output?
let b = 5;  Error;
console.log(c); // What will be the output?
const c = 5; Error
console.log(myFuncDecl()); // What will be the output?  error
function myFuncDecl() {
 return "Hello from function declaration!";
}
console.log(myFuncExpr()); // What will be the output?  error
var myFuncExpr = function() {
 return "Hello from function expression!";
}
const x = "global";
function outerFunc() {
 let y = "outer";
 function innerFunc() {
 var z = "inner";
 console.log(x); // What will be the output? "global"
 console.log(y); // What will be the output?  "outer"
 }
 innerFunc();
 console.log(z); // What will be the output?  error
}
outerFunc();
const a = 1;
function b() {
 const a = 10;
 c();
 return;
 function c() {
 console.log(a); // What will be the output?   10
 }
}
b();
console.log(a); // What will be the output of a?  1
foo();
function foo() {
 console.log(x); // What will be the output?  undefined
 var x = "Hello, world!";


 bar();
 function bar() {
 console.log(x); // What will be the output? error
  let x = "Hello, scope!";

 }
}
Quiz:
1.d
2.b
3.a
4.b
5.d
6.a
7.d

 