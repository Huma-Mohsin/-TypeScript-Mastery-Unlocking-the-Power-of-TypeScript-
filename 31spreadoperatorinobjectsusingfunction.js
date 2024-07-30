//2-What is the output of { ...{ a: 1, b: 2 }, c: 3, d: 4 }?
let obj1 = { ...{ a: 1, b: 2 }, c: 3, d: 4 }; // output will be {a:1,b:2,c:3,d:4}
//3. Can you use the spread operator to merge two objects? If so, how? */
let obj2 = { ...obj1, ...{ c: 3, d: 4 } }; //// output will be {a:1,b:2,c:3,d:4}
//3. Can you use rest parameters with object arguments? If so, how? 
// answer: we use rest parameter in a function as a parameter, rest parameter is always used at the end of required parameter in a function but we used spread operator in an object to make a shallow copy of an object or to concatenate 2 or more Object.
/*
1. Object Merge: Write a function that takes two objects as input and returns a new object containing all properties from both objects.*/
function MergeObjects(obja, objb) {
    let newObj = { ...obja, ...objb };
    return newObj;
}
console.log(MergeObjects({ name: "Sara", age: 34 }, { course: "AI", center: "Karachi" }));
//1. Object Argument: Write a function that takes an object with a variable number of properties as input, and returns an array containing all property values.
function ObjectArgment(obj) {
    return Object.values(obj);
}
console.log(ObjectArgment({ name: "tahir", age: 79 }));
/*const students = [
  { name: "John", age: 20, grade: 80 },
  { name: "Jane", age: 22, grade: 90 },
  { name: "Jim", age: 21, grade: 70 },
  { name: "Jill", age: 23, grade: 85 },
  { name: "Joe", age: 20, grade: 75 }
];

// Use the filter() method to create a new array containing only the students with a grade greater than 80.*/
const students = [
    { name: "John", age: 20, grade: 80 },
    { name: "Jane", age: 22, grade: 90 },
    { name: "Jim", age: 21, grade: 70 },
    { name: "Jill", age: 23, grade: 85 },
    { name: "Joe", age: 20, grade: 75 }
];
let newarray = students.filter((ele) => ele.grade > 80);
console.log(newarray);
export {};
