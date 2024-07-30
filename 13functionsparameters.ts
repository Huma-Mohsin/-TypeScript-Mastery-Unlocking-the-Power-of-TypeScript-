/*
Functions can be named as according to their parameter's behaviour.

1- required parameters.
2- default parameters.
3- optional parameters.
4- rest parameters.
*/

/*Functions with Required parameters:-
*************************************/

function reqpara(a:number,b:number):number{
    console.log("Reqiured Parameters behaviour")
    return a+b;
}
console.log(reqpara(3,4));


/*Functions with default Parameters:-
*************************************/
//datatype: fname:string, lname?:string;

function defpara1(fname:string,lname:string="Mohsin"):string{
    return `My name is ${fname} ${lname} , I am a student of GenAI`;

}
console.log(defpara1("Huma"))//Huma Mohsin
console.log(defpara1("Huma","Aftab"))//Huma Aftab


//position of default value in the middle of two required params.
let defpara2:(fname:string, lname:string|undefined,gender:string)=>void=function(fname:string,lname:string="Mohsin",gender:string){
console.log(`I am ${fname} ${lname}. I am ${gender}`)
}
defpara2("Huma",undefined,"female")//I am Huma Mohsin. I am female
defpara2("Huma","Aftab","Female") //I am Huma Aftab. I am Female 

/* optional Parameter:- 
************************
optional parameter is indicated as------ parameter?:datatype.
optional parameter is always used at the end of all required parameters.
this options allows us to enter the value of this parameter is optional, if user does not want to enter then nothing goes wrong with it and if it is defined, not bad.
*/

function optpara(a:string,b:number,c?:string){
    if(typeof c==="undefined"){

    
    return `My Name is ${a} and My Id is ${b}`

}
else {
    return `My Name is ${a} , My Id is ${b} and I am enrolled in ${c} course`
}
}
console.log(optpara("Huma Mohsin", 12345));
console.log(optpara("Huma Mohsin", 12345, "GenAI"))

/*
Rest params:-
*************
function may also contains a rest parameter with particular data typed array which holds a values for a rest parameters.

rest parameter is always defined as a parameter in last after required parameter.

 */
function respara(a:string,b="Mohsin",...c:string[]){
console.log(c);
console.log(`My name is ${a} ${b}.I have command on ${c} courses`)
}
respara("Huma",undefined,"TypeScript");
respara("Huma","Aftab","HTML","CSS","JavaScript","TypeScript","Next.js");
/*[ 'TypeScript' ]
My name is Huma Mohsin.I have command on TypeScript courses
[ 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Next.js' ]
My name is Huma Aftab.I have command on HTML,CSS,JavaScript,TypeScript,Next.js courses
*/
