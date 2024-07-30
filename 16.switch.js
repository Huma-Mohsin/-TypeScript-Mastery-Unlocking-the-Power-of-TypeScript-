"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
//1. Write a switch statement that takes a day of the week (1-7) and prints out the corresponding day name (e.g., "Monday" for 1, "Tuesday" for 2, etc.).
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Monday is a atart of the week.");
        break;
    case "Tuesday":
        console.log("It is raining on Tuesday");
        break;
    case "wednesday":
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
