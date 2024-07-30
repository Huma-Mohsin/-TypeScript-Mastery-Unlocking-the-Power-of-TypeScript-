/*

"By default, TypeScript's behavior is synchronous, meaning it interprets data line by line, from left to right, and top to bottom. This process continues until the completion of instructions. When an error occurs, the TypeScript compiler halts execution and prompts the programmer to resolve the error before continuing. This process happens at compile-time, ensuring that errors are addressed before runtime.

Asynchronous behavior in TypeScript can be achieved using features like setTimeout, async/await, and others. This behavior enables non-blocking execution, allowing timely tasks to be performed without waiting for time-consuming tasks to complete. Asynchronous programming improves code performance by preventing timely processes from halting execution, resulting in faster overall performance.
 Promise chaining, error handling, and async/await best practices of asynchronous TS.

"
 Synchronous Behavior

1. What is the default behavior of TypeScript's compiler?
a) Asynchronous
b) Synchronous (true)
c) Concurrent
d) Parallel

2. How does TypeScript's compiler handle errors in synchronous code?
a) Ignores them
b) Halts execution and prompts the programmer to resolve (true)
c) Skips to the next line
d) Continues executing

Asynchronous Behavior

1. Which feature can be used to achieve asynchronous behavior in TypeScript?
a) setTimeout
b) async/await
c) Promise
d) All of the above (true)

2. What is the primary benefit of using asynchronous behavior in TypeScript?
a) Improved performance (true)
b) Easier debugging
c) Better code organization
d) Reduced memory usage

3. How does asynchronous behavior handle time-consuming tasks?
a) Waits for them to complete
b) Skips them
c) Executes them concurrently (true)
d) Halts execution

Additional Questions

1. Can synchronous and asynchronous behavior be used together in TypeScript?
a) Yes(true)
b) No
c) Only in certain cases
d) It's deprecated

2. What is the role of async/await in TypeScript's asynchronous behavior?
a) To create promises
b) To handle errors
c) To write asynchronous code synchronously
d) To improve performance
answer:- Async/await is used to write asynchronous code synchronously, but it also improves performance.


Synchronous Behavior

1. What happens when TypeScript's compiler encounters an error in synchronous code?
a) It skips to the next line
b) It halts execution and prompts the programmer to resolve (correct)
c) It ignores the error
d) It continues executing

2. How does TypeScript's compiler execute synchronous code?
a) Line by line, from left to right, and top to bottom (true)
b) Simultaneously, without waiting for previous lines to complete
c) Only when all dependencies are resolved
d) Only when all errors are fixed

Asynchronous Behavior

1. What is the purpose of using async/await in TypeScript?
a) To create promises (true)
b) To handle errors
c) To write asynchronous code synchronously
d) To improve performance

2. How does TypeScript's compiler handle asynchronous code with async/await?
a) It waits for the promise to resolve before continuing (true)
b) It skips to the next line
c) It executes the code concurrently
d) It halts execution

3. What is the benefit of using Promise.all() in TypeScript?
a) To execute promises concurrently
b) To execute promises sequentially
c) To handle errors
d) To improve performance
Answer: Not entirely correct. Promise.all() is used to execute promises concurrently, but it also handles errors.


Additional Questions

1. Can you use await without async in TypeScript?
a) Yes (true)
b) No
c) Only in certain cases
d) It's deprecated

2. How does TypeScript's compiler handle errors in asynchronous code?
a) It halts execution and prompts the programmer to resolve (true)
b) It ignores the error
c) It skips to the next line
d) It continues executing

3. What is the purpose of using try/catch blocks in asynchronous code?
a) To handle errors (true)
b) To improve performance
c) To execute code concurrently
d) To write asynchronous code synchronously

*/