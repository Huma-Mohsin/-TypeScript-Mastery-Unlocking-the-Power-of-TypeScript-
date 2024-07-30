//Scope is termed as a boundary where a variable is accessible beyond this limit or scope variable is not accessible to get.
/*practice Questions:
**********************/
//Q1
var x = 5; //global variable
function outer() {
    var y = 10; //local variable
    function inner() {
        console.log(x); // ? 5 , accessible b/z x is a global variable.
        console.log(y); // ?  10 , acccessible b/c it is defined in a main function and can be called in a nested function.
    }
    inner();
}
outer(); // 5 , 10
//Q2
/*
var x = 5;     //global variable

function foo() {
  console.log(x); // ?  undefined b/c local variable is being host but not its valu eis being hoisted.
  var x = 10;
}

foo();


Choose the correct answer:

A) 5
B) 10
C) undefined  (Correct)
D) Error */
/*
Q-3
var x = 5;   //local variable
 
function foo(x) {
  console.log(x); // 10 as output
}

foo(10);  //when function is calling its value is passed to console and it is being assigned to console's x; and if not pass argument and function is calling empty then glov=bal variable is being log i.e 5

here output is 10.*/
/*
//Q-4
var x = 5; //global variable

function foo() {
  var y = x; //local variable i.e y=5 from global value.
  var x = 10;  //local variable i.e x=10
  console.log(y); // 5 as output when function is called.
}

foo(); */
/* Q5-*/
var x = 5;
function foo0() {
    // console.log("line 69",x); // undefined
    var x = 10;
    console.log(x); // 10
}
foo0(); //output is 5,10  
//Q-6
var x = 5;
function foo() {
    console.log(x); // 5
    x = 10;
    console.log(x); // 10
}
foo();
console.log(x); // 10    
export {};
