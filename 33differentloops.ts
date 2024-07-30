 /*  conditional loops like for loop, while loop, do while loop , we use it to iterate a data again and again . loop starts from initialization and works till condition becomes false.When the condition becomes true, loop iterate the data and as condition becomes false it stops its execution and prevent themfrom being iterate. 
 
 
 For loop :-
 it is a traditional loop we used in programming. 
it has 3 parts i.e initialization, condition and increment or decrement

like:*/

// for(let i=18;i>15;i++){  //infiity
//     console.log(i,"I am For Loop")
// }

for(let i=0;i<10;i++){  // loop execute 0 to 9
    console.log(i,"I am For Loop")
}
 
// for(const i=1 ;i<=10;i++){
//     //loop doesnot work on const b/c const doesnot allow to increment.
// }
 

/* do while loop :- This loop executes atleast one time , first this loop executes a body then check condition so it runs atleast one time. if condition after first run becomes false it terminate else it executes until a condition becomes false itself.*/

//  const i=0;
//  do{
//     console.log(i,"Hello");
//     i++;  //cause an error this increment cannot assign to i b/c it is a constant. 
//  }
//  while(i<15);


 let j=0
 
 do
 {
console.log(j,"While loop with let");

 }

 while(j===5);//as condition becomes wrong it terminate from being execution 


//  let k=0
 
//  do
//  {
// console.log(k,"While loop with let");

//  }

//  while(k<5);//loop execute at 0 value infinity b/c there is no increment;


let b=1;
do{
    console.log(b,"hello");
    b++;
}
while(b<=5);


/* 3- while loop

used to iterate over a data, do repetedly task until condition becomes true.*/

let a=0;
while(a<3){
    console.log(a,"I am while loop");
    a++;
}

/*  MCQs related to conditional loops, including syntax error prediction, result prediction, and basic knowledge:

Syntax Error Prediction

1. Which of the following for loop declarations will result in a syntax error?
a) for (let i = 0; i < 5; i++)
b) for (const i = 0; i < 5; i++)  (correct,this lead to to syntax error)
c) for (let i = 0; i < 5)          
d) for (i = 0; i < 5; i++)

Answer: b) for (const i = 0; i < 5; i++) (because const variables cannot be reassigned)

1. Which of the following while loop declarations will result in a syntax error?
a) while (i < 5)
b) while (let i < 5)  (correct )
c) while ((i = 0) < 5) 
d) while (i = 0)

Answer: b) while (let i < 5) (because let cannot be used in the condition)

Result Prediction

1. What will be the output of the following code?

for (let i = 0; i < 5; i++) {
  console.log(i);
}

a) 0, 1, 2, 3, 4 (correct)
b) 1, 2, 3, 4, 5
c) 0, 1, 2, 3
d) 1, 2, 3

Answer: a) 0, 1, 2, 3, 4

1. What will be the output of the following code?

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

a) 0, 1, 2, 3, 4 (correct)
b) 1, 2, 3, 4, 5
c) 0, 1, 2, 3
d) 1, 2, 3

Answer: a) 0, 1, 2, 3, 4

Basic Knowledge

1. What is the purpose of the increment/decrement statement in a for loop?
a) To initialize the loop variable
b) To check the loop condition
c) To update the loop variable (correct)
d) To terminate the loop

Answer: c) To update the loop variable

1. Which loop type is guaranteed to execute at least once?
a) For loop
b) While loop
c) Do-while loop (correct)
d) None of the above

Answer: c) Do-while loop


 */
 
/*  BREAK AND CONTINUE ARE TWO RESERVED KEYWORD USED IN LOOP.

BREAK:-

BREAK IS USED WHEN CERTAIN CONDITION MEET.
TERMINATE A LOOP WHEN ERROR OCCURS

CONTINUE:-

SKIPPING UNNECESSSARY ITERATIONS.

FOR EXAMPLE:-*/
for(let i=0;i<10;i++){
    if(i===3){
        continue; //skip when i=3 and start from 4 after that.

    }
    console.log(i,"continue")
}

for(let i=0;i<10;i++){
    if(i===3){
        break; //Exit the lop at i=3

    }
    console.log(i,"break")
}

//: Write a loop that prints the numbers from 1 to 10, but skips printing the number 5.

for (let i=1;i<=10;i++){
    if(i===5){
        continue;
    }
    console.log(i)
}



 //: Write a loop that prints the numbers from 1 to 10, but only prints the even numbers.

for(let i=1;i<=10;i++){
    if(i%2===0){
        console.log(i,":Even Numbers")
    }
}
 
 
 /*loop Basics

1. Which statement is used to start a loop in JavaScript?
A) for (correct)
B) while
C) loop
D) iterate

2. What is the purpose of the increment/decrement statement in a loop?
A) To initialize the loop variable
B) To set the loop condition
C) To update the loop variable (correct)
D) To exit the loop

For Loop

1. What is the syntax of a basic for loop in JavaScript?
A) for (init; cond; incr) { ... }(correct)
B) for (init; cond; decr) { ... }
C) for (init; incr; cond) { ... }
D) for (cond; init; incr) { ... }

2. Which part of the for loop is executed first?
A) Initialization (correct)
B) Condition
C) Increment/Decrement
D) Loop Body

while loop


1. What is the syntax of a basic while loop in JavaScript?
A) while (cond) { ... } (correct)
B) while (init; cond) { ... }
C) while (cond; incr) { ... }
D) while (init; cond; incr) { ... }

2. What happens if the condition in a while loop is always true?
A) The loop runs indefinitely (correct)
B) The loop runs once
C) The loop runs until the condition becomes false
D) The loop exits immediately

Do-While Loop

1. What is the syntax of a basic do-while loop in JavaScript?
A) do { ... } while (cond) (correct)
B) do { ... } while (init; cond)
C) do { ... } while (cond; incr)
D) do { ... } while (init; cond; incr)

2. How many times is the loop body executed in a do-while loop?
A) At least once (correct)
B) Zero or more times
C) Exactly once
D) Until the condition becomes false

Loop Control Statements

1. What does the break statement do in a loop?
A) Exits the loop immediately (correct)
B) Skips to the next iteration
C) Continues to the next statement
D) Returns to the beginning of the loop

2. What does the continue statement do in a loop?
A) Exits the loop immediately
B) Skips to the next iteration (correct)
C) Continues to the next statement
D) Returns to the beginning of the loop


Nested Loops

1. What is a nested loop in JavaScript?
A) A loop inside another loop (correct)
B) A loop outside another loop
C) A loop with multiple conditions
D) A loop with multiple increment/decrement statements

2. How do you access the outer loop variable from an inner loop?
A) Using the this keyword
B) Using the outer loop variable name
C) Using a global variable
D) Using a closure


 */
 
 
 
