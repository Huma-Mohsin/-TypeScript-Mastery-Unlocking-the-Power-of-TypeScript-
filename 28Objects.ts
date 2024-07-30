// Objects are the non primitive data types.
// In Objects, information of a particular entity is placed on a key value pair.
// Objects are complex data type that is used to organize an information.
// We make objects as const such that the information in an object does not change.
//to define the structure of an object or make a contract for an object we use interface as well as type alias.

import { createLanguageService, OptionalChain } from "typescript";

interface Person {
  name: string;
  age?: number;
  isAnEmployee: boolean;
  isAStudent: boolean;
  address: {
    house: string;
    city: string;
    postalCode?: number;
  };
  "phone number": number;
  hobbies: string[];
  greet(): void;
  Gender?: string;
}
const person: Person = {
  name: "Ali",
  age: 45,
  isAnEmployee: true,
  isAStudent: false,
  address: {
    house: "A45",
    city: "Karachi",
    postalCode: 12345,
  },
  "phone number": 123456789,
  hobbies: ["playing ", "listening music", "travelling"],
  greet: function () {
    console.log(`Good morning ${this.name}`);
  },
  Gender: "Male",
};

console.log(person.greet()); //Good morning Ali Ahmed | undefined
//calls the greet function and logs its return value to the console.

//1-accessing properties of an object.
console.log(person.greet); //[Function: greet]
//logs the greet function to the console itself not its return value.
console.log(person.hobbies); // [ 'playing ', 'listening music', 'travelling' ]
console.log(person.name); //Ali

//2-To set values of any property
person.name = "Ali Ahmed";
console.log(person.name);

person.hobbies[2] = "read tech news";
console.log(person.hobbies); //[ 'playing ', 'listening music', 'read tech news' ]

(person.hobbies[3] = "dancing"), console.log(person.hobbies); //[ 'playing ', 'listening music', 'read tech news', 'dancing' ]
person.hobbies.push("swimming");
console.log(person.hobbies); //[ 'playing ','listening music','read tech news','dancing''swimming']

//3- delete property
delete person.address.postalCode;
console.log(person);

delete person.age;
console.log(person);
/*output as:

{
  name: 'Ali Ahmed',
  isAnEmployee: true,
  isAStudent: false,
  address: { house: 'A45', city: 'Karachi' },
  'phone number': 123456789,
  hobbies: [
    'playing ',
    'listening music',
    'read tech news',
    'dancing',
    'swimming'
  ],
  greet: [Function: greet] // -indicating that the property greet is a function.

}
*/
Object.assign(person, { salary: 25000 }); // Object.assign allows you to add property with value in an object w/o updating an interface.
console.log(person);

/*Exercises 
Test: Working with Objects

1. What is the output of the following code?


const person = {
  name: 'Ali',
  age: 30
};

console.log(person.name);//Ali


A) undefined
B) Ali
C) 30
D) Error

2. Which of the following is a valid way to add a new property to an object?

A) person.newProperty = 'value';  //correct
B) person['newProperty'] = 'value';    //correct
C) person.newProperty = 'value'; and person['newProperty'] = 'value';
D) Neither A nor B

3. What is the purpose of the interface keyword in TypeScript?

A) To define a class
B) To define an object's structure (Correct)
C) To define a function
D) To define an array

4. How do you access a property of an object using bracket notation?

A) person['property'](correct)
B) person.property
C) person->property
D) person@property

5. What is the output of the following code?


const person = {
  name: 'Ali',
  age: 30
};

delete person.age;

console.log(person);


A) { name: 'Ali', age: 30 }
B) { name: 'Ali' } (correct)
C) undefined
D) Error



*/

//Test: Working with Objects (Part 2)

//1. What is the output of the following code?

const person2 = {
  name: "Ali",
  age: 30,
};

person.age = 31;

console.log(person2.age); //31

/*
A) 30
B) 31
C) undefined
D) Error  */

/* 2. How do you merge two objects in TypeScript?

A) Using the + operator
B) Using the Object.assign() method
C) Using the spread operator (...)   (correct)
D) Using the Object.merge() method */

/* 3. What is the purpose of the readonly keyword in TypeScript?

A) To make a property writable
B) To make a property readable
C) To make a property immutable (correct)
D) To make a property optional */

//4. What is the output of the following code?

const person5 = {
  name: "Ali",
  age: 30,
};

console.log(person5["name"]);

