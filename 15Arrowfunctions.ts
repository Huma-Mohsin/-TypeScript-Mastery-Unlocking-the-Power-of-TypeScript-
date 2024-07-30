/*
Arrow function is also called lambda function or anonymous function. It is identified by arrow . This function is needed to store in a variable.

Arrow functions are often used to store small, one time  functions in a

It is a concise way to write a code .

It makes code easy to read, easy to debug.

It helps to organize code

Arrow functions are valuable tool in programming.

*/


//1-find out the area of circle

let circle_area = (r: number, pi: number = 3.142) => {
  let Area_of_Circle = pi * r ** 2;
  return Area_of_Circle;
};

console.log(circle_area(5)); //13

//2-Check if a number is even or odd.
let EvenOdd = (numb: number) => {
  if (numb % 2 === 0) {
    return `Number Is Even : ${numb}`;
  } else {
    return `Number Is Odd : ${numb}`;
  }
};
console.log(EvenOdd(33)); //Number Is Odd : 33
console.log(EvenOdd(14)); //Number Is Odd : 33

//3-Return the sum of two numbers.
let add = (value1: number, value2: number) => {
  return value1 + value2;
};
console.log(add(2, 4)); //6

//4- Display a greeting message with a user's name.
let msg = (user: string, message: string) => {
  return `${user} ${message}`;
};
console.log(msg("Huma", "Good Morning"));

//4-Calculate the average of an array of numbers.
let avg = (arr: number[]) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  let average = sum / arr.length;
  return average.toFixed(2);
};
console.log(avg([1, 2, 3, 4, 5]));

//5- Check if a string contains a specific word.

let word= (str:string,target:string)=>{
let wordarr= str.split(' ');//split the sentence into a word of an array.
console.log(wordarr);
let letterpresence=wordarr.includes(target);
return letterpresence;
}
console.log(word("An apple a day keeps the doctor away.",'apple' ));//true

//6-Return the square of a number.
let squareOfnumber=(val:number)=>{
return val**2;
}
console.log(squareOfnumber(4));//16

//7- Display a message after a delay.
let delay=(msg:string)=>{
    return new Promise(resolve=>setTimeout(()=>{resolve(msg)},3000))
}
delay("Hello, I am delay message").then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err);
})
//Hello, I am delay message

//8. Calculate the factorial of a number.
let factorial:(n:number)=>number=(n:number)=>{
if(n<=1){
    return 1
}
else{
    return n * factorial(n - 1);
}
}
console.log(factorial(5));//120
console.log(factorial(10));//3628800

//9. Check if an array includes a specific value.
let valuepresence=(n:number[],targetvalue:number)=>{
return n.includes(targetvalue);
}
console.log(valuepresence([2,4,6,8,10,12],8))//true

//10- Calculate the area of a rectangle
let area_of_rectangle=(l:number,w:number)=>{
let rectangle_Area=l*w;
return rectangle_Area;
}
console.log(area_of_rectangle(4,5));//20
