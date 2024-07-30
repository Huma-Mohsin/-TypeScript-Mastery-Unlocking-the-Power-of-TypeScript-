/*
Variables:-
********** 

A variable is just like a container that holds some values in it. Basically when we declare a variable, a block of memory is allocated to store a value asscociate with that variable.
two ways to declare a variable.
1- by using let keyword.
2. by using const keyword.

Declaring a variable with let.
****************************** 

let is actually a block level scope.It can be only accessed here where it is defined.
when we are declaring a variable by using let keyword , it allows you to reaasign a value later.
 
case:1:-
--------  */   let myvar1; //type is any

/*
case:2:-
-------  */     let myvar2="Declaring variable using let keyword"// here TS inference that this variable is of type string and if i want to reassign it with new value , it allows to enter any string value only and produce an error instead of string to all values with other data type.

//important point is that when we declare and initialize a variable in a single line, ts inferrred its type with given value instantly and it considered that inferred data type when you reasssigned a value.

//myvar2=45;  //produce an error due to type , inferenced by Ts.

myvar2="Reassigned value with string";

/*
case:3:-
-------

by using let keyword , we can declare a variable at a single line and initialize it another line, it allowed to do .*/

let myvar3; //declaring a variable , here data type is any.

myvar3=true;//initialize a variable with boolean data type and here  data type is still any .

myvar3="initializing a variable in a nextline allows you to enter values of different data type b/c it's data type remains any ." //data type of variable is still any.

//Declaring a variable by using const:-
//************************************

//declaring a variable by using const, initialized value remains constant. once the variable is declared with value,this value cannot be change .

//const is also a block level scope, value with const can be accessed where it is defined.


const speedoflight=3*10^8; //it inferred automatically that it is a number type data.

//speedoflight=12345; //gives an error when we want to reassigned it with new value i.e cannot reassign a value b/c it is a constant.

//when we are using a const keyword for declaring a variable , it keeps in mind that it allows you to declare and initialize it instantly.if not , it gives an error to initialize it.

// const std_name:string;    //error- const declaration must be initialize.
// std_name="Huma mohsin";   // cannot assign to std_name b/c it is a constant.

const std_name="HUMA MOHSIN";// declare and initialize it at first line , type is inferred by ts itself as a string due to provided value.

//SUMMARY:-

// It is a good practice to use let keyword for declaring a variable when we know that values of a variable may be change later in a code .

//Use const for declaring a variable, when we know that value of a variable doesnot need to change later and it remains constant later in a code.




//-----------------------------------The End---------------------------------------------------








