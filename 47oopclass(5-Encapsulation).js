/* Encapsulation is like protective wrapper around an object's internal working.

It hides all internal information and expose only necessary information.

3 Modifiers used in Encapssulation process.
1- public.
2-private
3- protected

1- Public
by defaiult the information is public. When public modifier is used then its member can be available outside a class also.

2- Private

When we make class , we can make its member private such that these members cannot be available for outside a class.

Private class is not available for inheritance.

For Naming Convention, we use _ for the property which is private.

3- Protected:-

Methods and properties are aavailable with in a class.

Protected modifiers allows inheritance.

properties can be accessible through a sub class when inheried.

protected members cannot be accessible outside a class.

 */
//Public Property
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
}
let p1 = new Person("Tahir");
console.log(p1);
//-------------------------------------------------------------------------------------------
class Man {
    _name;
    gender;
    constructor(name, gender) {
        this._name = name;
        this.gender = "gender";
    }
    get Name() {
        return this._name;
    }
}
let p2 = new Man("Hashim", "male");
console.log(p2);
//-------------------------------------------------------------------------------------------
class Person1 {
    _name;
    constructor(name) {
        this._name = name;
    }
    getNamee() {
        return this._name;
    }
}
let p3 = new Person1("Abdullah");
console.log(p3);
console.log(p3 instanceof Person1);
//---------------------------------------------------------------------------------------------
class Electronic {
    _model;
    color;
    constructor(model, color) {
        this._model = model;
        this.color = color;
    }
}
class Laptop extends Electronic {
}
let lptp = new Laptop("Lenevo125", "Black"); //inherit private property but not able to accessible below.
console.log(lptp);
console.log(lptp.color);
//  console.log(lptp._model)//Property '_model' is private and only accessible within class 'Electronic
//-------------------------------------------------------------------------------------------
class Book {
    _author;
    book;
    constructor(author, book) {
        this._author = author;
        this.book = book;
    }
}
class Reader extends Book {
    getBookName() {
        return this._author;
    }
}
let r1 = new Reader("David Kate", "TypeScript's Fundamental");
console.log(r1);
console.log(r1.book);
console.log(r1.getBookName());
class Confectionaries {
    company;
    nameOfproduct;
    constructor(company, product) {
        this.company = company;
        this.nameOfproduct = product;
    }
}
class StoreRoom extends Confectionaries {
}
let s1 = new StoreRoom("Candyland", "Bisconni biscuits");
console.log(s1.nameOfproduct);
//console.log(s1._company);//Property '_company' does not exist on type 'StoreRoom'.ts(2339)
//---------------------------------------------------------------------------------------------
class Women {
    //     private
    _name;
    age;
    constructor(name, age) {
        this._name = name;
        this.age = age;
    }
}
class Human extends Women {
    getName() {
        return this.age; // we donot get _name , if we want to get _name, we will make it protected.
    }
}
let h1 = new Human("zara", 12);
console.log(h1);
console.log(h1.getName);
console.log(h1.age);
export {};
/*
1. What is encapsulation in programming?
a) Hiding internal implementation details (true)
b) Showing all internal implementation details
c) Creating multiple objects from a single class
d) Inheriting properties from a parent class

2. Which of the following is an example of encapsulation?
a) A car's engine    (true)
b) A car's steering wheel
c) A car's speedometer
d) A car's wheels

3. What is the purpose of encapsulation?
a) To increase code complexity
b) To decrease code reusability
c) To improve code organization and hide internal details  (true)
d) To reduce code readability

4. Which of the following is a benefit of encapsulation?
a) Increased code duplication
b) Reduced code maintainability
c) Improved code modularity  (true)
d) Decreased code flexibility

5. Can encapsulation be achieved through abstraction?
a) Yes  (true)
b) No
c) Only partially
d) Only through inheritance

6. What is the difference between encapsulation and abstraction?
a) Encapsulation hides data, abstraction hides internal details  (true)
b) Encapsulation shows data, abstraction shows internal details
c) Encapsulation is used for inheritance, abstraction is used for polymorphism
d) Encapsulation is used for polymorphism, abstraction is used for inheritance

7. Can a class have both public and private members?
a) Yes  (true)
b) No
c) Only if the class is abstract
d) Only if the class is concrete

8. What is the purpose of access modifiers in encapsulation?
a) To restrict access to class members  (true)
b) To allow access to class members
c) To declare class members
d) To define class members

9. Can encapsulation improve code security?
a) Yes  (true)
b) No
c) Only partially
d) Only through encryption

10. Can encapsulation reduce code complexity?
a) Yes  (true)
b) No
c) Only partially
d) Only through abstraction

11. What is data hiding in encapsulation?
a) Hiding internal implementation details  (true)
b) Hiding data from external access
c) Hiding internal data structures
d) Hiding internal algorithms

12. Can encapsulation improve code reusability?
a) Yes (true)
b) No
c) Only partially
d) Only through inheritance

13. Can a class have multiple constructors in encapsulation?
a) Yes(true)
b) No
c) Only if the class is abstract
d) Only if the class is concrete

14. What is the purpose of the "this" keyword in encapsulation?
a) To refer to the current object  (true)
b) To refer to the parent class
c) To refer to the child class
d) To refer to the static members

15. Can encapsulation be used in inheritance?
a) Yes  (true)
b) No
c) Only partially
d) Only through polymorphism

16. Can encapsulation improve code maintainability?
a) Yes  (true)
b) No
c) Only partially
d) Only through abstraction

17. Can a class have both static and non-static members in encapsulation?
a) Yes  (true)
b) No
c) Only if the class is abstract
d) Only if the class is concrete

18. What is the difference between public and private access modifiers?
a) Public allows access, private restricts access  (true)
b) Public restricts access, private allows access
c) Public declares members, private defines members
d) Public defines members, private declares members

19. Can encapsulation reduce code duplication?
a) Yes  (true)
b) No
c) Only partially
d) Only through abstraction

20. Can encapsulation improve code flexibility?
a) Yes (true)
b) No
c) Only partially
d) Only through polymorphism
 */ 
