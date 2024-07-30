/*Create a new object newPerson that combines the properties of two objects: person and address. Use the spread operator to achieve this.

Here are the objects:


const person = {
  name: "John Doe",
  age: 30,
};

const address = {
  street: "123 Main St",
  city: "Anytown",
  state: "CA",
  zip: "12345",
}; */

const person = {
    name: "John Doe",
    age: 30,
  };
  const address = {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  };
   const newPerson={
    ...person,
    ...address,
   }
   console.log(newPerson);

   /*
Create a new object updatedPerson that takes the newPerson object and adds a new property country with the value "USA". Also, update the age property to 31. Use the spread operator to achieve this.

Here's the newPerson object again:


const newPerson = {
  name: "John Doe",
  age: 30,
  street: "123 Main St",
  city: "Anytown",
  state: "CA",
  zip: "12345",
};


Your task is to create updatedPerson that looks like this:


{
  name: "John Doe",
  age: 31,
  street: "123 Main St",
  city: "Anytown",
  state: "CA",
  zip: "12345",
  country: "USA",
}

 */

const newPerson1 = {
    name: "John Doe",
    age: 30,
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  };

  const updatedperson={
    ...newPerson1,
    country:"USA",
  }
  updatedperson.age=31;
  console.log(updatedperson);

  /*Task: Create a new object copyObj that is a copy of the original object originalObj. Use the spread operator to achieve this.

Original Object:

const originalObj = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
};

Your Task: Create copyObj that is a copy of originalObj using the spread operator. */
const originalObj = {
    name: "John Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345",
    },
  };
  const copyObj={
    ...originalObj
  }

  console.log(copyObj);

  copyObj.name="Jimmy";
  originalObj.age=45;

  copyObj.address.zip="234567"

  console.log("originalObj",originalObj);
  console.log("copyObj",copyObj);

  /*Question:

Create a JavaScript program that:

1. Defines an interface Person with properties name (string), age (number), and address (object with properties street, city, and state).
2. Creates an object john that implements the Person interface.
3. Merges another interface Employee with properties employeeId (number) and department (string) into the Person interface.
4. Updates the john object to include the employeeId and department properties.
5. Creates a function printPersonDetails that takes a Person object as an argument and logs its properties to the console.
6. Iterates over the properties of the john object using for...in and logs each property name and value to the console.
7. Deletes the age property from the john object.
8. Checks if the john object has a property called department using the in operator.

Additional requirements:

- Use object destructuring to extract the name and address properties from the john object.
- Use the spread operator to merge the Employee interface into the Person interface.

Note: This question covers various aspects of objects, including interfaces, merging interfaces, objects in functions, working with properties, iteration, and more. */

interface Person extends Employee{
    name:string,age:number,address:{
        street:string,
        city:string,
        state:string,
    }

}
//2. Creates an object john that implements the Person interface.
const john:Person={
    name:"John Alexander",
    age:50,
    address:{
        street:"A24",
        city:"USA",
        state:"Washington",
        //4-update john object
    },
    employeeId:126584,
    department:"Enginerring"


    }


// 3. Merges another interface Employee with properties employeeId (number) and department (string) into the Person interface.
interface Employee {
    employeeId:number,
    department:string,

}
// 5. Creates a function printPersonDetails that takes a Person object as an argument and logs its properties to the console.

function printPersonDetails(param:Person){
    return JSON.stringify(param);//When you use template literals (`) with an object, JavaScript calls the `toString() method on that object. For objects, the default toString() method returns the string [object Object].

// To fix this, you need to access the specific properties of the john object, like this:

// return${param.name}, ${param.age}, ${param.address.street}, ${param.employeeId}, ${param.department}``

// Or, if you want to log all properties, you can use JSON.stringify():
}
console.log(printPersonDetails(john));

//6. Iterates over the properties of the john object using for...in and logs each property name and value to the console.

Object.entries(john).forEach(([key,value])=>console.log(`${key}:${john[key as keyof Person]}`));
//or
for(const key in john){
    if(typeof john[key as keyof Person]==="object"){

console.log(`${key}:${JSON.stringify(john[key as keyof Person])}`);
    }
    else{
    console.log(`${key}:${john[key as keyof Person]}`)
}


}
// 7. Deletes the age property from the john object.

delete (john  as {age?:number}).age;
console.log("John Object After Age deletion :", john);

// 8. Checks if the john object has a property called department using the in operator.
if("department" in john){
    console.log("yes")
    console.log(john)
}
else {
    console.log("No")
}

//Additional requirements:

//- Use object destructuring to extract the name and address properties from the john object.
console.log(john.name);
console.log(john.address);
//- Use the spread operator to merge the Employee interface into the Person interface.
interface PersonWithEmployee extends Person,Employee{}

