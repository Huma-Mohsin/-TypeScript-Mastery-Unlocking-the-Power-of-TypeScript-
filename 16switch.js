/* switch case is similar to if else. both are used in conditional statements.expression is evaluated first and then compare it with multiple cases.

better to use switch case for simple expressions.

syntax:
switch(expression){
case1:code;
break
case2:code;
break;
case3:code;
break;
deault:code
}
*/
//1. Write a switch statement that takes a day of the week (1-7) and prints out the corresponding day name (e.g., "Monday" for 1, "Tuesday" for 2, etc.).
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Monday is a start of the week.");
        break;
    case "Tuesday":
        console.log("It is raining on Tuesday");
        break;
    case "Wednesday":
        console.log("Today is wednesday.");
        break;
    case "Thursday":
        console.log("Go to Shopping");
        break;
    case "Friday":
        console.log("Friday is a holiday, take rest");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Enjoy weekends");
        break;
    default:
        console.log("Invalid Data");
}
//Monday is a atart of the week.
//2. Create a switch statement that takes a grade (A, B, C, D, F) and prints out the corresponding grade point average (e.g., 4.0 for A, 3.0 for B, etc.).
let grades = "D";
switch (grades) {
    case "A":
        console.log("grade point average for grade A is 4.0");
        break;
    case "B":
        console.log("grade point average for grade B is 3.0");
        break;
    case "C":
        console.log("grade point average for grade C is 2.0");
        break;
    case "D":
        console.log("grade point average for grade D is 1.0 and considered to be failed.");
        break;
    default:
        console.log("Invalid Grade");
} //grade point average for grade D is 1.0 and considered to be failed.
//3. Write a switch statement that takes a month (1-12) and prints out the corresponding month name (e.g., "January" for 1, "February" for 2, etc.).
let months = "July";
switch (months) {
    case "January":
        console.log("It is the first month of the year.");
        break;
    case "February":
        console.log("It is the second month of the year.");
        break;
    case "March":
        console.log("It is the third month of the year.");
        break;
    case "April":
        console.log("It is the fourth month of the year.");
        break;
    case "May":
        console.log("It is the fifth month of the year.");
        break;
    case "June":
        console.log("It is the sixth month of the year.");
        break;
    case "July":
        console.log("It is the seventh month of the year.");
        break;
    case "August":
        console.log("It is the eighth month of the year.");
        break;
    case "September":
        console.log("It is the ninth month of the year.");
        break;
    case "October":
        console.log("It is the tenth month of the year.");
        break;
    case "November":
        console.log("It is the eleventh month of the year.");
        break;
    case "December":
        console.log("It is the twelfth month of the year.");
        break;
    default:
        console.log('Invalid Month');
} //It is the seventh month of the year.
//4-Design a switch statement that takes a user's input (1, 2, or 3) and performs a different action for each input (e.g., prints a message, calculates a value, or exits the program).
let userInput = 3;
switch (userInput) {
    case 1:
        console.log("prints a message");
        break;
    case 2:
        console.log("calculates a value");
        break;
    case 3:
        console.log("exits the program");
        break;
    default:
        console.log("Invalid number");
        break;
} //exits the program
//5- Create a switch statement that takes a color code (1-5) and prints out the corresponding color name (e.g., "Red" for 1, "Blue" for 2, etc.).
let colorcode = 6;
switch (colorcode) {
    case 1:
        console.log("Red");
        break;
    case 2:
        console.log("Blue");
        break;
    case 3:
        console.log("Green");
        break;
    case 4:
        console.log("Yellow");
        break;
    case 5:
        console.log("Pink");
        break;
    default:
        console.log("Invalid Number");
} //Invalid Number
export {};
