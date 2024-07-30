"use strict";
/*
union literals are aallow us to assign multiple data types under a single variable.

It means we make contract that a particular variable have  2 or more types.

we need to perform narrowing when we make a variable a union literal.

when a particular method works on each data type defined as a union literal than no need to do narrowing else we do narrowing to perform a particular operation on a particular data type.

Narrowing is a process in which a more specific operation or function is applied to a particular data type inorder to get a desired result on a particular data type.

Narrowing is important for avoiding error, without narrowing typescript is unable to catch type error which leads to runtime errors and unexpeccted behaviour. */
Object.defineProperty(exports, "__esModule", { value: true });
let unionvar; //strongly defined types
unionvar = "hello"; //allows and shows data type as string|boolean|number
unionvar = 123;
unionvar = true;
// unionvar=undefined;  //cause an error b/z type undefined is not assignable to type string| boolean|number;
//Narrowing is done by using type of operators or type guard , if refines data type to perform a particular operation on particular data type.
//example
//1- "Create a variable called userInput that can hold either a string or a number, and assign it the value 42. Then, use a type guard to check if userInput is a string, and if so, log a message to the console saying 'User input is a string'. Otherwise, log a message saying 'User input is a number'."
let userInput = 42;
function isString(value) {
    return typeof value === 'string';
}
if (isString(userInput)) {
    console.log('User input is a string');
}
else {
    console.log('User input is a number');
}
