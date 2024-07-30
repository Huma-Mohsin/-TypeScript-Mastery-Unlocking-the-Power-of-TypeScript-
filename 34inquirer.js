/*  Inquirer is a library that provides a simple API for building interactive command line tools.

inquirer is not a class but an object and a nodde.js library.

we install it by using npm i inquirer; before installation we have to make some changes that is it is necessary to install tsconfig.json file by using tsc --init.
this command builds a tsconfig file , which contains an information in a Json format.
this file contain all necessary settings and control of typescript's behaviour.

befor inquirer we have to set target ES2020 or later, moreover we, change module to nodeNext and uncomment the module resolution and set it to node Next.

definition of target= shows the js version we used in our code.
module= specifies what module code is generated .
module resolution =shows how TS looks for a file in a module.

after these settings , we will go to install package.json file by usin npm init -y command.
this command builds a package,json file which contains all the realted information of our code or metadata like, name of project, version,description,keywords,dependencies,author,license etc.

then we add type:module in a package.json file from commonjs.

after setting these two main files we install inquirer package,

we then import inquirer in our code  from inquirer and install its types b/c we are using TS.
like this npm i --save-dev @types/inquirer

*/
//we use shebang to import our code in to an npm package like #!usr/bin/env node
//import inquirer from "inquirer";
import { input } from '@inquirer/prompts';
const answer = await input({
    message: `Enter Any Number`,
});
const num = parseInt(answer);
if (isNaN(num)) {
    throw new Error("Invalid Number");
}
console.log(" Table Of " + answer);
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${i * num}  `);
}