/*// - Create a JavaScript program that:

1. Defines an interface Vehicle with properties make (string), model (string), and year (number).
2. Creates an object car that implements the Vehicle interface.
3. Adds a method startEngine to the car object.
4. Uses object destructuring to extract the make and model properties from the car object.
5. Uses the spread operator to merge the car object with another object additionalFeatures that has properties sunroof (boolean) and leatherSeats (boolean).
6. Iterates over the properties of the merged object using for...in and logs each property name and value to the console.
7. Deletes the year property from the merged object.
8. Checks if the merged object has a property called sunroof using the in operator.
9. Uses a type guard function to check if the merged object has a leatherSeats property. */


//1. Defines an interface Vehicle with properties make (string), model (string), and year (number).
interface Vehicle{
  make:string;
  model:string;
  year:number;
  startEngine():void;

}

// 5. Uses the spread operator to merge the car object with another object additionalFeatures that has properties sunroof (boolean) and leatherSeats (boolean).

interface additionalFeatures extends Vehicle{
  sunroof :boolean; 
   leatherSeats :boolean;
}


//  2. Creates an object car that implements the Vehicle interface.
const car:Vehicle={
  make:"KIA",
  model:"Sportage",
  year:2021,

  // 3. Adds a method startEngine to the car object.
  startEngine():void{
    console.log(`${this.make} ,model ${this.model} has automatic started engine.`)
  }

  

}

//  4. Uses object destructuring to extract the make and model properties from the car object.
console.log(car.make);
console.log(car.model);

//remaining part of q-5:-
// 5. Uses the spread operator to merge the car object with another object additionalFeatures that has properties sunroof (boolean) and leatherSeats (boolean).

const carWithExtraFeatures: additionalFeatures={
  ...car,
  sunroof:true,
  leatherSeats:true,
}
console.log(carWithExtraFeatures);

// 6. Iterates over the properties of the merged object using for...in and logs each property name and value to the console.
for(const key in carWithExtraFeatures){
  console.log(`${key} : ${ carWithExtraFeatures [key as keyof additionalFeatures]}`)
}

// 7. Deletes the year property from the merged object.

delete (carWithExtraFeatures as {year?:number}).year; //data type problem so here we i type assertion .
console.log(carWithExtraFeatures);

// 8. Checks if the merged object has a property called sunroof using the in operator.

if("sunroof" in carWithExtraFeatures){
  console.log("true");
  console.log(carWithExtraFeatures.sunroof);
}
else{
  console.log("false")
}

//9. Uses a type guard function to check if the merged object has a leatherSeats property. 

function hasLeatherSeats(param: any): boolean {
  return "leatherSeats" in param;
}

if (hasLeatherSeats(carWithExtraFeatures)) {
  console.log("Leather seats are available");
}

  /*Question: Write a type guard function isCar that takes an object vehicle as an argument and returns true if the object has a make and model property, and false otherwise. Then, use optional chaining to safely access the make and model properties of the vehicle object.

Example:

const vehicle = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2020
};

if (isCar(vehicle)) {
  console.log(`Make: ${vehicle?.make}, Model: ${vehicle?.model}`);
} else {
  console.log('Not a car');
}

Your task: Implement the isCar type guard function and use optional chaining to access the make and model properties. */

//solution:

//Write a type guard function isCar that takes an object vehicle as an argument and returns true if the object has a make and model property
function isCar(vehicle:{make:string,model:string}){
  return "make" in vehicle && "model" in vehicle
}

// use optional chaining to safely access the make and model properties of the vehicle object.


const vehicle={
  make:"KIA",
  model:"Sportage",

}

if(isCar(vehicle)){
  console.log(`Make:${vehicle?.make}, Model: ${vehicle?.model}`)

}
else{
  console.log(`Not A Car`)
}

/*Question: Write a function getVehicleInfo that takes an object vehicle as an argument and returns a string with the vehicle's information. The function should use optional chaining to safely access the make, model, and year properties of the vehicle object. If any of these properties are missing, the function should return a default message. */


function getVehicleInfo(vehicles:any){

if("make" in vehicles && "model" in vehicles && "year" in vehicles){
  return`vehicle has model ${vehicles.model} and has make ${vehicles.make} in ${vehicles.year}`
}
else {
  return `It is not a Vehicle. `
}



}
const vehicles={
  make:"Toyota",
  model:"Prosmatic",
  year:2020,

}
console.log(getVehicleInfo(vehicles))

/*Question: Write a function mergeVehicles that takes two objects, vehicle1 and vehicle2, as arguments and returns a new object that merges the properties of both vehicles. If a property exists in both objects, the value from vehicle2 should override the value from vehicle1. */

function mergeVehicles(vehicle1:any,vehicle2:any){
let newObj={...vehicle1,...vehicle2};
return newObj;
}
const vehicle1={
  make:"KIA",
  model:"Santro",
}
const vehicle2={
  make:"Honda",
  year:2023,
}

//If a property exists in both objects, the value from vehicle2 should override the value from vehicle1.

console.log(mergeVehicles(vehicle1,vehicle2));//{ make: 'Honda', model: 'Santro', year: 2023 } here  the value make from vehicle2 should override the value make from vehicle1 .