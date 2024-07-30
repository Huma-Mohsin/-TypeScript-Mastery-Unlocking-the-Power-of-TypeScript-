/*Inheritance is an important part of Object Oriented Program. Inheritance refers to a Mechanism in which a subclass inherits all features of its BaseClass.

Parent Class is called Base Class while child class is called Sub Class.

Inheritance is acheived by extend keyword.*/

class Citizen{
    name:string;
    age:number;
    IsCitizen:boolean;
    country:string
    city :string;
    constructor(name:string,age:number,IsCitizen:boolean,country:string,city:string){
        this.name=name;
        this.age=age;
        this.IsCitizen=IsCitizen;
        this.country=country;
        this.city=city;
    }
    getCitizenInfo(){
        return `${this.name} is ${this.age} years old`
    }
}

class Employee extends Citizen{
    employeeid:number;
    designation:string;

constructor(name:string,age:number,IsCitizen:boolean,country:string,city:string,employeeid:number,designation:string){
    super(name, age, IsCitizen, country, city);
   
    this.employeeid=employeeid;
    this.designation=designation;
}

ShowEmployeeId(){
    return `Employeee Id: ${this.employeeid}`
}


}

const emp1=new Employee("Shahid",31,true,"Pakistan","karachi",1256,"enginner");
console.log(emp1.ShowEmployeeId());
console.log(emp1.designation);
console.log(emp1);

/* 1. What is inheritance in OOP?
a) The process of creating a new class from an existing class (correct)
b) The process of creating an object from a class
c) The process of defining a class
d) The process of instantiating an object

2. Which of the following is a type of inheritance?
a) Single inheritance
b) Multiple inheritance
c) Multilevel inheritance
d) All of the above (correct)

3. What is the purpose of the super keyword in inheritance?
a) To access the parent class's constructor(correct)
b) To access the parent class's methods(correct)
c) To access the parent class's properties (correct)
d) To create a new object

4. What happens when a subclass overrides a method of its parent class?
a) The parent class's method is hidden
b) The parent class's method is overridden (correct)
c) The subclass's method is hidden
d) The subclass's method is overridden

5. Can a subclass inherit the private members of its parent class?
a) Yes 
b) No
c) Only if the subclass is in the same package
d) Only if the subclass is in a different package

6. What is the difference between method overriding and method overloading?
a) Method overriding is used for inheritance, while method overloading is used for polymorphism
b) Method overriding is used for polymorphism, while method overloading is used for inheritance (correct)
c) Method overriding is used for static methods, while method overloading is used for instance methods
d) Method overriding is used for instance methods, while method overloading is used for static methods

7. Can a subclass have a different return type for an overridden method?
a) Yes 
b) No
c) Only if the return type is a subclass of the original return type (correct)
d) Only if the return type is a superclass of the original return type

8. What is the purpose of the extends keyword in inheritance?
a) To inherit properties from a parent class (correct)
b) To inherit methods from a parent class
c) To create a new class based on an existing class
d) To create a new object based on an existing class

9. Can a subclass inherit the constructors of its parent class?
a) Yes
b) No (correct)
c) Only if the constructors are public
d) Only if the constructors are private

10. What is the difference between inheritance and composition?
a) Inheritance is used for code reuse, while composition is used for code organization (correct)
b) Inheritance is used for code organization, while composition is used for code reuse
c) Inheritance is used for static methods, while composition is used for instance methods
d) Inheritance is used for instance methods, while composition is used for static methods


 */