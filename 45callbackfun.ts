/* Call Back Functions are the functions that can be passed as an argument  to other functions. */

function callback(cb:()=>void){
    cb();
   return `I am a body of main function ` 
}
console.log(callback(()=>{
    console.log("I am body of call back function")
}))


function callback2(a:string,cb2:()=>void){
cb2();
return `${a} , ${cb2()}`
}

let cb2=()=>{
    return `I am Cb2, a call back function`
}

console.log(callback2("I am Main and my call back is cb2",cb2));

/*1. What is the primary purpose of a callback function in JavaScript?
a) To return a value
b) To perform an asynchronous operation (correct)
c) To log a message to the console
d) To stop the execution of a program

2. How are callback functions typically passed to other functions?
a) As a string
b) As a number
c) As a function reference (correct)
d) As an object

3. What happens when a callback function is invoked?
a) The program stops executing
b) The callback function is removed from memory
c) The callback function executes its code(Correct)
d) The callback function returns a value

4. Can callback functions take arguments?
a) No 
b) Yes (correct)
c) Only if it's an arrow function
d) Only if it's a named function

5. What is the benefit of using callback functions in asynchronous programming?
a) They make code more complex
b) They make code more readable
c) They allow for asynchronous operations(correct)
d) They improve performance

6. Can callback functions be used with synchronous code?
a) No 
b) Yes  (correct)
c) Only in certain cases
d) It's deprecated

7. How do callback functions handle errors?
a) By throwing an exception
b) By returning an error value
c) By logging an error message
d) By ignoring the error
None of the above. Callback functions can handle errors in various ways, depending on the implementation.

8. Can callback functions be used with higher-order functions?
a) No
b) Yes (true)
c) Only in certain cases
d) It's deprecated

9. What is the difference between a callback function and a higher-order function?
a) A callback function takes another function as an argument, while a higher-order function returns another function
b) A callback function returns another function, while a higher-order function takes another function as an argument
c) A callback function is asynchronous, while a higher-order function is synchronous (true)
d) A callback function is synchronous, while a higher-order function is asynchronous

10. How do callback functions relate to closures in JavaScript?
a) Callback functions create closures
b) Closures create callback functions
c) Callback functions and closures are unrelated
d) Callback functions are a type of closure (true) */