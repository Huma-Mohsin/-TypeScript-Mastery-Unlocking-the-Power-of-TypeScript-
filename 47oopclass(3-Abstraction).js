/* Abstraction class provides a set of standards that should be followed by other classes.

Abstraction class doesnot have its own instant.

Abstract class must be inherited by other class.

*/
class TicketReservation {
    flight;
    ticket_fair;
    constructor(flight, ticket_fair) {
        this.flight = flight;
        this.ticket_fair = ticket_fair;
    }
}
class Emirates extends TicketReservation {
    country;
    constructor(flight, ticket_fair, country) {
        super(flight, ticket_fair);
        this.country = country;
    }
    getFlight() {
        return this.flight;
    }
}
let f1 = new Emirates("Pk321", 55000, "Pakistan");
console.log(f1);
console.log(f1.getFlight());
export {};
/**
1. What is abstraction in programming?
a) Hiding internal implementation details (correct)
b) Showing all internal implementation details
c) Creating multiple objects from a single class
d) Inheriting properties from a parent class

2. Which of the following is an example of abstraction?
a) A car's engine
b) A car's steering wheel
c) A car's speedometer
d) A car's wheels (correct)

3. What is the purpose of abstraction?
a) To increase code complexity
b) To decrease code reusability
c) To improve code organization and hide internal details (correct)
d) To reduce code readability

4. Which of the following is a benefit of abstraction?
a) Increased code duplication
b) Reduced code maintainability
c) Improved code modularity (correct)
d) Decreased code flexibility

5. Can abstraction be achieved through inheritance?
a) Yes
b) No (correct) but through encapsulation
c) Only partially
d) Only through composition

6. What is an abstract class?
a) A class that cannot be instantiated (correct)
b) A class that can be instantiated
c) A class that has only abstract methods
d) A class that has only concrete methods

7. What is an abstract method?
a) A method that has no implementation (correct)
b) A method that has an implementation
c) A method that is declared but not defined
d) A method that is defined but not declared

8. Can an abstract class have concrete methods?
a) Yes (correct)
b) No
c) Only if the class is final
d) Only if the class is abstract

9. Can an interface have concrete methods?
a) Yes (correct)
b) No
c) Only in Java 8
d) Only in Java 9

10. What is the difference between abstraction and encapsulation?
a) Abstraction hides internal details, encapsulation hides data (correct)
b) Abstraction shows internal details, encapsulation shows data
c) Abstraction is used for inheritance, encapsulation is used for polymorphism
d) Abstraction is used for polymorphism, encapsulation is used for inheritance

11. Can a class be both abstract and final?
a) Yes
b) No (correct)
c) Only if the class has no methods
d) Only if the class has only abstract methods

12. Can an abstract method be overridden?
a) Yes  (correct)
b) No
c) Only if the subclass is abstract
d) Only if the subclass is concrete

13. What is the purpose of the abstract keyword?
a) To declare an abstract class  (correct)
b) To declare an abstract method
c) To declare a concrete class
d) To declare a concrete method

14. Can an abstract class have a constructor?
a) Yes(correct)
b) No
c) Only if the constructor is public
d) Only if the constructor is private

15. Can an abstract method be declared in an interface?
a) Yes (correct)
b) No
c) Only in Java 8
d) Only in Java 9

16. What is the difference between an abstract class and an interface?
a) An abstract class can have concrete methods, an interface cannot  (correct)
b) An abstract class cannot have concrete methods, an interface can
c) An abstract class is used for inheritance, an interface is used for polymorphism
d) An abstract class is used for polymorphism, an interface is used for inheritance

17. Can a class implement multiple interfaces?
a) Yes (correct)
b) No
c) Only if the interfaces are related
d) Only if the interfaces are unrelated

18. Can an abstract class extend another abstract class?
a) Yes (correct)
b) No
c) Only if the subclass is abstract
d) Only if the subclass is concrete

19. Can an abstract method be declared static?
a) Yes
b) No (correct)
c) Only if the method is final
d) Only if the method is not final

20. What is the benefit of using abstraction in programming?
a) Increased code complexity
b) Decreased code reusability
c) Improved code organization and maintainability (correct)
d) Reduced code readability

 */ 
