/* 3 important array methods are:
1-Map
2-Filter
3-Reduce

1-map:-

It is an important array method. It returns a new array. It is used to perform an operation over an existing array and to get new array.*/
let arr = [23, 45, 67, 98];
let mappedarr1 = arr.map((elem) => {
    return elem * 2;
});
console.log(mappedarr1);
/*
Q-1
const myArray = [10, 20, 30, 40, 50];

// Your code here

// Expected output:
// [20, 40, 60, 80, 100]


Write your code to use the map method to double each element in myArray and store the result in a new array.
 */
const myArray = [10, 20, 30, 40, 50];
let newArr = myArray.map((ele) => ele * 2);
console.log(newArr);
/* Q-2
const myArray = ['hello', 'world', 'javascript', 'programming'];

// Your code here

// Expected output:
// ['HELLO', 'WORLD', 'JAVASCRIPT', 'PROGRAMMING']


Write your code to use the map method to uppercase each element in myArray and store the result in a new array. Go!  */
const myArray2 = ['hello', 'world', 'javascript', 'programming'];
let newarray2 = myArray2.map((elem) => elem.toUpperCase());
console.log(newarray2);
/* Q-3

const myArray = [1, 2, 3, 4, 5];

// Your code here

// Expected output:
// [1, 4, 9, 16, 25]


Write your code to use the map method to square each element in myArray and store the result in a new array. Go! */
const myArray5 = [1, 2, 3, 4, 5];
let newArr5 = myArray5.map((elem) => elem * elem);
console.log(newArr5); //[ 1, 4, 9, 16, 25 ]
/*
const words = ["hello", "world", "javascript", "code", "programming"];
Use the map() method to create a new array with each word length. */
const word = ["hello", "world", "javascript", "code", "programming"];
let wordslength = word.map((ele) => ele.length);
console.log(wordslength);
/* filter():-

filter method is used to apply filter i.e particular condition on an existing array and it returns a new array of having filtered data. */
const myArray6 = [2, 4, 6, 8, 10];
let newArr6 = myArray6.filter((a) => a > 5);
console.log(newArr6); //[ 6, 8, 10 ]
/*Exercises
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
Use the filter() method to create a new array containing only the even numbers.*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumber = numbers.filter((ele) => ele % 2 === 0);
console.log(evenNumber);
/*
const words = ["hello", "world", "javascript", "code", " programming"];
// Use the filter() method to create a new array containing only the words that have more than 5 characters. */
const words = ["hello", "world", "javascript", "code", " programming"];
let newwords = words.filter((elem) => elem.length > 5);
console.log(newwords);
/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Use the filter() method to create a new array containing only the numbers that are divisible by 3. */
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let divisiblebythree = numbers1.filter((elem) => elem % 3 === 0);
console.log(divisiblebythree);
/* Reduce is another important method used in an array.
It returns a single value after performing some operations.
It also returns a new array. */
let red_arr = [1, 2, 3, 4, 5];
let newred = red_arr.reduce((prev, current) => prev + current, 0);
console.log(newred);
/*
const numbers = [10, 20, 30, 40, 50];

Your function should return the average, which in this case would be:

(10 + 20 + 30 + 40 + 50) / 5 = 30 */
function avg(...args) {
    let sum = args.reduce((prev, curr) => prev + curr, 0);
    console.log(sum); //36
    let average = sum / args.length;
    return average; //4.5
}
console.log(avg(1, 2, 3, 4, 5, 6, 7, 8));
export {};
