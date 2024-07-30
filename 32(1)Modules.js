/* Modules is a way in which developer break down its huge code and functionality into different modules and merge them by creating a link b/w exported files and imported files.

we use exported keyword with a file or functionality which is to be exported to other file. export shows that particular file is now available for other file to be integrated.

we use import keyword on that file where we want to import that particular code file which was available to export .

2 types of export in modules

1-export(NameExport)
2-export default

export default is available when we have single piece of code that is to be exported to other file.

export is used when we want to export multiple data in a particular file.

For Making a module, we need to change in tsconfig file i.e
target" ES2020 0r latest,
Module: "nodenext",
moduleresolution:uncomment and change to nodenext

while in package.json
we add type "module"

// This makes code maintainability,readability easier to debug.

*/
import a from "./32(2).js"; // used for default export.
import { b, c } from "./32(3).js"; // { } used for named export. 
console.log(a + b + c);
/*
Question: What is the difference between export default and export in a JavaScript module?

A) export default exports a single value, while export exports multiple values.

B) export default exports a value that can be imported without using curly braces, while export requires curly braces to import.   (a,b are correct) but b is more accurate.

C) export default is used for functions, while export is used for variables.

D) export default is used for classes, while export is used for objects. */
// 1. What is the difference between export and export default in a JavaScript module?
//export is a named constant we used this named constant for export multiple data by using export keyword
//2. How do you import a module that has been exported using export default?
// import a from "./abc.ts"
//3. Can you import a specific function or variable from a module without importing the entire module?
// yes by using export keyword or named export to a particular related function or variable in a module , without importing the entire module. 
//4. What is the purpose of the import * as alias syntax in JavaScript modules?
//import * means import all module from a particular file.
//5. How do you create a JavaScript module that exports multiple values?
//by using name export to each function or variable or data , we can export a multiple values from a module
//6. Can you explain the difference between named exports and default exports in JavaScript modules?
//Default Export used for export of single value, and this can import without use of curly braces while named export is used to export multiple functions, variable to a file by using export keyword to each function or variable.it can be imported by using curly bracket.
//7. How do you import a module that has been exported using named exports?
// import {a,b} from "./abc.js"
//8. What is the purpose of the export { name1, name2 } syntax in JavaScript modules?
//this allows multiple exported function or variable to be imported from a particular file, each value is seperated by using comma in curly bracket.
/*In the context of JavaScript modules, a namespace is a way to import all exports from a module into a single object, rather than importing individual exports.

When you use a namespace import, you can access all exports from the module using the object's properties.
*/
/**Modules

1. What is the main difference between a JavaScript module and a script?
a) Modules are executed synchronously, while scripts are executed asynchronously.
b) Modules support export and import statements, while scripts do not.(correct)
c) Modules are only used on the server-side, while scripts are only used on the client-side.
d) Modules are used for large applications, while scripts are used for small applications.

2. Which keyword is used to define a module in JavaScript?
a) module
b) export
c) import
d) script
No any keyword which defines module.

3. What is the purpose of the export keyword in a module?
a) To import modules from other files.
b) To export values, functions, or classes from a module.(correct)
c) To define a module.
d) To create a namespace.

4. Can a module have multiple default exports?
a) Yes
b) No (correct) if you try to define multiple default export, you will get an error.
c) Only if using a namespace import.
d) Only if using named exports.
 
Namespaces

1. What is the purpose of a namespace in JavaScript modules?
a) To import modules from other files.(correct)
b) To export values, functions, or classes from a module.
c) To group related exports under a single name.
d) To define a module.

2. How do you create a namespace import in JavaScript?
a) import * as namespace from './module.mjs';   (correct)
b) import namespace from './module.mjs';
c) import { namespace } from './module.mjs';
d) import './module.mjs';
*/
//1. What programming language are the modules written in? // modules written in different programming languages like python, typescript, javascript etc
//2. What is the purpose of each module? // to do microservices of your code, which helps to increase maintainability, readability and easy to debug code easily.
//3. Share the code for each module (or a brief summary of what each module does)
// let us consider
//File1.ts contains 
let myname = "zara";
export default myname;
//File2.ts
let place = "Karachi";
let language = ["HTML", "CSS"];
export { place, language };
//main.ts
// import myname from "./File1.js"
// import {place,language} from "./File2.js"
console.log(`my name is ${myname} and i live in ${place} and i know ${language}`);
/*What keyword is used to export a value, function, or class from a JavaScript module?

A) import
B) export (correct)
C) module
D) script

What is the syntax to import a specific function or variable from a module?

A) import module from './module.mjs';
B) import { function } from './module.mjs';(correct)
C) import './module.mjs';
D) import * as module from './module.mjs';

What is the purpose of the default keyword in a module export?

A) To export a value as a namespace
B) To export a value as the module's default export (correct)
C) To import a value from another module
D) To define a module's name

What is the difference between import * as module and import module?

A) import * as module imports all exports, while import module imports only the default export.(correct)
B) import * as module imports only the default export, while import module imports all exports.
C) import * as module is used for named exports, while import module is used for default exports.

Can a module have multiple default exports?

A) Yes
B) No (correct)

What is the purpose of the export {} syntax?

A) To export a value as the module's default export
B) To export multiple values as named exports (correct)
C) To import values from another module
D) To define a module's name

What is the difference between import and require?

A) import is used for ES6 modules, while require is used for CommonJS modules (correct)
B) import is used for CommonJS modules, while require is used for ES6 modules
C) import is used for client-side modules, while require is used for server-side modules
D) import is used for server-side modules, while require is used for client-side modules


What is the difference between __dirname and __filename in a Node.js module?

A) __dirname returns the directory name, while __filename returns the file name (correct)
B) __dirname returns the file name, while __filename returns the directory name
C) __dirname returns the current working directory, while __filename returns the absolute file path
D) __dirname returns the absolute file path, while __filename returns the current working directory

What is the purpose of the package.json file in a Node.js project?

A) To define the project's dependencies
B) To define the project's scripts
C) To define the project's configuration settings
D) All of the above (correct)

What is the difference between npm install and npm ci?

A) npm install installs dependencies and saves them to package.json, while npm ci only installs dependencies without saving.
B) npm install installs dependencies without saving, while npm ci installs dependencies and saves them to package.json.
C) npm install installs dependencies from package-lock.json, while npm ci installs dependencies from package.json.
D) npm install installs dependencies from package.json, while npm ci installs dependencies from package-lock.json. (correct)

What is the purpose of the node_modules directory in a Node.js project?

A) To store project-specific code
B) To store dependencies and their dependencies (correct)
C) To store project configuration files
D) To store build output

What is the purpose of the package-lock.json file in a Node.js project?

A) To store project metadata
B) To store dependency versions (correct)
C) To store build scripts
D) To store project configuration

What is the difference between npm run and npx?

A) npm run executes a script, while npx executes a package
B) npm run executes a package, while npx executes a script
C) npm run installs a package, while npx executes a package (correct)
D) npm run executes a package, while npx installs a package


What is the purpose of the --save-dev flag when running npm install?

A) To save the package as a production dependency
B) To save the package as a development dependency (correct)
C) To install the package globally
D) To install the package locally

What is the difference between npm link and npm install?

A) npm link installs a package globally, while npm install installs locally
B) npm link creates a symlink to a package, while npm install copies the package (correct)
C) npm link installs a package from a local directory, while npm install installs from the registry
D) npm link updates a package, while npm install installs a new package

What is the purpose of the npm audit command?

A) To list all installed packages
B) To check for outdated packages
C) To identify security vulnerabilities in dependencies (correct)
D) To clean up unnecessary packages

What is the difference between npm outdated and npm update?

A) npm outdated lists outdated packages, while npm update updates them(correct)
B) npm outdated updates packages, while npm update lists outdated packages
C) npm outdated checks for security vulnerabilities, while npm update updates packages
D) npm outdated updates packages globally, while npm update updates packages locally

What is the purpose of the npm init command?

A) To create a new npm package
B) To install dependencies for a project
C) To initialize a new npm project with a package.json file (correct)
D) To publish a package to the npm registry

What is the purpose of the npm shrinkwrap command?

A) To lock down dependency versions (correct)
B) To update dependencies to the latest versions
C) To generate a package.json file
D) To publish a package to the npm registry

What is the difference between npm and yarn?

A) npm is a package manager, while yarn is a build tool
B) npm is a build tool, while yarn is a package manager
C) npm and yarn are both package managers with different features and philosophies (correct)
D) npm is a frontend package manager, while yarn is a backend package manager


What is the purpose of the node_modules directory in a JavaScript project?

A) To store project-specific code
B) To store dependencies and their dependencies (correct)
C) To store build output
D) To store project configuration files

What is the difference between require and import in JavaScript?

A) require is for CommonJS modules, while import is for ES6 modules (correct)
B) require is for ES6 modules, while import is for CommonJS modules
C) require is synchronous, while import is asynchronous
D) require is asynchronous, while import is synchronous

What is the purpose of the package.json file in a JavaScript project?

A) To store project-specific code
B) To store dependencies and metadata (correct)
C) To store build output
D) To store project configuration files










*/ 