/* A) Ali  (correct)
B) 30
C) undefined
D) Error
*/
/*
5. How do you check if a property exists in an object?

A) Using the in operator  (correct)
B) Using the hasOwnProperty() method
C) Using the typeof operator
D) Using the === operator */

/*Test: Working with Objects (Part 3)

1. Find the error in the following code:


const person = {
  name: 'Ali',
  age: 30
};

person.occupation = 'Developer'; // Error: Property 'occupation' does not exist on type '{ name: string; age: number; }'.

console.log(person);


A) The property occupation is not defined in the object. (correct if exist then ressigned.)
B) The property occupation is defined but has the wrong type.
C) The object person is not defined.
D) The console.log statement is incorrect.*/

// 2. Write a function that takes an object as an argument and returns a new object with the same properties, but with all property names converted to uppercase.

type Student = {
  [key: string]: string | number | boolean;
  name: string;
  age: number;
  IscourseEnrolled: boolean;
};
function student(std: Student) {
  let newobj: { [key: string]: any } = {};
  for (let key in std) {
    newobj[key.toUpperCase()] = std[key];
  }
  return newobj;
}

console.log(student({ name: "Huma", age: 35, IscourseEnrolled: true }));

/*
3. Find the error in the following code:


const person = {
  name: 'Ali',
  age: 30
};

console.log(person['address']); // Error: undefined


A) The property address is not defined in the object.(correct)
B) The property address is defined but has the wrong type.
C) The object person is not defined.
D) The console.log statement is incorrect.*/

// 4. Write a function that takes an object as an argument and returns an array of its property names.
function stdobj(std2: Student) {
  let arr: string[] = [];
  for (let key in std2) {
    arr.push(key);
  }
  return arr;
}
console.log(stdobj({ name: "Huma", age: 35, IscourseEnrolled: true }));

/*5. Find the error in the following code:


const person = {
  name: 'Ali',
  age: 30
};

person.age = 'thirty'; // Error: Type 'string' is not assignable to type 'number'.


A) The property age is not defined in the object.
B) The property age is defined but has the wrong type.(correct)
C) The object person is not defined.
D) The assignment statement is incorrect.*/

/*
Question 6: Write a function that takes an object as an argument and returns a new object with only the properties that have truthy values.*/
interface student {
  [indexSignature: string]: string | boolean | number;
  name: string;
  gender: string;
  age: number;
  IsFacultyMember: boolean;
}

function truthyvalue(std3: student) {
  let result: { [indexSignature: string]: any } = {};
  for (const key in std3) {
    if (std3[key] !== undefined && std3[key] !== null && !!std3[key]) {
      result[key] = std3[key];
    }
  }
  return result;
}
console.log(
  truthyvalue({
    name: "sara",
    gender: "female",
    age: 23,
    IsFacultyMember: true,
  })
);

/*
What will be the output of the following code?*/

const obj = { a: 1, b: 2, c: 3 };
console.log(obj["a"] + obj["b"] + obj["c"]); //1+2+3=6

/*
A) 1
B) 3
C) 6
D) undefined */

//-------------------------------------
const obj1 = { a: 1, b: 2 };
console.log(obj1.a + obj1.b); //1+2=3

//-----------------------------------------

const obj2: any = { a: 1, b: 2 };
obj2.c = 3;
console.log(obj2); //{ a: 1, b: 2 ,c:3};

//----------------------------------------

const obj3: {
  a?: number;
  b: number;
} = { a: 1, b: 2 };
delete obj3.a;
console.log(obj3); //{ b: 2 }

/*

A) { a: 1, b: 2 }
B) { b: 2 }
C) { a: undefined, b: 2 }
D) undefined*/

//-----------------------------------------------------

const obj4 = { a: 1, b: 2 };
console.log(obj4.hasOwnProperty("a")); //hasownproperty methods shows that a particular property has an objects own and it is not inherited by parent.
// true b/c obj4 has a property of its own.

//----------------------------------------------------

const obj5 = { a: 1, b: 2 };
console.log(Object.keys(obj5)); //["a", "b"], object.key returns an array

// A) ["a", "b"]
// B) ["1", "2"]
// C) ["a": 1, "b": 2]
// D) { a: 1, b: 2 }

const obj6 = { a: 1, b: 2 };
console.log(Object.values(obj6)); //[ 1, 2 ],Object.values returns an array of value.
console.log(Object.entries(obj6)); //shows an array of key value pair.
console.log(obj6.hasOwnProperty("b")); //true

//-------------------------------------------------------------------

