/*Promises are the way of handling asynchronously behaviour of typeScript.

Promise is basically an object. promise has 3 states:-
1-pending
2-Fullfilled
3-Rejected
 */

//customize way for making promises:-

let mypromise=new Promise((resolve,reject)=>{
    console.log("Pending Status");
    setTimeout(()=>{
        // console.log("Promise Resolved");

        // resolve (["Fullfilled","Good"]); //resolve part goes to .then

        
        console.log("Promise Rejected"); 

        reject ("Ooops!!! An Error Occured");//rejcted part goes to .catch.

        
    },1000)
   
    })
      
    mypromise
    .then((resolve)=>{
        console.log(resolve);
    })
    .catch((error)=>{
        console.log(error);
    })





