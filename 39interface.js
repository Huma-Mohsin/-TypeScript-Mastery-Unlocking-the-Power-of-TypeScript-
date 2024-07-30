/* Interface is used to deine a structure of an object.

Interface is purely used for an object.

by using interface keyword, we make a structure of an object and then we assign it to an object which means that explicitly we define a data type for an object in interface which has to be followed by an object.

interface of same name can be merge , additional properties are added with each other while common property of same name interfaced becomes a single property.

interface can be extends means one interface of any name can share its properties with other interface of diferent name*/
const std = {
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
//we use like
//In TypeScript, you can't use the extends keyword to extend an interface when creating an object. Instead, you can use the & operator to intersect the two interfaces.
const book = {
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
const mobile = { model: "SamSung-A32", sim_type: "Dual Sim" };
const employee = {
    name: "Zara",
    designation: "Software Quality Manager",
    employeeid: 12437,
};
//Inline Interface or Object Type Literal or Explicit Typing
let faculty; //declared
faculty = {
    name: "Zamin",
    isfacultyMember: true,
    employeeId: 67123,
};
export {};
