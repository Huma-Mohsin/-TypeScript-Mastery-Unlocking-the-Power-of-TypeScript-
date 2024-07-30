/*

Developer can use logical operators to perform logical operations in its code, depending on its need.

Logical operators include:-

1- And denoted by &&
2- Or  denoted by ||
3- Not denoted by  !

AND LOGICAL OPERATOR
********************

And operators returns a boolean output after evaluating an expression.

-if both expressions are true, it produces an output true.
-if any expression or both expressions are false , it produces an output false */

let user:string="SanaSarim";
let password:number=12345;

if(user===user && password ===password){
    console.log("You Are Sucessfully logged In.")
}
else{
    console.log("Invalid Credentials")
}
//output : You Are Sucessfully logged In.
//---------------------------------------------------------------------------------
if(user==="sanaSarim" && password === 12345){
    console.log("You Are Sucessfully logged In.")
}
else{
    console.log("Invalid Credentials")
}
//Invalid Credentials
//--------------------------------------------------------------------------------
if(user==="SanaSarim" && password === 123456789){
    console.log("You Are Sucessfully logged In.")
}
else{
    console.log("Invalid Credentials")
}
//Invalid Credentials
//-------------------------------------------------------------------------------
if(user==="SanaSarim" && password === 12345){
    console.log("You Are Sucessfully logged In.")
}
else{
    console.log("Invalid Credentials")
}
//You Are Sucessfully logged In.
//------------------------------------------------------------------------------

/* OR LOGICAL OPERATORS

or logical operator also returns a boolean value as an output , depends upon a condition.

It returns a true when any one expression becomes true  or both expressions becomes true.
It returns false when both expressions becomes false.

It is denoted by ||    */ 

//Example:
//Check if a user has a coupon or loyalty points:
let user_HasCoupon=true;
let user_HasLoyaltyPoints= false;

if(user_HasCoupon || user_HasLoyaltyPoints){
    console.log("You can Avail Discounts")
}
else{
    console.log("You donot avail any discount")
}

//You can Avail Discounts

//Check if a value is within a range:

let value=45;
if(value>=50 || value%5===0)
{
    console.log("The value is less than 50 and is divisible by 50")
}
else{

    console.log("The value is greatre than 50 and is not divisible by 50")
}

/*Not operator
***************
It returns an opposite of a statement.*/

let  isLoggedIn:boolean=false;
if(!isLoggedIn){
    console.log("You are Logged In")
}
else{
    console.log("You are not able to login.")
}