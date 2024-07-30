/*
Hoisting :-

Hoisting is a process in Js or Ts in which variables declare with const and let or functions declared with keyword function moving at the top level regardless where it is defined.

variables declare with const and let is hoisted only but there asssignment is not hosted , assigned values are placed where it is defined.

where as functions declared with function keyword hoisted at top level with its initialization.

*/
// Q1
var x = 5;
function foo() {
    //console.log(x); //When a variable with the same name is declared both globally and within a function body, JavaScript prioritizes the local variable over the global variable.
    // error is due to  that from below declaration, variable is hoisted at above level but its value is not hoisted so we get undefined value of x.(Undefined)
    var x = 10;
}
foo(); //function is called here
console.log(x); //5 from global variable
/*

What will be the output of the above code?

A) 5, 5
B) 10, 5
C) undefined, 5
D) 10, 10

ans: C) undefined, 5 // first console is undefined and second console has 5.*/
//Q2
var x = 5; // global x
function foo1() {
    var x = 10; // local x
    console.log(x); // get x b/c variable is hoisted and its value is initialized before console. so here output is 10
}
console.log(x); // 5
//output : 10,5
//Q3
function bar() {
    // console.log(y); //variable is hoisted but value is not so output is undefined
    let y = 15;
}
bar();
// console.log(y); //y is defined above block scoped and it is not accesssible to out of block so output is undefined.
/*
What will be the output of the above code?

A) 15, 15
B) undefined, error
C) error, undefined
D) undefined, undefined

//output : D) undefined, undefined
*/
//Q4
var x = 5;
function foo2() {
    // console.log(x); // undefined b/c value is not hoisted . x has undeined value.
    var x = 10;
}
//Q5
console.log(foo()); // as function is hoisted along with its initialization so it is ok. and print 10.
function foo11() {
    return 10;
}
console.log(bar()); //undefined b/c it is an arrow function and can be store in a variable, variable is hoisted but its value not so when we are calling a function, bar is hoisted w/o initialization so here we get undeined.
const bar11 = function () {
    return 20;
};
//What will be the output of the above code? 
//Answer= 10 - undefined.
//Q6-
var x = 5;
function foo4() {
    console.log(x); //5 as output
}
foo();
console.log(x); //5 as output
export {};
/*

Practice Questions:
*******************

/*
1. What will be the output of the following code?

console.log(x); //here output is undefined b/c variable is hoisted but its value not.
var x = 10;

A) 10
B) undefined(Correct)
C) Error

2. What will be the output of the following code?

console.log(foo()); //function called and it's value is 10 b/c complete function along with its declaration and initialization , it is hoisted
function foo() {
  return 10;
}

A) 10 (Correct)
B) undefined
C) Error

3. What will be the output of the following code?

var x = 5;
function foo() {

  console.log(x); //when global variable and local variable is declare with same name, then priority is high for local if console is at local otherwise global variable get prioritize.
  (Undefined)

  var x = 10;
}
foo();

A) 5
B) 10
C) undefined (Correct)

4. What will be the output of the following code?

console.log(x); //undefined
let x = 10;

A) 10
B) undefined (Correct)
C) Error

5. What will be the output of the following code?

function foo() {
  console.log(x); //error b/c x is not declared in a scope.
}
var x = 10;
foo();

A) 10
B) undefined
C) Error (Correct)

6. What will be the output of the following code?

var x = 5;
function foo() {
  console.log(x); //output 5
}
function bar() {
  var x = 10;
  foo();
}
bar(); //bcz it is not console

A) 5
B) 10
C) undefined (correct)

6. What will be the output of the following code?

console.log(foo()); //complete function is hoisted at top level.
var foo = function () {
  return 10;
}

A) 10 (Correct)
B) undefined
C) Error

7. What will be the output of the following code?

var x = 5;
function foo(x) {
  console.log(x);
}
foo(10);//
- When foo is called with argument 10, the local variable x inside foo is assigned the value 10.
- The console.log(x); statement inside foo logs the value of the local x, which is 10.


A) 5
B) 10 (Correct)
C) undefined
*/ 
