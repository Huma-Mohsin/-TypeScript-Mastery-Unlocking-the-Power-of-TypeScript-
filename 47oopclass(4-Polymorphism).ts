/* Polymorphism is a concept or a part of an OOP which allows to method overrides and methods overloading .

polymorphism means one object can have different forms, depending on the situation.*/

import { number } from "@inquirer/prompts"

class Shape{
    constructor() {}
   area(r?: number){
  console.log("calculating area...")
    }

    }


class Circle extends Shape{
area(r:number){

    let p=3.142;
        let area= p*(r*r);
    console.log("calculating circle area...",area);
}
}

class Square extends Shape{
    area(l:number){
        let p=3.142;
        let area=l*l
        console.log("calculating Square area...",area)
    }
}

const circle = new Circle();
circle.area(5); // Output: "Calculating circle area..." 78.55

const square = new Square();
square.area(4); // Output: "Calculating Square area..." 16

/*
1. What is polymorphism in programming?
a) Ability of an object to take multiple forms (true)
b) Ability of a class to inherit properties
c) Ability of a function to return multiple values
d) Ability of a variable to hold multiple data types

2. Which of the following is an example of polymorphism?
a) Method overloading (true)
b) Method overriding(true)
c) Function recursion
d) Variable assignment

3. What is method overloading?
a) Defining multiple methods with the same name but different parameters(true)
b) Defining multiple methods with the same name and same parameters
c) Defining a single method with multiple names
d) Defining a single method with no name

4. What is method overriding?
a) Defining a method in a subclass with the same name and parameters as in the superclass
b) Defining a method in a subclass with a different name and parameters than in the superclass(true)
c) Defining a method in a superclass with the same name and parameters as in the subclass
d) Defining a method in a superclass with a different name and parameters than in the subclass

5. Can polymorphism be achieved through function overloading?
a) Yes (true)
b) No
c) Only partially
d) Only through function overriding

6. Can polymorphism be achieved through operator overloading?
a) Yes (true)
b) No
c) Only partially
d) Only through function overloading

7. What is the purpose of the "virtual" keyword in polymorphism?
a) To declare a virtual function  (true)
b) To declare a non-virtual function
c) To override a virtual function
d) To hide a virtual function

8. Can polymorphism improve code reusability?
a) Yes (true)
b) No
c) Only partially
d) Only through encapsulation

9. Can polymorphism improve code maintainability?
a) Yes (true)
b) No
c) Only partially
d) Only through abstraction

10. Can polymorphism be used in inheritance?
a) Yes (true)
b) No
c) Only partially
d) Only through composition

11. What is the difference between compile-time polymorphism and runtime polymorphism?
a) Compile-time polymorphism occurs during compilation, runtime polymorphism occurs during execution (true)
b) Compile-time polymorphism occurs during execution, runtime polymorphism occurs during compilation
c) Compile-time polymorphism is achieved through function overloading, runtime polymorphism is achieved through function overriding
d) Compile-time polymorphism is achieved through function overriding, runtime polymorphism is achieved through function overloading

12. Can polymorphism be achieved through function templates?
a) Yes (true)
b) No
c) Only partially
d) Only through function pointers

13. Can polymorphism improve code flexibility?
a) Yes (true)
b) No
c) Only partially
d) Only through encapsulation

14. Can polymorphism reduce code duplication?
a) Yes  (true)
b) No
c) Only partially
d) Only through abstraction

15. Can polymorphism improve code readability?
a) Yes (true)
b) No
c) Only partially
d) Only through comments

16. Can polymorphism be used in object-oriented programming?
a) Yes (true)
b) No
c) Only partially
d) Only in functional programming

17. Can polymorphism be achieved through interface implementation?
a) Yes (true)
b) No
c) Only partially
d) Only through abstract classes

18. Can polymorphism improve code scalability?
a) Yes (true)
b) No
c) Only partially
d) Only through modularity

19. Can polymorphism reduce code complexity?
a) Yes (true)
b) No
c) Only partially
d) Only through simplification

20. Can polymorphism improve code reliability?
a) Yes (true)
b) No
c) Only partially
d) Only through testing */