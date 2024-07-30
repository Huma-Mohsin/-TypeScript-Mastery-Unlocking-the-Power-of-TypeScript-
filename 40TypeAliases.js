/*Type aliases is the way of creating a new type with existing type.

we use  type Aliases in a union type as a nick name of different data types .

we also use a type aliases in defining a structure of an object.

we use type aliases in defining a function's structure also.

we use type aliases in string literals also.

 type is the keyword used for type Aliases.

This practice improves code readability, maintainability ,make code concise and clean.*/
let value = "Zara";
value = true;
value = 123;
value = ["a", "b", "c"];
value = [1, 2, 3, 4];
value = { name: "Qasim" };
let person = {
    name: "Aqib",
    age: 65,
    email: "aqib@yahoo.com",
    PhoneNumber: 2340981,
    stdId: 12564
};
console.log(person);
let val;
let newobj = {
    name: "ayesha",
    age: 5,
    address: "house A23,block 4, karachi"
};
let arr = ["sana", 23];
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
``;
export {};
