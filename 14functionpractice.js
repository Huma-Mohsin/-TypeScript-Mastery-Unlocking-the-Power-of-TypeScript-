/*required parameters practice
******************************
1- "Create a TypeScript function calculateArea that takes two required parameters, length and width, both of type number, and returns the area of a rectangle as a number." */
function calculateArea(length, width) {
    return length * width;
}
console.log(calculateArea(23, 45)); //1035
/*

2- "Create a TypeScript function calculatePerimeter that takes two required parameters, length and width, both of type number, and returns the perimeter of a rectangle as a number." */
function calculatePerimeter(length, width) {
    let Perimeter = 2 * (length + width);
    return Perimeter;
}
console.log(calculatePerimeter(2, 4));
/*
3- "Create a TypeScript function greet that takes a required parameter name of type string and returns a greeting message as a string." */
function greet1(name) {
    return `Hello ${name}, Nice To Meet You`;
}
greet1("Huma");
/*
4- "Create a TypeScript function greet that takes two required parameters, person and message, both of type string, and returns a personalized greeting message as a string. The function should use template literals to insert the person and message parameters into the greeting message." */
function greet(person, messgae) {
    return `Good Morning, ${person} , ${messgae}`;
}
console.log("Huma Mohsin", "Nice To Meet you");
/*Default parameters Practice
****************************
1- "Create a TypeScript function greet that takes two parameters, name and message. The name parameter should be of type string and is required. The message parameter should also be of type string, but it should have a default value of 'Hello'. The function should return a greeting message as a string using template literals. If the message parameter is not provided, it should default to 'Hello'." */
function greet2(name, message = "Hello") {
    return `${message} ${name}, How are you?`;
}
console.log(greet2("Huma"));
console.log(greet2("Huma", "Good Morning"));
/* 2- "Create a TypeScript function calculateTotal that takes two parameters, price and discount. The price parameter should be of type number and is required. The discount parameter should also be of type number, but it should have a default value of 0. The function should return the total price after applying the discount as a number." */
function calculateTotal(price, discount = 0) {
    let totalprice = price - discount;
    return totalprice;
}
console.log(calculateTotal(45)); //45
console.log(calculateTotal(45, 5)); //40
/*
1. "Create a TypeScript function createUser that takes three parameters: name, email, and role. The name and email parameters should be of type string and are required. The role parameter should be of type string but should have a default value of 'user'. The function should return an object with the provided properties." */
function createuser(name, email, role = "User") {
    return {
        name,
        email,
        role,
    };
}
console.log(createuser("Huma MOhsin", "huma@practice.test", "student"));
console.log(createuser("Huma Aftab", "humaaftab.test.com"));
/*
output
{ name: 'Huma MOhsin', email: 'huma@practice.test', role: 'student' }
{ name: 'Huma Aftab', email: 'humaaftab.test.com', role: 'User' } */
/*4 - "Create a TypeScript function calculateArea that takes two parameters: length and width. Both parameters should be of type number and are required. The function should also take a third parameter unit of type string with a default value of 'meters'. The function should return the calculated area with the provided unit." */
function Calculate_area(length, width, unit = "meters") {
    let areaofrectangle = (length * width) + " " + unit;
    return areaofrectangle;
}
console.log(Calculate_area(23, 45, "centimeters"));
console.log(Calculate_area(23, 56));
/*1035 centimeters
1288 meters */
/*5- "Create a TypeScript function greet that takes two parameters: name and language. The name parameter should be of type string and is required. The language parameter should be of type string but should have a default value of 'English'. The function should return a personalized greeting message in the specified language." */
function Greet(name, language = 'English') {
    if (language === "Spanish") {
        return `Buenas noches ${name}, `;
    }
    else if (language === "French") {
        return `Bonsoir ${name}`;
    }
    else if (language === "Arabic") {
        return ` لخير مساء ${name}`;
    }
    else {
        return `Good Evening ${name}`;
    }
}
console.log(Greet("huma Mohsin", "Urdu")); //as urdu is not mentioned here, it takes default language to print i.e Good Evening huma Mohsin
console.log(Greet("huma Mohsin", "English")); //Good Evening huma Mohsin
console.log(Greet("huma Mohsin", "Arabic")); // لخير مساء huma Mohsin
console.log(Greet("huma Mohsin", "Spanish")); //Buenas noches huma Mohsin,
console.log(Greet("huma Mohsin", "French")); //Bonsoir huma Mohsin
/*6- "Create a TypeScript function getTotalPrice that takes two parameters: price and taxRate. The price parameter should be of type number and is required. The taxRate parameter should be of type number but should have a default value of 0.08. The function should return the total price including tax."
 */
