/* classes are the blueprint/template/carbon copy for creating an object. 
4 pillars of oop:-
1- Inheritance.
2- Polymorphism.
3- Abstraction.
4- Encapsulation

Constructors are special methods that are used to initialize objects when they are created.
they donot inherit.
*/

class Person{
    name!:string;
    age:number|undefined
}
const person=new Person();
person.name="Huma";
person.age=35;
console.log(person);

class Product{
    name:string;
    price:number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
      }

    display(){
        console.log(`${this.name},has price ${this.price}`)
    }
}

class Student{
    id:number;
    name:string;
    course:string

    constructor (id:number,name:string,course:string){
        this.id=id;
        this.name=name;
        this.course=course;
    }
    displayStudentInformation(){
       console.log(`name: ${this.name} having enrolled in ${this.course}`)
    }
}
console.log(Student);//Person { name: 'Huma', age: 35 }

const std1=new Student(123,"huma","GenAi");
std1.displayStudentInformation();//name: huma having enrolled in GenAi
console.log(std1.course);//GenAi

//constructor is a checker , during an instance constructor checks that all properties are mentioned in a classs must be initialize during creating an instance. It keeps check and balance of properties in a class and an instance.

//creating an instance 2 of class Student.


const std2=new Student(456,"sana","BlockChain");
std2.displayStudentInformation();
console.log(std2.name);

const std3=new Student(987,"Ayesha","web3.0 Metaverse");
std3.displayStudentInformation();
console.log(std3.id);
/*1. What is the primary purpose of a class in OOP?
a) To create objects  (correct)
b) To define a data type
c) To encapsulate data and behavior
d) To inherit properties

2. Which of the following is a characteristic of a class?
a) It is an instance of an object 
b) It defines a set of properties and methods  (correct)
c) It is a single object
d) It cannot be instantiated

3. What is the difference between a class and an object?
a) A class is an object, while an object is an instance (correct)
b) A class is an instance, while an object is a definition
c) A class defines properties and methods, while an object has values and behavior (correct)
d) A class is a single entity, while an object is a collection

4. What is inheritance in OOP?
a) The process of creating a new class from an existing class (correct)
b) The process of creating an object from a class
c) The process of defining a class
d) The process of instantiating an object

5. Which of the following is a type of inheritance?
a) Single inheritance
b) Multiple inheritance
c) Multilevel inheritance
d) All of the above (correct)

6. What is polymorphism in OOP?
a) The ability of an object to take multiple forms (correct)
b) The ability of a class to inherit properties
c) The ability of an object to be instantiated multiple times
d) The ability of a class to define multiple methods

7. What is encapsulation in OOP?
a) The process of hiding internal implementation details (correct)
b) The process of exposing internal implementation details
c) The process of defining a class
d) The process of instantiating an object

8. Which of the following is an example of encapsulation?
a) A public method accessing a private field (correct)
b) A private method accessing a public field
c) A public field being accessed directly 
d) A private field being accessed directly

9. What is abstraction in OOP?
a) The process of showing only necessary information (corrrect)
b) The process of showing all information 
c) The process of defining a class 
d) The process of instantiating an object

10. Which of the following is an example of abstraction?
a) A car object exposing only its speed and color (correct)
b) A car object exposing its entire internal implementation
c) A car object being instantiated multiple times
d) A car object being defined as a class */

