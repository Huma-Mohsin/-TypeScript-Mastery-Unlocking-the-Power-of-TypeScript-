/*
union literals are aallow us to assign multiple data types under a single variable.

It means we make contract that a particular variable have  2 or more types.

we need to perform narrowing when we make a variable a union literal.

when a particular method works on each data type defined as a union literal than no need to do narrowing else we do narrowing to perform a particular operation on a particular data type.

Narrowing is a process in which a more specific operation or function is applied to a particular data type inorder to get a desired result on a particular data type.

Narrowing is important for avoiding error, without narrowing typescript is unable to catch type error which leads to runtime errors and unexpeccted behaviour. */

let unionvar: string| boolean|number; //strongly defined types
unionvar="hello"; //allows and shows data type as string|boolean|number
unionvar=123;
unionvar=true;
// unionvar=undefined;  //cause an error b/z type undefined is not assignable to type string| boolean|number;

//Narrowing is done by using type of operators or type guard , if refines data type to perform a particular operation on particular data type.

//example

//1- "Create a variable called userInput that can hold either a string or a number, and assign it the value 42. Then, use a type guard to check if userInput is a string, and if so, log a message to the console saying 'User input is a string'. Otherwise, log a message saying 'User input is a number'."

let userInput: string | number = 42;
if(typeof userInput==="string"){
  console.log(`User input is a string`);

}
else{
  console.log('User input is a number');
}

//2-"Create a variable called person that can hold either a string or an object with a name property. Assign it the value { name: 'John' }. Then, use a type guard to check if person is an object with a name property, and if so, log a message to the console saying 'Person has a name: John'. Otherwise, log a message saying 'Person is a string'."

let person:string|{name:string}={name:"John"};
if(typeof person==="object" && "name" in person){
  console.log('Person has a name: John')
}
else{
  console.log('Person is a string')
}

//3-"Create a variable called data that can hold either a string or an array of numbers. Assign it the value [1, 2, 3]. Then, use a type guard to check if data is an array of numbers, and if so, log a message to the console saying 'Data is an array of numbers: [1, 2, 3]'. Otherwise, log a message saying 'Data is a string'."

let data: string|number[]=[1,2,3,4,5,6];
if(Array.isArray(data)){
  console.log('Data is an array of numbers: [1, 2, 3]');
}
else{
  console.log('Data is a string')
} //Data is an array of numbers: [1, 2, 3]

//4- "Create a variable called user that can hold either a string or an object with a name property and an age property. Assign it the value { name: 'John', age: 30 }. Then, use a type guard to check if user is an object with a name property and an age property, and if so, log a message to the console saying 'User name is John and age is 30'. Otherwise, log a message saying 'User is a string'."

let user:string|{name:string, age:number}={name:"John" , age:30}
if(typeof user ==="object" && "name" in user && "age" in user){
    console.log("User name is John and age is 30");
}
else{
  console.log("User is a string.")
}

//5- "Create a variable called shape that can hold either a string or an object with a type property and a coordinates property. Assign it the value { type: 'circle', coordinates: { x: 1, y: 2, radius: 3 } }. Then, use a type guard to check if shape is an object with a type property and a coordinates property, and if so, log a message to the console saying 'Shape is a circle with coordinates (1, 2) and radius 3'. Otherwise, log a message saying 'Shape is a string'."

let shape:string|{type:string, coordinates:{x:number,y:number,radius:number}}={ type: 'circle', coordinates: { x: 1, y: 2, radius: 3 } };
if(typeof shape==="object" && "type" in shape && "coordinates" in shape){
  console.log("Shape is a circle with coordinates (1, 2) and radius 3");
}
else{
  console.log("Shape is a string");
}//Shape is a circle with coordinates (1, 2) and radius 3

//6- "Create a variable called vehicle that can hold either a string or an object with a make property and a model property. Assign it the value { make: 'Toyota', model: 'Corolla' }. Then, use a type guard to check if vehicle is an object with a make property and a model property, and if so, log a message to the console saying 'Vehicle is a Toyota Corolla'. Otherwise, log a message saying 'Vehicle is a string'."
let vehicle:string|object={ make: 'Toyota', model: 'Corolla' };
if(typeof vehicle==="object" && "make" in vehicle && "model" in vehicle){
  console.log("Vehicle is a Toyota Corolla");
}
else{
  console.log("Vehicle is a string")
}//Vehicle is a Toyota Corolla

//7-"Create a type guard function called isData that takes a value of type number | { name: string, age: number } and returns a boolean indicating whether the value is an object with a name property and an age property. Use this function to check the type of the data variable."

function isData(value:number|{name:string,age:number}){
  if(typeof value ==="object" && "name" in value && "age" in value){
    return true;
  }
  else{
    return false;
  }
  
}
console.log(isData(5));//false
console.log(isData({name:"Huma", age:35}));//true

//8- Can you create a type guard function called isStringOrNumber that takes a value of type string | number and returns a boolean indicating whether the value is a string or a number?
function isStringOrNumber(value:string|number){
 if ( typeof value==="string" || typeof value==="number"){
return true;
  }
  else{
    return false;
  }
}
console.log(isStringOrNumber("Hello Programmer!"));//true
console.log(isStringOrNumber(25))//true

//9-Can you create a type guard function called isArray that takes a value of type unknown and returns a boolean indicating whether the value is an array?

function isArray(value:unknown):boolean{
  return Array.isArray(value)
    
  }
console.log(isArray(["ali","ahmed","ayesha"]));//true
console.log(isArray("huma"));//false
console.log(isArray(34));//false

//10-Can you create a type guard function called isObject that takes a value of type unknown and returns a boolean indicating whether the value is an object?
function isObject(value:unknown):boolean{
  if(typeof value==="object"){
    return true;
  }
  else{
    return false;
  }
}
console.log(isObject(34));//false
console.log(isObject("hello"));//false
console.log(isObject({name:"huma"}));//true