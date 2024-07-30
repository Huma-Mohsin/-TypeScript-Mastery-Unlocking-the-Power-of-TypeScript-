/*

Functions are block of code that is used to perform a particular or specific task. 

By help of functions, developer can call it again and again when needed for  passsing an arguments for different values.

once a code is written and it can reuse it again and again.

Functions can be imported or exported.

function encapsulate the important information when calling from other module's file.

Types of Functions:

1- Named functions.
2- Anonymous functions.
3- Lambda functions.

1-named function:- function having a name after function keyword is called as named function*/

function greet(){
    console.log("Good morning, welcome to the world of coding")
}
greet();

/* 2- Anonymous function, having no name after declaring a function with function keyword. This type of functions are needed to stored in a variable.*/

let myfun=function (){
    return "I am Anonymous in the world of coding."
}
console.log(myfun());

/* 3- Lambda Function, lambda function is also called an arrow function. it also called as anonymous function. This ffunction contains an arrow which indicates that it is an arrow function. This type of functions also needed to store in a variable. */

let arrowfun=()=>"I am arrow function and anonyomous."
console.log(arrowfun());


