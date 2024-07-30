/* classes are the blueprint/template/carbon copy for creating an object.
4 pillars of oop:-
1- Inheritance.
2- Polymorphism.
3- Abstraction.
4- Encapsulation
*/
class Person {
    name;
    age;
}
const person = new Person();
person.name = "Huma";
person.age = 35;
console.log(person);
class Product {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    display() {
        console.log(`${this.name},has price ${this.price}`);
    }
}
class Student {
    id;
    name;
    course;
    constructor(id, name, course) {
        this.id = id;
        this.name = name;
        this.course = course;
    }
    displayStudentInformation() {
        console.log(`name: ${this.name} having enrolled in ${this.course}`);
    }
}
console.log(Student); //Person { name: 'Huma', age: 35 }
const std1 = new Student(123, "huma", "GenAi");
std1.displayStudentInformation(); //name: huma having enrolled in GenAi
console.log(std1.course); //GenAi
//constructor is a checker , during an instance constructor checks that all properties are mentioned in a classs must be initialize during creating an instance. It keeps check and balance of properties in a class and an instance.
//creating an instance 2 of class Student.
const std2 = new Student(456, "sana", "BlockChain");
std2.displayStudentInformation();
console.log(std2.name);
const std3 = new Student(987, "Ayesha", "web3.0 Metaverse");
std3.displayStudentInformation();
console.log(std3.id);
export {};
