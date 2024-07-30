/* Interface is used to deine a structure of an object.

Interface is purely used for an object.

by using interface keyword, we make a structure of an object and then we assign it to an object which means that explicitly we define a data type for an object in interface which has to be followed by an object.

interface of same name can be merge , additional properties are added with each other while common property of same name interfaced becomes a single property.

interface can be extends means one interface of any name can share its properties with other interface of diferent name*/

//same named interface merged as:
interface Student {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
    Country: string;
  };
}

interface Student {
  course: string;
  hobbies: string[];
}
const std: Student = {
  name: "Saira",
  age: 28,
  address: {
    street: "House A-45",
    city: "Karachi",
    Country: "Pakistan",
  },
  course: "Gen AI",
  hobbies: ["Reading", "Coding", "Travelling"],
};

//inytersect two different interfaces

interface Publisher {
  IsPublishedAnyBook: boolean;
  published_No_of_books: number;
}

interface Book {
  author: string;
  author_of: string;
  book_name: string;
  PublishedYear: number;
  getBook: () => void;
}

//we use like

//In TypeScript, you can't use the extends keyword to extend an interface when creating an object. Instead, you can use the & operator to intersect the two interfaces.

const book: Book & Publisher = {
  author: "Douglas Crockford ",
  author_of: "JavaScript",
  book_name: "The Good Parts",
  PublishedYear: 2022,
  getBook: () => {
    return {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
    };
  },

  IsPublishedAnyBook: true,
  published_No_of_books: 5,
};


//Object Literals

const mobile:{model:string, sim_type:string,}={model:"SamSung-A32",sim_type:"Dual Sim"};

//extends two interfaces

interface Manager{
    name:string,
    designation:string,

}

interface Employee extends Manager{
    
    employeeid:number,



}
const employee:Employee={
    name:"Zara",
    designation:"Software Quality Manager",
    employeeid:12437,
}

//Inline Interface or Object Type Literal or Explicit Typing

let faculty:{name:string, isfacultyMember:boolean, employeeId:number};//declared

faculty={
    name:"Zamin",
    isfacultyMember:true,
    employeeId:67123,

}

