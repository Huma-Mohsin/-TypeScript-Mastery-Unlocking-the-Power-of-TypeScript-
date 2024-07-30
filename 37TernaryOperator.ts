/* Ternary Operator is a concise way to write a condition .
Ternary Operator is used in replace of simple if else condition. */

import { createLanguageService } from "typescript";



5<3? console.log("true") :console.log("false");

  let IsRaining=false;
  IsRaining ?console.log("wear a coat"):console.log("wear light clothes");

  /*  MCQs

1. What is the output of the following code?

let x = 5;
x > 10 ? console.log("A") : console.log("B");

A) A
B) B  (correct)


1. Which of the following is the correct syntax for a ternary operator?

A) condition ? true : false (correct)
B) condition : true ? false
C) condition => true : false
D) condition -> true : false



1. What is the output of the following code?

let y = 7;
y % 2 == 0 ? console.log("Even") : console.log("Odd");

A) Even
B) Odd (correct)


Statements

1. Write a ternary operator to log "Good morning" if the hour is less than 12, otherwise log "Good afternoon".*/

let hours=5;

hours<12 ?console.log("Good morning"):console.log("Good afternoon");


//1. Use a ternary operator to assign the value "Adult" to the variable status if the age is 18 or above, otherwise assign "Minor".

let person_age=20;
person_age>=18? console.log("Adult"):console.log("Minor");



//1. Write a ternary operator to log "Yes" if the length of the string str is greater than 5, otherwise log "No".

let str="Hello Pakistan";

str.length>5? console.log("yes"):console.log("No");



// 1. What is the purpose of the ternary operator?
// A) To replace if-else statements (correct)
// B) To replace switch statements
// C) To replace for loops
// D) To replace while loops

// 1. Which of the following is the correct order of operands in a ternary operator?
// A) condition ? true : false (correct)
// B) true : condition ? false
// C) false ? condition : true
// D) condition : true : false


// 1. What is the output of the following code?

// let x = 10;
// x > 5 ? console.log("A") : x < 5 ? console.log("B") : console.log("C"); //nested if else

// A) A (correct)
// B) B
// C) C

// 1. Can a ternary operator be used to replace a nested if-else statement?
// A) Yes(correct)
// B) No 

// 1. What is the benefit of using a ternary operator?
// A) It makes the code longer
// B) It makes the code more complex
// C) It makes the code more concise  (correct)
// D) It makes the code slower



//Statements

//1. Write a ternary operator to log "Positive" if a number is greater than 0, "Negative" if less than 0, and "Zero" if equal to 0.

let number:number=5;

number>0?console.log("positive"):number<0?console.log("Negative"):console.log("zero")


//1. Use a ternary operator to assign the value "Even" to the variable parity if a number is even, otherwise assign "Odd".

let num=12;
let parity=num%2===0;
parity?console.log("Even"):console.log("Odd")







//1. Write a ternary operator to log "Good morning" if the hour is less than 12, "Good afternoon" if between 12 and 17, and "Good evening" otherwise.

let hour=8;
hour<12?console.log("Good Morning"):hour<17?console.log("Afternoon"):console.log("Good Evening")



//1. Use a ternary operator to assign the value "Adult" to the variable status if the age is 18 or above, "Minor" if below 18 but above 12, and "Child" otherwise.
 
let age = 25;
let status = age >= 18 ? "Adult" : age > 12 ? "Minor" : "Child";