const obj7: any = { a: 1, b: 2, c: 3 };
delete obj7.b;
console.log(obj7); //B) { a: 1, c: 3 }

/*
A) { a: 1, b: 2, c: 3 }
B) { a: 1, c: 3 }
C) { a: 1, b: undefined, c: 3 }
D) undefined*/

/*Exercises:

1- Create an object called person that has the following properties:

- name with a value of "John Doe"
- age with a value of 30
- occupation with a value of "Software Developer"
*/

const Person = {
  name: "John Doe",
  age: 23,
  occupation: "Software Developer",
};

/*2----
Create an object called book that has the following properties:

- title with a value of "To Kill a Mockingbird"
- author with a value of "Harper Lee"
- year with a value of 1960

Please write the JavaScript code to create this object.*/

const Book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
};

/*3- Create an object called student that has the following properties:

- name with a value of "John Doe"
- grade with a value of 12
- subjects with a value of an array containing "Math", "Science", and "English" */
const Student = {
  name: "John Doe",
  grade: 12,
  subjects: ["Math", "Science", "English"],
};

/*
Task:

Create an object called employee with the following properties:

- name with a value of "Emily Chen"
- age with a value of 28
- department with a value of "Marketing"
- skills with a value of an array containing "JavaScript", "HTML", and "CSS"

Operations:

1. Add a new property called country with a value of "USA" to the employee object.
2. Update the age property to 29.
3. Remove the department property from the employee object.
4. Add a new skill "React" to the skills array.
5. Log the updated employee object to the console.

Please write the JavaScript code to create the object and perform these operations. I'll wait for your response! */

const employee: any = {
  name: "Emily Chen",
  age: 28,
  department: "Marketing",
  skills: ["JavaScript", "HTML", "CSS"],
};
//operations -1
employee.country = "USA"; //add new property in an employee obj.
console.log(employee); //check

//operations -2
employee.age = 29; //update data
console.log(employee);

//operation -3
delete employee.department;
console.log(employee);

//operation -4
employee.skills.push("React"); //add new skills
//operation -5
console.log(employee); //log object

/*Task:

Create an object called book with the following properties:

- title with a value of "To Kill a Mockingbird"
- author with a value of "Harper Lee"
- year with a value of 1960
- genres with a value of an array containing "Fiction", "Classic", and "Novel"

Operations:

1. Add a new property called publisher with a value of "J.B. Lippincott & Co." to the book object.
2. Update the year property to 1961.
3. Remove the genres property from the book object.
4. Add a new property called rating with a value of 4.5 to the book object.
5. Log the updated book object to the console.
*/
interface Book {
  title: string;
  author: string;
  year: number;
  genres: string[];
  [key: string]: string | number | string[];
}
let book: Book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
  genres: ["Fiction", "Classic", "Novel"],
};

// operations:
// 1-add new property.
book.publisher = "J.B. Lippincott & Co.";
console.log(book);

//2-  Update the year property to 1961.
book.year = 1961;
console.log(book);

//3- Remove the genres property from the book object.
// if(book.genres!==undefined){

//   delete book.genres;
// }

delete (book as { genres?: string[] }).genres;
console.log(book);

//4-Add a new property called rating with a value of 4.5 to the book object.

book.rating = 4.5;

//5-Logs final object.
console.log(book);
//--------------------------------------------------------------------------
/*Consider the following interface:


interface User {
  name: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  orders: {
    [key: string]: {
      items: string[];
      total: number;
    };
  };
  calculateTotalOrders(): number;
}


1. How would you create a new User object that meets this interface?
2. How would you access the city property of the address object?
3. How would you add a new order to the orders object with a key of 'order-1' and an items array containing 'item-1' and 'item-2'?
4. How would you implement the calculateTotalOrders() method to return the sum of all order totals? */
interface User {
  name: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  orders: {
    [key: string]: {
      items: string[];
      total: number;
    };
  };
  calculateTotalOrders(): number;
}

const user: User = {
  name: "Ali",
  address: {
    street: "A5",
    city: "Karachi",
    state: "Pakistan",
    zip: "75100",
  },
  orders: {
    "order-1": {
      items: ["mango", "apple"],
      total: 20,
    },
  }, //4. How would you implement the calculateTotalOrders() method to return the sum of all order totals?
  calculateTotalOrders() {
    let total = 0;
    for (const order in this.orders) {
      total += this.orders[order].total;
    }
    return total;
  },
};
//accessing vity property

console.log(user.address.city);

