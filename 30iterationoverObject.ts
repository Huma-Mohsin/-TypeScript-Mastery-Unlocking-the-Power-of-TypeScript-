// If we define a type explicitly ,when we are declaring an object we call it an object literal.

let std:{name:string;age:number;course:string};

std={name:"Sana",age:45,course:"Gen AI"};//called object Literal when we define type explicitly by using type annotation.



for(let key in std) {

    
    console.log(`${key}`);

}



const obj:{[key:string]:string|boolean|number}={
    duration:2,
    center:"Karachi",
    isStudent:true}

    Object.entries(obj).forEach(([key,value]:[string,string|boolean|number])=>{ 
        console.log(`${key}:${value}`);
      });