function getTotalPrice(price, taxrate = 0.08) {
    let total_price = price + (price * taxrate);
    return total_price;
}
console.log(getTotalPrice(45)); //48.6
console.log(getTotalPrice(45, 2)); //135
/* 7- "Create a TypeScript function formatDate that takes two parameters: date and format. The date parameter should be of type Date and is required. The format parameter should be of type string but should have a default value of 'YYYY-MM-DD'. The function should return the formatted date string.*/
function formatDate(date, format = 'YYYY-MM-DD') {
    const datetoday = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedddate = datetoday.toString().padStart(2, '0');
    const formattedmonth = month.toString().padStart(2, '0');
    if (format === "YYYY-MM-DD") {
        return `${year}- ${formattedmonth}-${formattedddate}`;
    }
    else if (format === "DD-MM-YYYY") {
        return `${formattedddate} ${formattedmonth} ${year}`;
    }
    else {
        throw new Error(`Unsupported format: ${format}`);
    }
}
console.log(formatDate(new Date('19-july-2024'))); //2024- 07-19
console.log(formatDate(new Date('2024-19-July'))); //2024- 07-19
/*
Optional Parameter
*****************
 
1. Write a function greet that takes a name parameter and an optional message parameter, which defaults to "Hello".*/
function greetop(name, message) {
    if (message === undefined) {
        return ` Good Morning ${name}`;
    }
    else {
        return `${message} ${name}`;
    }
}
console.log(greetop("Huma")); // Good Morning Huma
console.log(greetop("Huma", "How is the day?")); //How is the day? Huma
/*
2- Create a function calculateTotal that takes a price parameter and an optional discount parameter, to calculate the total cost of a product with an optional discount.*/
function calculateTotalprice(price, discount) {
    if (discount === undefined) {
        return `The Total cost is ${price}`;
    }
    else {
        let totalcost = price - discount;
        return `The total cost is ${totalcost}`;
    }
}
console.log(calculateTotalprice(25)); //The Total cost is 25
console.log(calculateTotalprice(25, 5)); //The total cost is 20
/*
3- Define a function createUser that takes name, email, and an optional role parameter, to create a new user account with an optional role assignment.*/
function createUsers(name, email, role) {
    if (role === undefined) {
        return `${name} ${email}`;
    }
    else {
        return `${name} ${email} ${role}`;
    }
}
console.log(createUsers("Huma", "huma@test.com", "student"));
//Huma huma@test.com student
console.log(createUsers("Huma", "huma@test.com")); //Huma huma@test.com
/*4- Create a function getPersonInfo that takes name, age, and an optional occupation parameter, to get a person's information with an optional occupation.*/
function getPersonInfo(name, age, occupation) {
    if (occupation === undefined) {
        return ` student has name ${name}. She is ${age} years old.`;
    }
    else {
        return ` student has name ${name}. She is ${age} years old and has occupation as  ${occupation} `;
    }
}
console.log(getPersonInfo("Huma Mohsin", 35, "Student"));
console.log(getPersonInfo("Huma Mohsin", 35));
/*output
 student has name Huma Mohsin. She is 35 years old and has occupation as  Student
 student has name Huma Mohsin. She is 35 years old.*/
/* 5-  Write a function sendMessage that takes a message parameter and an optional recipient parameter, to send a message to a specific recipient or a default recipient */
function sendMessage(message, recipient) {
    if (recipient === undefined) {
        return `${message}`;
    }
    else {
        return `${recipient} ${message} `;
    }
}
console.log(sendMessage("Good Morning", "Huma"));
console.log(sendMessage("Nice To Meet You"));
/* 6-  Write a function generatePassword that takes a length parameter and an optional characters parameter, to generate a strong password with optional character sets.*/
function generatePassword(length, characters) {
    let charSet = characters || 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+~`|}';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += charSet[Math.floor(Math.random() * charSet.length)];
    }
    return password;
}
console.log(generatePassword(10, "z")); // Outputs a 10-character password using only 'z'
console.log(generatePassword(10)); // Outputs a 10-character password using the default character set i.e $bi)_BP+YC
/* 7. Create a function getUserName that takes firstName, lastName, and an optional title parameter, to generate a full name with an optional title (e.g., Mr., Ms., Dr.). */
function getUserName(firstname, lastName, title) {
    if (title !== undefined) {
        return `${title} ${firstname} ${lastName}`;
    }
    else {
        return `${firstname} ${lastName}`;
    }
}
console.log(getUserName("Huma", "Mohsin", "Mrs.")); //Mrs. Huma Mohsin
console.log(getUserName("Huma", "Mohsin")); //Huma Mohsin
export {};
