/* string literal types are a type that represents a specific value of string.
 */
let animal = "cat";
//This ensures that the color variable can only hold one of the specified color values, making our code more predictable and less prone to errors.
let color = "Red";
//  color="red"; //type red is not assignable to type Red.
color = "BLue";
color = "Yellow";
export {};
/*Advantage:
code safety
improved maintainability
reduced typos
type inference involves
enum like behaviour.




1. What is the purpose of string literal types in TypeScript?

a) To define a new string type
b) To restrict a variable to a specific string value (correct)
c) To create an enum
d) To define a function signature

1. Which of the following is an example of a string literal type?

a) type Color = string;
b) type Color = 'red' | 'green' | 'blue'; (correct)
c) type Color = number;
d) type Color = boolean;

1. What happens when you try to assign a value that is not part of the string literal type?

a) TypeScript throws a compile-time error (correct)
b) TypeScript throws a runtime error
c) The code compiles successfully
d) The code runs successfully

1. Can you use string literal types with other types, such as numbers or booleans?

a) Yes
b) No (correct)

you can't directly use string literal types with other types like numbers or booleans. However, you can use a union type to combine them, like this:
type MyType = 'hello' | 42 | true;

c) Only with numbers
d) Only with booleans

1. What is the benefit of using string literal types?

a) Improved code readability
b) Improved code safety   (correct)
c) Improved code performance
d) All of the above

1. Which keyword is used to define a string literal type in TypeScript?

a) type (string)
b) interface
c) enum
d) class


1. What is the syntax for defining a string literal type that can be either 'red' or 'green'?

a) type Color = 'red' | 'green'; (correct)
b) type Color = 'red' && 'green';
c) type Color = 'red' || 'green';
d) type Color = 'red' === 'green';


1. Can you use string literal types as function parameters?

a) Yes (correct)
b) No
c) Only for optional parameters
d) Only for required parameters


1. What happens when you try to assign a null value to a variable with a string literal type?

a) TypeScript throws a compile-time error (correct)
b) TypeScript throws a runtime error
c) The code compiles successfully
d) The code runs successfully


1. Can you use string literal types with the readonly keyword?

a) Yes (correct) const color: readonly 'red' | 'green' | 'blue' = 'red';
b) No
c) Only for arrays
d) Only for objects


*/
