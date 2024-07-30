/*Type aliases is the way of creating a new type with existing type.

we use  type Aliases in a union type as a nick name of different data types .

we also use a type aliases in defining a structure of an object.

we use type aliases in defining a function's structure also.

we use type aliases in string literals also.

 type is the keyword used for type Aliases.

This practice improves code readability, maintainability ,make code concise and clean.*/

type datatype=string|boolean|number|string[]|number[]|{name:string};

let value:datatype="Zara";
 value=true;
 value=123;
 value=["a","b","c"];
 value=[1,2,3,4];
 value={name:"Qasim"};

 type Person={
    name:string,
    age:number,
    email:string,
    PhoneNumber:number,
 }

type Student={
stdId:number
}

//type intersecting is a feature in ts which allows you to combine multiple types into a single type.
type Person_Student= Person & Student;

let person:Person_Student={
    name:"Aqib",
    age:65,
    email:"aqib@yahoo.com",
    PhoneNumber:2340981,
    stdId:12564
}
console.log(person);

/* limitations of type alias is that  when we creating a structure with type alias , we donot use same name of two or more types  b/c it causes an error.

type aliases doesnot allow to merge properties using extends keyword.

we use intersection type to combine all properties of different types to a single type.

*/

/*
Questions:

1. What is a type alias in TypeScript, and how is it created?

Type aliases is a feature in Ts that allows us to create a new type with existing type and this new type is reffered to a variable as a data type .
we use type keyword for creating a type .


2. What are the benefits of using type aliases in TypeScript?

first and the most benefit of type aliases is that it provides a nickname for complex data type.
it makes our code cleaner, concise ,It improves maintainability of code by debugging easily.


3. Can you use type aliases to create a union type? If so, provide an example.

yes we can use type Aliases in making a union type.*/

type newtype=string|boolean|number;

let val:newtype;


//4. How do you use type aliases to define the structure of an object?
type s1={
    name:string,
    age:number,
}
type s2={
    address:string,
}
type s12=s1 &s2;
let newobj:s12={
    name:"ayesha",
    age:5,
    address:"house A23,block 4, karachi"
}

//5. What is the difference between a type alias and an interface in TypeScript?

//The main difference b/w them is that we use interface purely for objects, interface donot works on other data structures while type alias is used not only for defining a structure of a data type but also used as a shortcut or nickname for union types, string literal type, arrays etc. Both are used to combine multiple properties of different interfaces or types to provide a single interface or single type.

/*MCQs:

1. What keyword is used to create a type alias in TypeScript?
a) type  (correct)
b) alias
c) define
d) declare

2. Which of the following is a benefit of using type aliases?
a) Improved code performance
b) Reduced code readability 
c) Improved code maintainability (correct)
d) Increased code complexity

3. Can you use type aliases to create a union type?
a) Yes (Correct provides a nick name for multiple data types)
b) No
c) Only with primitive types
d) Only with object types

4. What is the purpose of using the & operator with type aliases?
a) To create a union type
b) To create an intersection type (correct)
c) To create a new type alias
d) To extend an existing type

5. Which of the following is a limitation of type aliases?
a) Cannot be used with union types
b) Cannot be used with object types
c) Cannot merge properties using the extends keyword (correct)
d) Cannot be used with primitive types

Questions:

//1. Can you use type aliases to create a type alias for a function type? If so, provide an example.

yes,we use type aliases for defining a function data type*/

type fun=(p1:number,p2:number)=> number
 
//2. How do you use type aliases to create a type alias for a tuple type?
type tup=[string,number];
let arr:tup=["sana",23];

/*MCQs:

1. What is the scope of a type alias?
a) Global
b) Local (correct)
c) Module
d) File

2. Can you use the same name for a type alias and an interface?
a) Yes
b) No
c) Only if they are in different modules (correct)
d) Only if they are in different files   (correct)

3. What happens if you try to assign a value of a different type to a variable with a type alias?
a) The code will compile successfully 
b) The code will throw a runtime error

c) The code will throw a compile-time error (correct)

b/c  When you assign a value of a different type to a variable with a type alias, TypeScript will throw a compile-time error. This is because type aliases are essentially nicknames for existing types, and TypeScript checks for type compatibility at compile-time.

For example:
type StringAlias = string;
let str: StringAlias = 42; // Error: Type 'number' is not assignable to type 'StringAlias'.


d) The code will throw a warning

4. Can you use type aliases with the readonly keyword?
a) Yes  (correct)

Type aliases can be used with the readonly keyword to create read-only properties.

For example:

type ReadOnlyString = readonly string;
const str: ReadOnlyString = 'hello';




b) No
c) Only with object types
d) Only with array types

5. How do you use type aliases to create a type alias for a conditional type?
a) Using the ? operator
b) Using the ! operator
c) Using the & operator
d) Using the | operator

//answer is that None of these operators are used to create a conditional type. Instead, the extends keyword is used.





*/









``