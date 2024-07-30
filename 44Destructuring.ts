//destructuring means to get a property or value from a particular data structure like array and object.

let array1=["Huma",35,"karachi"];
console.log(array1[2]);//karachi
console.log(array1[5]);//undefined
array1[3]="pakistan";//assigning a new value at new index
console.log(array1);


//destructuring of an object
let obj={
    name:"huma",
    course:"AI",
}

console.log(obj.course);
console.log(obj["name"]);

/**Array Destructuring MCQs

1. What is the purpose of destructuring in JavaScript?
a) To create a new array
b) To extract values from an array (correct)
c) To add values to an array
d) To modify an existing array

2. Which of the following is an example of array destructuring?
a) const arr = [1, 2, 3];
b) const [x, y, z] = [1, 2, 3];(correct)
c) const arr = { a: 1, b: 2, c: 3 };
d) const { a, b, c } = { a: 1, b: 2, c: 3 };

3. What happens when you try to destructure an array with more variables than elements?
a) JavaScript throws an error
b) The extra variables are assigned undefined(correct)
c) The extra variables are assigned null
d) The array is modified

Object Destructuring MCQs

1. Which of the following is an example of object destructuring?
a) const obj = { a: 1, b: 2, c: 3 };
b) const { a, b, c } = { a: 1, b: 2, c: 3 };(correct)
c) const arr = [1, 2, 3];
d) const [x, y, z] = [1, 2, 3];

2. What happens when you try to destructure an object with a property that doesn't exist?
a) JavaScript throws an error
b) The variable is assigned undefined(correct)
c) The variable is assigned null
d) The object is modified

3. Can you destructure a nested object?
a) Yes(correct)
b) No
c) Only with array destructuring
d) Only with object destructuring
 */