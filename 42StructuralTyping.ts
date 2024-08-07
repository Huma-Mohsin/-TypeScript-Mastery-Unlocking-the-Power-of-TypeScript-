/* Structural Typing refers to an object ,structured with different name but having some properties or attributes.

In structural typing, type of an object is determined by its structure rather than its name.

*/

interface obj1{name:string; age:number};
interface obj2{name:string; age:number,email:string}

//fresh object-It is an object that is freshly created.

let object1:obj1={name:"Saad",age:34};
let object2:obj2={name:"Waqas",age:23,email:"waqas@gmail.com"}

//stale objects.  Stale objects refer to objects that have already been created and assigned to variables, and are being reassigned to other variables.

object1=object2 //object2 has all properties of atleast of object1, additionally it has its own some property so no error occured.

console.log(object1);//{ name: 'Waqas', age: 23, email: 'waqas@gmail.com' }


//Errors Conditions:

//object2=object1; //b/c obj1 has not all the properties of obj2.

//object1={name:"Waqas",age:23,email:"waqas@gmail.com"}//cause an error


type Car={
    model:string,
    year:number,
}

type Mobile={
    model:string,
    year:number,
    color:string
}

//fresh Objects
let car:Car={
    year:2023,
    model:"Honda",
  
}
let mobile:Mobile={
    model:"SamSung A-32",
    year:2020,
    color:"Blue"
}

car=mobile;//mobile has atleast all he properties of car
console.log(car);

//mobile=car;// not assigned,b/c car has not all the properties of mobile.

