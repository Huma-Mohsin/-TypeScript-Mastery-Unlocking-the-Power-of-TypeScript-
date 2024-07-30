/* Short circuiting refers to the behaviour of logical operators i.e And and Or operators. In Short circuiting ,if the first operand is logically true then second operand is evaluated and if the first operand is false then logically second operand's operation is skipped and not evaluated.

In short circuiting , we use && or || signs.

short circuiting with logicalll And operator.
--------------------------------------------

if the first operand is truthy then second expression is evaluated.
if the first operand is falsy then second operaand is not evaluated .

Short Circuiting with logically Or Operator.
-------------------------------------------

if the first operand is true then second operation is not evaluated.
if the first operand is false then second operand is also evaluated.

Short circuiting makes the performance fast, time saving,as unnecessary calculations are not evaluated so makes memory space available for other operations.

*/
let name = "Huma";
let fun = () => {
    console.log(name);
    console.log("My name is Huma");
};
name && fun(); //short circuiting //Huma
//My name is Huma
let value = false;
let fun1 = () => {
    console.log(value);
    console.log("hello from value");
};
value && fun1(); //not evaluated
let value11 = true;
let fun11 = () => {
    console.log(value11);
    console.log("hello from value 11");
};
value11 && fun11(); //true
//hello from value 11
let value13 = false;
let fun13 = () => {
    console.log(value13);
    console.log("hello from value 13");
};
value13 || fun13(); //false
//hello from value 13
let value14 = true;
let fun14 = () => {
    console.log(value14);
    console.log("hello from value 14");
};
value14 && fun14(); //true
export {};
//hello from value 14
/*1. What is short-circuiting in JavaScript?
a) A way to improve code readability
b) A technique to reduce code length
c) A behavior of logical operators to skip unnecessary evaluations(true)
d) A method to increase code execution speed

2. Which operator exhibits short-circuiting behavior in JavaScript?
a) && (Logical AND) only
b) || (Logical OR) only
c) Both && and ||  (true)
d) Neither && nor ||

3. What happens when the first operand of && is falsy?
a) The second operand is evaluated
b) The second operand is skipped (true)
c) The expression returns true
d) The expression returns false

4. What happens when the first operand of || is truthy?
a) The second operand is evaluated
b) The second operand is skipped (true)
c) The expression returns true
d) The expression returns false

5. Why is short-circuiting useful in JavaScript?
a) To improve code readability
b) To reduce code length
c) To avoid unnecessary calculations and improve performance (true)
d) To increase code execution speed


1. What is the primary purpose of short-circuiting in JavaScript?
a) To improve code readability
b) To reduce code length
c) To optimize performance by avoiding unnecessary evaluations  (true)
d) To handle errors and exceptions

2. Which of the following expressions will evaluate to true due to short-circuiting?
a) true && false
b) false && true
c) true || false (correct)
d) false || true

3. What happens when the first operand of && is null?
a) The second operand is evaluated
b) The second operand is skipped
c) The expression returns null  (correct)
e.g

Example: null && console.log("Hello")

Here, the first operand null is falsy, so the second operand console.log("Hello") is not evaluated due to short-circuiting. The expression returns null without logging "Hello" to the console.


d) The expression returns undefined

4. What is the difference between && and || operators in terms of short-circuiting?
a) && evaluates the second operand only if the first operand is truthy, while || evaluates the second operand only if the first operand is falsy  (correct)
b) && evaluates the second operand only if the first operand is falsy, while || evaluates the second operand only if the first operand is truthy
c) && always evaluates both operands, while || never evaluates both operands
d) && never evaluates both operands, while || always evaluates both operands

5. Can short-circuiting be used with other operators besides && and ||?
a) Yes, with all comparison operators
b) Yes, with all arithmetic operators
c) No, only with && and || (correct)
d) No, only with &&
















*/ 
