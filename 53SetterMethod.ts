class Person{
    private _name:string="Huma Aftab";

    get name(){
        return this._name;
    }
    set name(val:string){
        this._name = val; 
    }
}
let p1=new Person();
console.log(p1.name);//get functions return

p1.name="Huma Mohsin";//done by set method
console.log(p1.name);

/*  1. What is the primary purpose of a getter function in JavaScript?
a) To set the value of a property
b) To get the value of a property (correct)
c) To delete a property
d) To add a new property

2. Which of the following is the correct syntax for a getter function?
a) get propertyName() { ... } (correct)
b) set propertyName() { ... }
c) function getPropertyName() { ... }
d) function setPropertyName() { ... }

3. What is the difference between a getter and a setter function?
a) A getter sets the value, while a setter gets the value
b) A getter gets the value, while a setter sets the value (correct)
c) A getter deletes the property, while a setter adds a new property
d) A getter adds a new property, while a setter deletes the property

4. Can a getter function call itself?
a) Yes
b) No (correct)
c) Only if it's a static getter
d) Only if it's an instance getter

5. What happens if a getter function doesn't return a value?
a) It returns undefined
b) It returns null
c) It throws an error (Correct)
d) It does nothing

6. What is the purpose of a setter function in JavaScript?
a) To get the value of a property
b) To set the value of a property (correct)
c) To delete a property
d) To add a new property

7. Which of the following is the correct syntax for a setter function?
a) get propertyName() { ... }
b) set propertyName() { ... } (correct)
c) function getPropertyName() { ... }
d) function setPropertyName() { ... }

8. Can a setter function be used to update a constant property?
a) Yes
b) No (correct)
c) Only if it's a static setter
d) Only if it's an instance setter

9. What happens if a setter function is called without a value?
a) It throws an error (correct)
b) It sets the property to undefined
c) It sets the property to null
d) It does nothing

10. Can a getter function be used to compute a value on the fly?
a) Yes (correct)

Explanation: Yes, a getter function can be used to compute a value on the fly. Getter functions are not limited to simply returning a stored value. They can also perform calculations, transformations, or other operations to compute a value dynamically. This allows for more flexibility and encapsulation of complex logic within the getter function.

b) No
c) Only if it's a static getter
d) Only if it's an instance getter
 */