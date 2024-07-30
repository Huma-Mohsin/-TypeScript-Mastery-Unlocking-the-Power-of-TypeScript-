/*Enum is a set of named values.

By default an enum is a numeric.

enum is helpful for providing an index when value is given of a particular , or providing a value when index is given of that particular named value.

in enum, we can define or customize index for a particular named values.

in numeric enum +1 is automatically incremenat to each index value.

we can define enum by using enum keyword.
 
we access properties like an array or an object.

*/
//by Default numeric enum
var Directions;
(function (Directions) {
    Directions[Directions["north"] = 0] = "north";
    Directions[Directions["south"] = 1] = "south";
    Directions[Directions["east"] = 2] = "east";
    Directions[Directions["west"] = 3] = "west";
})(Directions || (Directions = {}));
let dir1 = Directions.east; //2
console.log(dir1);
let dir2 = Directions["south"]; //1
console.log(dir2);
let dir3 = Directions[3]; //west
console.log(dir3);
let dir4 = Directions[5];
console.log(dir4); //undefined
//string enum and num enums mix.===lead to unepected behaiour
var person;
(function (person) {
    person[person["id"] = 0] = "id";
    person["name"] = "Huma";
    person["student"] = "Yes";
    person["center"] = "Governor House karachi";
    person[person["courses"] = 2] = "courses";
    person[person["NumberOfDaya"] = 3] = "NumberOfDaya";
})(person || (person = {}));
let p1 = person.center;
console.log(p1); //Governor House karachi
let p2 = person["NumberOfDaya"];
console.log(p2); //3
let p3 = person.id;
console.log(p3); //0
let p4 = person[3];
console.log(p4); //NumberOfDaya
// let p5:person=person[0];
// console.log(p5)
//Customize index value
var status;
(function (status) {
    status[status["pending"] = 100] = "pending";
    status[status["fullfilled"] = 400] = "fullfilled";
    status[status["rejected"] = 404] = "rejected";
})(status || (status = {}));
let s1 = status["rejected"];
console.log(s1);
let st1 = 0 /* stationary["red"] */;
console.log(st1); //0
// let st2:stationary=stationary[5];//A const enum member can only be accessed using a string literal.
let st2 = "blues" /* stationary.blue */;
console.log(st2); //blues
export {};
/*

/*
Enum MCQs

1. What is the default type of an enum in TypeScript?
a) String
b) Numeric (correct)
c) Boolean
d) Object

2. How do you access an enum member by its index?
a) Using the dot notation (e.g., Enum.member)
b) Using the bracket notation (e.g., Enum[0])(correct)
c) Using the Enum.valueOf() method
d) Using the Enum.getIndex() method

3. Can you mix string and numeric values in an enum?
a) Yes(correct but it can leads to unexpected behaviour.)
b) No
c) Only in const enums
d) Only in numeric enums

Const Enum MCQs

1. What is the main difference between an enum and a const enum?
a) Const enums are immutable
b) Const enums are mutable
c) Const enums can only be accessed using a string literal(correct)
d) Const enums cannot be used in interfaces

2. Why would you use a const enum instead of a regular enum?
a) To make the enum mutable
b) To make the enum immutable(correct)
c) To improve performance
d) To reduce memory usage

3. Can you use a const enum member as a value in an interface?
a) Yes (Correct)
b) No
c) Only if the interface is also const
d) Only if the interface is not const

 */
/*
Enum MCQs

1. What is the purpose of an enum in TypeScript?
a) To create a new data type
b) To group related constants
c) To improve code readability
d) All of the above (correct)

2. How do you define an enum in TypeScript?
a) Using the enum keyword (correct)
b) Using the const keyword
c) Using the let keyword
d) Using the var keyword

3. Can you extend an existing enum in TypeScript?
a) Yes (correct,with regular enum)
b) No
c) Only using inheritance
d) Only using composition

4. What happens when you assign a value to an enum member that is already assigned?
a) TypeScript throws an error (corrrect)
b) The new value overwrites the old value
c) The enum member becomes undefined
d) Nothing happens

5. Can you use an enum as a type in TypeScript?
a) Yes (correct)
b) No
c) Only for function parameters
d) Only for variable declarations

Const Enum MCQs

1. What is the main advantage of using a const enum over a regular enum?
a) Improved performance
b) Reduced memory usage
c) Immutable values(correct)
d) All of the above

2. Can you use a const enum in a TypeScript interface?
a) Yes
b) No (correct)
c) Only as a property type
d) Only as a method return type

3. How do you define a const enum in TypeScript?
a) Using the const enum keywords (correct)
b) Using the enum keyword with the const keyword
c) Using the const keyword with the enum keyword
d) Using only the const keyword

4. Can you assign a value to a const enum member?
a) Yes
b) No (corrrect)
c) Only during declaration
d) Only after declaration

5. What happens when you try to access a const enum member using a numeric index?
a) TypeScript throws an error (corrrect)
b) The enum member is returned
c) Undefined is returned
d) Null is returned
 */
/*
differnce b/w  regular enums and const enums:-

regular enums are:-
 mutable.
 extends, allow to add properties.
 can be used as a value or type.
 it is like an object with properties.


 const enums are:-
 immutable, cannot extendable.
 allows to use as a value or type.
 it is a value not an object.

*/
