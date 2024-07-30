/* In javascript or TypeS cript, variable can be ddeclared by using let, const and var keyword.

this keyword letting a compiler that variable is being declared and it's corresponding memory is allocated where a value is kept assigned to a variable.

1- let
2- const
3- var

let:-
******

let is a block level scope and the variable declared with let is being alive or useable where it is defined . 

let allows you to to declare a variable first and then assigned a value to the next step or both declare and assign a value at a single line

//exercises*/

// when we declare variable at a line w/o explicitly type, and then in next line we assigned a variable then when declaring a variable ts infer it any and it remains same when we assign different data types to a variable, shows data type any for each different data type.

let myvalue; //data type is any here -declare
myvalue = 4; // type is being any here -after assignment.
myvalue = "hello";
myvalue = true;
myvalue = { a: "1", b: "2" };
myvalue = [1, 2, 3, 4];
//in all type becomes any.

//What happens when we explicitly define variable type once it is being declared.
let myval: string; //actually we are creating a contract that ensures the variable will only hold values of that specific type i.e string

myval = "hello"; //remains string data type.
/*
 myval=true ; //produce error that type boolean is not assignable to type string.

same for assigning different data types to a string type, we will get an error,called type error.*/

let myvariable: boolean = true; //strongly type defined means that we are actually creating a ccontract that type of this specific variable is of boolean.

myvariable = false; //allows to reassigned a value with same data type.

/* myvariable=123;  produces a type error that type number is not assigned to type boolean and so on for each data type when we specifically define a type.
 */

let myval1 = "I love coding"; // Ts compiler automaticaaly infer that type of myval1 variable is of type string. and it allows a variable i.e myval1 to reassignedd it a string value , if we reassign a value that is not matched with its infer data type , it causes an error.this type of error is called type error.

/*
myval1=34; 
produces a type error that type number is not assignable to type string. */

let value2 = 34;
/*
let value2="I love TS"
let value2=56 // causes an error i.e cannot redeclare block scoped variable, means with the same name we again donot make a variable */

/* 2- Const
***********
It is a blockscoped variable ,like a let , value assigned with const is alive and accessible with in a block where it is defined. 

We declare a variable with const when we ensure that we donot need to change its value later in a code.

value passed in const variable becomes immutable.*/

const value3: string = "Hello from const world";

/* Once the value inititialize with const, cannot reassigned .*/

const Number: number = 23;
/*
const Number=45; 

if we want to redeclare a variable with const of same name it doesnot allow us and produce an error that cannot redecare a block scoped variable.  */

/*

const  value4;  //declaring a variable

once we are declaring a variable with const  we need to assign it there where we declared otherwise it gives an error that value must be initialized when variable ddeclaring with const.
 +   here value4 has an implicit any type but cause an error and to instruct to pass a value at the same time when variable is being declared.*/

/* 
 value4="Pakistan"   //initializing a value , error is that cannot initialize b/c it is a constant.

 */

//Strongly Type
const value5: string = "Behaviour of constant"; //string.
const value6: number = 34; //number
const value7: boolean = false; //boolean

//Infer By Ts:-

//Here type inference or implicit typing process is applied by compiler to automatically infer type of a variable.
const value8 = "abc"; // infer string data type
const value9 = 123; //infer number
const value10 = true; //infer boolean

/* 3- Var:-
***********
var has a function level or globe level scope. var keyword allows us to redeclare a variable with same name or reassign a value. */

//Redeclare var:-

var value11 = "pakistan";
var value11 = "Canada"; //redeclare a variable with same data type.
// var value11=56; causes an error b/c of data type is differ from string. once a data type is considered to all  cases.

var city: string = "America"; //strongly  string
var city = "Karachi"; //allows

var color = "blue"; //inferred string.
//var color=34; //causes an errordue to clash data type

//Reassign values in var:-

//inference:-
var myname; //implicit has type any when only declare.
myname = true; //remains any after initialize a value.
myname = "pakistan"; //remains any

//strongly type:-
var mybox: string;

// mybox=true  ---- causes an error that  type boolean is not assignedd to type string

mybox = "green"; //remains string
