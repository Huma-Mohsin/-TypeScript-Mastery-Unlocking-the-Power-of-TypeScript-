/*

"If the user is under 18 years old, log 'You are a minor!', else if the user is 18 or older but has less than 1000 points, log 'You are an adult, but you need more points!', else log 'You are an adult with enough points!'".
 */
let UserAge = 56;
let points = 500;
if (UserAge < 18) {
    console.log("You are a minor!");
}
else if (UserAge >= 18 && points < 1000) {
    console.log("You are an adult,but you need more points!");
}
else {
    console.log('You are an adult with enough points!');
}
//You are an adult,but you need more points!
/*
If the student's grade is above 90, log 'Excellent!', else if it's between 75 and 90, log 'Good!', else if it's between 60 and 74, log 'Fair!', else log 'Needs improvement!'*/
let Std_Grades = 89;
if (Std_Grades > 90) {
    console.log('Excellent!');
}
else if (Std_Grades >= 75 && (Std_Grades <= 90)) {
    console.log('Good!');
}
else if (Std_Grades >= 60 && Std_Grades <= 74) {
    console.log('Fair!');
}
else {
    console.log('Needs improvement!');
}
//Good!
/*
"If the customer's purchase is over $100, log 'You get free shipping!', else if it's between $50 and $100, log 'You get a 10% discount!', else if it's between $20 and $49, log 'You get a 5% discount!', else log 'No discount available'" */
let customerPurchase = 450;
if (customerPurchase > 100) {
    console.log('You get free shipping!');
}
else if (customerPurchase > 50 && customerPurchase < 100) {
    console.log('You get a 10% discount!');
}
else if (customerPurchase > 20 && customerPurchase < 49) {
    console.log('You get a 5% discount!');
}
else {
    console.log('No discount available');
}
export {};
//You get free shipping!
