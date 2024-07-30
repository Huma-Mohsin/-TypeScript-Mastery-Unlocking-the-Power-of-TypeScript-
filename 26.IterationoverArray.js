//Iteration through loops
let arr = ["huma", "saira", "sana"];
for (let i = 0; i < arr.length; i++) {
    console.log(`Hello ${arr[i]} ,Good Morning!`);
}
//access through index.
let arr1 = ["Hello"];
let name = "Sania";
console.log(`${arr1[0]} ,${name} `);
//for each method
let age = [23, 34, 56, 98, 12, 5];
let newarr = age.forEach(element => {
    let c = (element * 2);
    console.log(c);
});
/*Practice Questions


const myArray = [10, 20, 30, 40, 50];

// Your code here

// Expected output:
// 10
// 20
// 30
// 40
// 50


Write your code to iterate over myArray and log each element to the console. Go! */
const myArray = [10, 20, 30, 40, 50];
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
/*

const myArray = ["apple", "banana", "cherry", "date", "elderberry"];

// Your code here

// Expected output:
// apple
// banana
// cherry
// date
// elderberry


Write your code to iterate over myArray and log each element to the console. Go! */
const myArray1 = ["apple", "banana", "cherry", "date", "elderberry"];
for (let i = 0; i < myArray1.length; i++) {
    console.log(myArray1[i]);
}
const myArray2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for (let i = 0; i < myArray2.length; i++) {
    console.log(myArray2[i]);
}
//Write your code to iterate over myArray and log each element to the console, followed by a statement that logs the total number of elements in the array. Go!
const myArray3 = ["hello", "world", "javascript", "programming"];
for (let i = 0; i < myArray3.length; i++) {
    console.log(myArray3[i]);
}
console.log(`the total number of elements in the array ${myArray3.length}`);
/*


const myArray = [10, 20, 30, 40, 50];

// Your code here

// Expected output:
// 10 + 20 = 30
// 30 + 30 = 60
// 60 + 40 = 100
// 100 + 50 = 150


Write your code to iterate over the array myArray and log the sum of the current element and the previous sum to the console. Go! */
const myArray4 = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < myArray4.length; i++) {
    sum += myArray4[i];
    console.log(`${sum - myArray4[i]}+${myArray4[i]}=${sum}`);
}
export {};
