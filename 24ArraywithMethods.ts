/* Array is a data structure.

-combination of different elements placed under a single variable name in [] termed as as Array.
 
-Each value of an array is termed as Element of an array.

-Values in an array can be stored at particular index i.e start with 0 index and so on.

-unlimited elements are stored in an Array.

-we can manipulate at an array by using different array;s methods. */


let students:string[]=["Ali","Ahmed","Faiza"];

//string Methods of an array.

//1-Concat-joins a string or an array and returned a new array.

let students1=students.concat("Zunaira"); //joins at last
//or joins other array and return a new array.
let students2=students.concat(["Ayesha","Amna","Zaira"])
console.log(students1);//[ 'Ali', 'Ahmed', 'Faiza', 'Zunaira' ]
console.log(students2);//[ 'Ali', 'Ahmed', 'Faiza', 'Ayesha', 'Amna', 'Zaira' ]
console.log(students);//["Ali","Ahmed","Faiza"];

//--------------------------------------------------------------------------------

//2- IndexOf()//used to find out index of any value in an array.
let student3=students.indexOf("Ahmed");
console.log(student3);//1
let student4=students.indexOf("zoha");
console.log(student4);// return -1 when given value is not present in an array.

//--------------------------------------------------------------------------------

//3-LastIndexOf
let student5=students.lastIndexOf("Ayesha");
console.log(student5);//shows -1 when value is not present.
let student6=students.lastIndexOf("Faiza");
console.log(student6);//2 which is correct
let student7=students.lastIndexOf("Ali");
console.log(student7); //As ali is not atlast it gives 0 value to show that we cannot find lastIndex of that value which doesnot occur at last of an array.
 
//-----------------------------------------------------------------------------------------

//4- join():join turns an array in to string and seperated elements with seperator.join always take value as string.
let student8=students.join();
console.log(student8);//Ali,Ahmed,Faiza
let student9=students.join(" and ");
console.log(student9);//Ali and Ahmed and Faiza

//--------------------------------------------------------------------------------

/*
Difference b/w a concat and join is that :-

concat is used to merge 2 or more arrays.
concat always return a new array.

join:-

join method is used to join an elements with any seperator.
It returns a new string.
join method always take string argument .

//---------------------------------------------------------------------------------

//5- push :-push is used to add elements at the last of an array.
            push method returns a new length .
            push method modify original array.*/

let student10=students.push("Huzaifa");
console.log(student10);//4 
console.log(students.push("Hira")); // returns a new lenght after pushing an element in an array.i.e 5
console.log(students);//returns a original updated array,[ 'Ali', 'Ahmed', 'Faiza', 'Huzaifa', 'Hira' ]

//------------------------------------------------------------------------------------

/* 6- Pop:- Pop method is used to remove last element from an array.
            Pop method returns a remove element from an array.
            pop method updated an original array.*/

            let student11=students.pop();
            console.log (student11);//"Hira"
            console.log(students);//[ 'Ali', 'Ahmed', 'Faiza', 'Huzaifa' ]

//----------------------------------------------------------------------------------

/* 7- reverse(): This method reverse all elements in an array such that first element becomes last and last element becomes first in an array. It modifies a new array.*/

let student12=students.reverse();
console.log(student12);//[ 'Huzaifa', 'Faiza', 'Ahmed', 'Ali' ]
console.log(students);//[ 'Huzaifa', 'Faiza', 'Ahmed', 'Ali' ]

//----------------------------------------------------------------------------------------------

/* 8- Shift(); shift removes first element from an array.It also modifies an original array.
it returns the removed element.*/
let student13=students.shift();
console.log(student13);//Huzaifa
console.log(students);//[ 'Faiza', 'Ahmed', 'Ali' ]

//--------------------------------------------------------------------------------------------

/* 9- unShift();
unshift method add the element in an array at first position i.e 0 index.
It modifies an original array.
It returns a new length of an updated array.*/

let student14=students.unshift();//doesnot add any memeber , original array remains the same.
console.log(student14);//3
console.log(students);//[ 'Faiza', 'Ahmed', 'Ali' ]

let student15=students.unshift("Huma");
console.log(student15);//returns a new length i.e 4
console.log(students);//[ 'Huma', 'Faiza', 'Ahmed', 'Ali' ]

//-------------------------------------------------------------------------------------------

