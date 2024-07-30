/*

In TypeScript, developers can use arithmetic operators like +, -, *, /, %,** (Exponentiation) etc. to perform various mathematical operations, depending on their needs in a code.

*/

let value1:number;
value1=23; //strongly data type number

let value2;
value2=45  //data type any

let value3=64; //inferred by ts that it is a number data type.

console.log(value1+value2+20);
console.log((value3-value2)*value1);
console.log(value1*(value2+value3));
console.log((value1/value2)+value3);
console.log(value3/value2)//modulus , provide a remainder.
console.log(value1**2);//** (Exponentiation)

/*output as:
88
437
2507
64.5111111111111
1.4222222222222223
529
*/