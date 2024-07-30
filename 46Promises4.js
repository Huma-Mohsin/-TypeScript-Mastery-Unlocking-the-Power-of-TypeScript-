//Object Type Promise using async await.
async function FetchingData() {
    let url = 'https://jsonplaceholder.typicode.com/todos/1';
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
    }
    catch (err) {
        console.log(err);
    }
}
FetchingData();
export {};
/*
1. What is a Promise in JavaScript?
a) A synchronous operation
b) An asynchronous operation(true)
c) A data type
d) A function

2. Which of the following is a correct way to create a Promise?
a) let promise = new Promise((resolve, reject) => { ... }); (true)
b) let promise = Promise((resolve, reject) => { ... });
c) let promise = new Promise((resolve) => { ... });
d) let promise = Promise((resolve) => { ... });

3. What is the purpose of the resolve function in a Promise?
a) To reject the Promise
b) To resolve the Promise with a value (true)
c) To handle errors
d) To create a new Promise

4. What is the purpose of the reject function in a Promise?
a) To resolve the Promise
b) To reject the Promise with an error (true)
c) To handle success cases
d) To create a new Promise

5. How do you handle a resolved Promise?
a) Using catch()
b) Using then() (true)
c) Using finally()
d) Using reject()

6. How do you handle a rejected Promise?
a) Using then()
b) Using catch() (true)
c) Using finally()
d) Using resolve()

7. What is the purpose of the finally() method in a Promise?
a) To handle success cases
b) To handle error cases
c) To execute code regardless of the Promise outcome (true)
d) To create a new Promise

----------------------------------------------------------------------

1. What is the purpose of chaining Promises?
a) To handle errors
b) To execute code synchronously
c) To perform multiple asynchronous operations in sequence (correct)
d) To create a new Promise

2. Which method is used to handle multiple Promises and return a new Promise that resolves when all of them resolve?
a) Promise.all() (true)
b) Promise.race()
c) Promise.any()
d) Promise.resolve()

3. What is the benefit of using async/await syntax with Promises?
a) Improved performance  (correct)
b) Simplified error handling
c) Easier readability and maintainability (correct)
d) Increased complexity

4. How do you handle errors when working with Promises?
a) Using try/catch blocks
b) Using .catch() method (correct)
c) Using .then() method
d) Using .finally() method

5. What happens when a Promise is rejected and there is no error handler?
a) The program crashes
b) The error is ignored
c) The error is propagated up the call stack (Correct)
d) The Promise is re-run

6. Can you use await inside a non-async function?
a) Yes
b) No (correct)
c) Only with a try/catch block
d) Only with a .then() block

7. What is the difference between Promise.all() and Promise.race()?
a) Promise.all() resolves when all Promises resolve, while Promise.race() resolves when the first Promise resolves (correct)
b) Promise.all() resolves when the first Promise resolves, while Promise.race() resolves when all Promises resolve
c) Promise.all() is used for error handling, while Promise.race() is used for success handling
d) Promise.all() is used for success handling, while Promise.race() is used for error handling




*/ 