/* 
Create an interface called Person with the following properties:

- name (string)
- age (number)
- address (object with street, city, and state properties)
- hobbies (array of strings)

Create an object called john that meets the Person interface.

1. Access and log John's name and age.
2. Rename John's name to "Jonathan".
3. Add a new hobby to John's hobbies array.
4. Delete John's age property.
5. Access and log John's address, including street, city, and state.  */

interface Persons {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
    state: string;
  };

  hobbies: string[];
  greet(): void;
}
//Create an object called john that meets the Person interface.
const john: Persons = {
  name: "John",
  age: 28,
  address: {
    street: "House A60",
    city: "Karachi",
    state: "Sindh",
  },
  hobbies: ["Playing Squash", "travelling"],
  greet() {
    console.log(`hello ${this.name}`);
  },
};

//1. Access and log John's name and age.
console.log(john.name);
console.log(john.age);
//2. Rename John's name to "Jonathan".
john.name = "Jonathan";
console.log(john.name);
//3. Add a new hobby to John's hobbies array.
john.hobbies.push("Coding");
console.log(john.hobbies);
//4. Delete John's age property.
delete (john as { age?: number }).age;
console.log(john);
//5. Access and log John's address, including street, city, and state.
console.log(john.address);

/* Create two interfaces, Vehicle and Car, where Car extends Vehicle. The Vehicle interface should have the following properties:

- make (string)
- model (string)
- year (number)

The Car interface should extend Vehicle and add the following properties:

- doors (number)
- transmission (string)

Create an object called myCar that meets the Car interface.

1. Access and log the make and model of myCar.
2. Add a new property called color to myCar with the value "Red".
3. Rename the transmission property of myCar to "automatic".
4. Delete the doors property from myCar.
5. Access and log the year property of myCar.
 */
interface Vehicle {
  make: string;
  model: string;
  year: number;
  color:string;
}
interface Car extends Vehicle{
  doors:number;
  transmission:string
}
//Create an object called myCar that meets the Car interface.
const myCar:Car={
  make: "Honda",
  model: "prosmatic",
  year: 2005,
  doors:4,
  transmission:"Hybrid",
  color:"blue",

}
//1. Access and log the make and model of myCar.
console.log(myCar.make);
console.log(myCar.model);

//2. Add a new property called color to myCar with the value "Red".
myCar.color="Red";
console.log(myCar);
//3. Rename the transmission property of myCar to "automatic".
myCar.transmission="automatic";
console.log(myCar);
//4. Delete the doors property from myCar.
delete (myCar as { doors?:number }).doors
//5. Access and log the year property of myCar. */
console.log(myCar.year);

/* Create an interface called Employee with the following properties:

- name (string)
- age (number)
- address (nested object with street, city, and state properties)
- salary (number)

Create an interface called Manager that extends Employee and adds the following properties:

- teamSize (number)
- department (string)

Create an object called john that meets the Manager interface.

1. Access and log John's name and age.
2. Add a new property called bonus to John's object with the value 10000.
3. Create a method called getAddress that returns John's address as a string.
4. Rename the teamSize property to teamMembers.
5. Delete the department property from John's object.
6. Access and log John's salary.
 */
interface Employee{
  name:string,
  age:number,
  address:{
    street:string,
    city:string,
    state:string,
  },
  salary:number,
}
interface Manager extends Employee{
  teamSize:number,
  department:string,
  getAddress?(): void,
  
}
//Create an object called john that meets the Manager interface.
const johny:Manager={
  name:"John",
  age:25,
  address:{
    street:"HouseA46",
    city:"karachi",
    state:"Sindh",
    
  },
  salary:45000,
  teamSize:20,
  department:"Software Quality Assurance ",

  }

//1. Access and log John's name and age.
console.log(johny.name);
console.log(johny.age);
//2. Add a new property called bonus to John's object with the value 10000.
(johny as {[key:string]:any}).bonus=1000;
console.log(johny);
//3. Create a method called getAddress that returns John's address as a string.

(johny as { getAddress: () => void }) = {
  getAddress: function () {
    console.log(`${johny.name} has address ${johny.address.street}, ${johny.address.city}, ${johny.address.state}`);
  },

  
};
//4. Rename the teamSize property to teamMembers.
 (johny as any).teamMembers=johny.teamSize;
 delete (johny as any ).teamSize;
 console.log(johny);
  //5. Delete the department property from John's object.
delete (johny as{department?:string}).department;
console.log(johny);
//6. Access and log John's salary.
console.log(johny.salary);
