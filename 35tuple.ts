/*Tuple is a data typed array and it is used to collection different types of values based on each data types at particular index.

 type of values at each index is already predefined. 
 
 tuple is fixed length of an array. 
 
 if we define values less than or greater than its predefined typed array then we get an error.
  */

 let person:[{name:string,age:number},string,[string,string],boolean]=[{name:"sana",age:25},"Karachi",["Gen Ai","Next.js"],true];


 //destructuring is a way to get the values defined at particular index in an array.

 console.log(person[0]);
 console.log(person[3]);
 console.log(person[2][0]);
 console.log(person[1]);
 console.log(person[0].age);