/* A conditional clause where a main if else clause contains another if else clause inside itself.


1. If day is Monday or Friday
2. And it's not a holiday
3. And you're not sick
4. Go to work
5. Else, take a sick day
6. Else, it's a holiday, day off
7. Else, it's a day off

Build your code using these statements! */

let day: string = "friday";
let isholiday: boolean = true;
let condition = "not sick";
if (day === "Monday" || day === "friday") {
  if (!isholiday && condition === "not sick") {
    console.log("Go To Work");
  } else {
    console.log("Take A Sick");
  }
} else if (isholiday) {
  console.log("it's a holiday, day off");
} else {
  console.log("it's a day off");
}
//Take A Sick

/*
2-1. If the username is "admin",
2. And the password is "password123",
3. And the password is longer than 8 characters,
4. And the password contains a number,
5. Login successful!
6. Else, Invalid username or password!
7. Else, Password too short!
8. Else, Password must contain a number!

Build your code using these statements */

let username = "admin";
let password = "password123"
let passchar = password.length;
if (username === "admin" && password === "password123") {
  if (passchar > 8) {
    console.log("Login successful!");
  } else {
    console.log(" Password too short!");
  }
  if (/\d/.test(password)) { //  (/\d/.test(password)) returns true if the password contains at least one digit, and false otherwise.
    console.log("Password must contain a number!");
  }
} else {
  console.log("Invalid username or password!");
}
//Password must contain a number!

let userName:string="Huma Mohsin";
let IsOtpCorrect:boolean=true;
if(userName==="Huma Mohsin"){
  if(IsOtpCorrect===true){
    console.log("Welcome, you are suceesfully login.")
  }
  else{
    console.log("Invalid OTP,Try Again")
  }
}
else{
  console.log("Invalid user Name, Try again1")
}
//Welcome, you are suceesfully login.



let user:string="Ali";
let otp:number=456;
if(user===user){
console.log("welcome, Move one Step forward in verification code")
if(otp===otp){
  console.log("You are sucessfully login to your account")
}
else{
  console.log("Invalid OTP,Try Again")
}
}
else{
  console.log("You are not a valid user")
}
//welcome, Move one Step forward in verification code
//You are sucessfully login to your account
 
/*
"If the userpassword does not contain a number, and the username is not 'admin', and the userpassword length is less than 10 characters, log 'Password must contain a number and be at least 10 characters long!'"
*/

let user_name:string="admin";
let userpassword:string="abc34567";

if (!/\d/.test(userpassword) && (user_name !=="admin")&&(userpassword.length<10)){
console.log('Password must contain a number and be at least 10 characters long!')
}
else{
    console.log("you are suceesfully login.")
}
