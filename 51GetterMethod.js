/* getter functions  cannot call itself, but we write direct to access value

Getter methods are the type of methods in javaScript that allows to access private and protected property of a class as public.

getter functions returns , if they donot return an error occured.

*/
class Person {
    _name = "Huma Mohsin";
    get name() {
        return this._name;
    }
}
let p1 = new Person();
console.log(p1.name);
export {};
