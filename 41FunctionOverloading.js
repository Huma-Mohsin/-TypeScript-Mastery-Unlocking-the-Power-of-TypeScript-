/*function overloading means creating a multiple functions with same name but different data types.

function overloading maintains the data type of function.

It works only on function.

It works on different data types.

It maintains the code from being unexpected erros.

*/
//1-
function funover(a, b) {
    return a + b;
}
//2-
//console.log(funover(2,"saima"));//causes an error due to function overloads signatures.
console.log(funover(1, 2));
console.log(funover(true, false));
console.log(funover("sana", "saima"));
export {};
/*
1. What is the primary purpose of function overloading in programming?
a) To reduce code duplication
b) To improve code readability
c) To allow multiple functions with the same name but different parameters (correct)
d) To restrict access to certain functions

2. Which of the following is a benefit of using function overloading?
a) Increased code complexity
b) Improved type safety (correct)
c) Reduced flexibility
d) Decreased maintainability

3. What happens when multiple functions with the same name but different parameters are defined?
a) The functions will be ignored by the compiler
b) The functions will be merged into a single function
c) The functions will be overloaded (correct)
d) The functions will cause a compilation error

4. Can function overloading be used with different return types?
a) Yes, but only with primitive types
b) Yes, with any type (correct)
c) No, return types must be the same
d) No, but you can use void return type

5. Which of the following is an example of function overloading?
a) function add(a: number, b: number): number; function add(a: string, b: string): string;(correct)
b) function add(a: number, b: number): number; function add(a: number, b: string): string;
c) function add(a: number, b: number): number; function add(a: string, b: number): number;
d) function add(a: any, b: any): any;



1. What is the minimum number of functions required to demonstrate function overloading?
a) 1
b) 2 (atleast 2 functions required for overloading with same name)
c) 3
d) 4

2. Can function overloading be used with default parameters?
a) Yes
b) No (correct)
c) Only with primitive types
d) Only with reference types

3. What happens when a function call matches multiple overloaded functions?
a) The first matching function is called
b) The last matching function is called
c) A compilation error occurs (correct)
d) The function call is ignored

4. Can function overloading be used with varargs (variable-length argument lists)?
a) Yes(correct)
b) No
c) Only with primitive types
d) Only with reference types

5. Which of the following is NOT a benefit of function overloading?
a) Improved code readability
b) Reduced code duplication
c) Increased flexibility
d) Reduced type safety (false not correct said)

6. Can function overloading be used with functions that have different names?
a) Yes
b) No (correct)
c) Only with primitive types
d) Only with reference types

7. What is the purpose of function overloading signatures?
a) To declare the function implementation
b) To specify the function parameters and return type(Correct)
c) To overload functions with different names
d) To restrict access to certain functions

8. Can function overloading be used with arrow functions?
a) Yes (correct)
b) No
c) Only with primitive types
d) Only with reference types

9. Which of the following is an example of function overloading with different parameter lists?
a) function add(a: number, b: number): number; function add(a: string, b: string): string;(correct)
b) function add(a: number, b: number): number; function add(a: number, b: string): string;
c) function add(a: number, b: number): number; function add(a: string, b: number): number;
d) function add(a: any, b: any): any;

*/ 