/* 10-  toString():- this methods converts an array or an object in to a string. This returns a string. */

let student16=students.toString();
console.log(student16);//Huma,Faiza,Ahmed,Ali
console.log(students);//[ 'Huma', 'Faiza', 'Ahmed', 'Ali' ]

//------------------------------------------------------------------------------------------

/*11 Slice():- this methods makes a shallow copy of an array.
It returns a new array.*/
console.log(students);//[ 'Huma', 'Faiza', 'Ahmed', 'Ali' ]
let student17=students.slice(0,2);
console.log(student17);//[ 'Huma', 'Faiza' ]
console.log(students);//[ 'Huma', 'Faiza', 'Ahmed', 'Ali' ]
let students18=students.slice(2);
console.log(students18);//[ 'Ahmed', 'Ali' ]
console.log(students);//[ 'Huma', 'Faiza', 'Ahmed', 'Ali' ]
 
/* 12- splice():-

Splice method is used to remove an element, to Add element or to replace element from an array.
We use splice method to make changes from any middle position of an array.It modifies an original array.

syntax: arr.splice(,startNumber, deleteCount, updatedValues)*/
console.log(students);//[ 'Huma', 'Faiza', 'Ahmed', 'Ali' ]
let student19=students.splice(2,0,"Sana","Saira")
console.log(student19);//this is the splice method , this methods returns an array of deleted items, As here no elements are deleted so it returns an empty array.

console.log(students);//[ 'Huma', 'Faiza', 'Sana', 'Saira', 'Ahmed', 'Ali' ]
let student20=students.splice(1,2,"Tahir","Saman");
console.log(student20);//[ 'Faiza', 'Sana' ]
console.log(students);//[ 'Huma', 'Tahir', 'Saman', 'Saira', 'Ahmed', 'Ali' ]

let student21=students.splice(3,1,"Omar","Anaya");
console.log(student21);//saira
console.log(students);//[ 'Huma', 'Tahir', 'Saman', 'Omar','Anaya','Ahmed', 'Ali' ]

//------------------------------------------------------------------------------------

// 13- sort():- sort method is used to do sorting over string or numeric array .
                // It modifies an original  Array.
let student22=students.sort((a,b)=>a.localeCompare(b));//alphabetical sorting
console.log(student22); /* [
    'Ahmed', 'Ali',
    'Anaya', 'Huma',
    'Omar',  'Saman',
    'Tahir'
  ]*/
 
console.log(students);/* [
    'Ahmed', 'Ali',
    'Anaya', 'Huma',
    'Omar',  'Saman',
    'Tahir'
  ]*/

    //z-a order
    let students23=students.sort((a,b)=>b.localeCompare(a));
    console.log(students23);/*[
        'Tahir', 'Saman',
        'Omar',  'Huma',
        'Anaya', 'Ali',
        'Ahmed'
      ]*/
    console.log(students);/*[
        'Tahir', 'Saman',
        'Omar',  'Huma',
        'Anaya', 'Ali',
        'Ahmed'
      ] */


//14- every():- every is an array methods which interpret that all elements in an array fullfills the defined condition or not , it returns true or false , if one of the element doesnot full fill the conditions , it returns false.

let student24=students.every((elem)=>elem.startsWith("H"));
console.log(student24);//false

//15- Some():- //This method checks whether some or atleast one element fullfills the defined condition or not.
// This also returns output in true or false.

let student25=students.some((elem)=>elem.startsWith("H"));
console.log(student25);//true

let salary=[250,300,280,450]
let salary1=salary.length;
console.log(salary1);//4
let salar2=salary.includes(250);
console.log(salar2);//true
let salary3=salary.sort((a,b)=>a-b);
console.log(salary3);//[ 250, 280, 300, 450 ]
let salary4=salary.sort((a,b)=>b-a);
console.log(salary4);//[ 450, 300, 280, 250 ]
console.log(salary);//[ 450, 300, 280, 250 ]
let salary5=salary.find((elem)=>elem>100);
console.log(salary5);//when not exist, ans is undefined.
// but i get 450 b/c we are getting 450 as the output because the find() method returns the first element that meets the condition, which is elem > 100. In this case, the first element in the array that is greater than 100 is 450.
 


/*Array Methods that modifies in an existing Array.

push
pop
shift
unshift
splice 
sort
reverse

Array methods that returns a new array:

slice
map
filter
reduce
concat
find

*/









