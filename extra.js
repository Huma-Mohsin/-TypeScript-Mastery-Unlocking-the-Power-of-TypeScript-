var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
/*what does Color2[Color2.Red] evaluate to

A) 1
B) "Red"
C) 2
D) 4 */
console.log(Color2.Red); //1
console.log(Color2[1]); //Red
console.log([Color2.Red]); //[1]
console.log(Color2[Color2.Red]); //Red
/*what is the output of the following TYPESCRIPT code? */
let a = 10;
let b = 10;
let c = 10;
// if(a === b === c){
//     console.log("all are equal!")
// }else{
//     console.log("all are not equal!")
// }
// a. "all are equal!"
// b. "all are not equal!"
// c. "error"
// d. "Both if and else block will run"
/*The expression a === b === c is evaluated as follows:

First, a === b is evaluated, which results in true because a and b are both 10.

Next, true === c is evaluated, where true is implicitly converted to 1 in the comparison, so 1 === 10 is false.

So the condition a === b === c evaluates to false, and the else block will execute.*/
if ((a === b) && (b === c) && (a === c)) {
    console.log("all are equal!");
}
else {
    console.log("all are not equal!");
}
// console.log(Direction[2])  ;// after compilation in js it is undefined but in ts it produces an error.
function myCallBack(text) {
    console.log("inside myCallback " + text);
}
function callingFunction(initialText, callback) {
    callback(initialText);
}
callingFunction("exampleText", (text) => console.log("Callback with " + text));
export {};
// a) inside myCallback exampleText
// b) Callback with exampleText
// c) inside myCallback exampleText followed by Callback with exampleText
// d) Error: Callback type mismatch
