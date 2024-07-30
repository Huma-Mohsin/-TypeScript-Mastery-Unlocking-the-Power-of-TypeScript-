"use strict";
/*
Hoisting :-

Hoisting is a process in Js or Ts in which variables declare with const and let or functions declared with keyword function moving at the top level regardless where it is defined.

variables declare with const and let is hoisted only but there asssignment is not hosted , assigned values are placed where it is defined.

where as functions declared with function keyword hoisted at top level with its initialization.

*/
Object.defineProperty(exports, "__esModule", { value: true });
var x = 5;
function foo() {
    console.log(x); //undefined
    //var x = 10;
}
foo(); //function is called here
console.log(x); //5 from global variable
/*

What will be the output of the above code?

A) 5, 5
B) 10, 5
C) undefined, 5
D) 10, 10
*/ 
