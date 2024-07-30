/* spread operator is used in an array or an object.It is used to expand an array or an object.

Spread operator makes the shallow copy of an original array or an object , but not nested array or a nested object.

It can be used at starting, middle or end  in a function's parameter also.

syntax:  ...variable_name //shows spread operator.*/
let arrstr = ["Huma", "Ayesha", "Amna", "Saima"];
console.log(arrstr);
//make new array with shallow copy of an array.
let newarr = [...arrstr, "Zain", "kainat", "waniya"];
console.log(newarr);
//Rest parameter is used in functions , it has no limitation to contain elements in it. It is always used at the end of a parameter with array data type of string or number.
// syntax: ...restparam:string[]
function greet(name, ...restparam) {
    console.log(restparam); //[ 'How Are You?', 'How Is your Studies going On?' ]
    return `${name} ${restparam}`; //Huma How Are You?,How Is your Studies going On?
}
console.log(greet("Huma", "How Are You?", "How Is your Studies going On?")); //
/*Exercises

Spread Operator Exercises

1. What is the output of [...[1, 2, 3], 4, 5, 6]?
Solution */
let arr1 = [1, 2, 3];
let newArr = [...arr1, 4, 5, 6];
console.log(newArr); //[1,2,3,4,5,6]
/*
Rest Parameter Exercises

1. What is the output of function func(a, b, ...rest) { console.log(rest); }; func(1, 2, 3, 4, 5)?  */
function func(a, b, ...rest) {
    console.log(rest); //[3,4,5]
}
func(1, 2, 3, 4, 5);
//2. How would you define a function to take a variable number of arguments and return their sum?
function fun(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}
console.log(fun(1, 2, 3, 4, 5, 6, 7, 8, 9));
/* Spread Operator Scenarios

1. Array Concatenation: Write a function that takes two arrays as input and returns a new array containing all elements from both arrays.*/
function ArrayConcat(arr1, arr2) {
    let newArr = [...arr1, ...arr2]; //we donot use concat method on number so we use spread operator for it.
    return newArr;
}
console.log(ArrayConcat([1, 2, 3], [4, 5, 6])); //[ 1, 2, 3, 4, 5, 6 ]
/*2. Array Expansion: Write a function that takes an array and a variable number of additional elements as input, and returns a new array containing all elements.*/
function arrayExpansion(a, arr3) {
    let newArray = [a, ...arr3];
    console.log(newArray); //[1, 2, 3, 4,5, 6, 7, 8]
}
arrayExpansion(1, [2, 3, 4, 5, 6, 7, 8]);
/*Rest Parameter Scenarios

1. Variable Argument Sum: Write a function that takes a variable number of arguments and returns their sum. */
function sums(...argus) {
    let sum = 0;
    for (let i = 0; i < argus.length; i++) {
        sum += argus[i];
    }
    return sum; //24
}
console.log(sums(2, 4, 5, 6, 7));
/*
1. Function Arguments: Write a function that takes a function as input, and returns an array containing all arguments passed to that function.*/
function child(...args) {
    return args;
}
function parent(child) {
    return child(1, 2, 3); //calling child function
}
console.log(parent(child));
export {};
//Your task is to write the code for each scenario!
