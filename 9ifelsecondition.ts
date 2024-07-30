 /*
we if else for conditions. if condition in if becomes true then it executes if block else it executes else block

Developer can use if else conditions based on its app's requirement.

//IF ELSE STATEMENTS FOR PRACTICING A CODE 
******************************************

1-  IF it is raining AND the temperature is below 60°F, THEN take an umbrella and wear a coat. ELSE IF it is sunny OR the temperature is above 80°F, THEN wear sunglasses and a hat. ELSE wear a light jacket.*/

let isRaining=true;
let temperature=80;
let isSunny=false;

if(isRaining && temperature<60){
    console.log("take an umbrella and wear a coat");
}
else if (isSunny || temperature>80){
    console.log("wear sunglasses and hat.")
}
else{
    console.log(" wear a light jacket")
}
// wear a light jacket

/*
2. Height Verification:
    - If a person is 18 years old and their height is 5'9" or taller, they can ride a roller coaster.
*/

let age=18;
let height: string = `5'9"`
if( age===18 && height >=`5'9"`){
    console.log("You can Ride a roller coaster")
}
else{
    console.log("You cannot ride a roller coaster.")
}
//You can Ride a roller coaster

/*
3- Grade Calculation:
    - If a student scores 95 or higher, they get an A. If they score 85-94, they get a B. If they score 75-84, they get a C. Otherwise, they fail.*/

    let scores:number=92;
    if(scores>=95){
        console.log("You get A grade.")
    }
    else if(scores >85 || scores<94){
        console.log("You get B grade.")
    }
    else if(scores >75 || scores<84){
        console.log("You get C grade.")
    }
    else{
        console.log("You Failed.")
    }
//You get B grade.

/*
4. Discount Eligibility:
    - If a customer is a student or a senior, and they spend over $100, they get a 10% discount.*/
    let isCustomer="senior";
    let isdiscount=true;
    let spendamount=100
if(isCustomer==="senior" || isCustomer==="student"){
    console.log(`you get 10% discount if you spend $${spendamount} in purchasing items`)
}
else{
    console.log("you donot avail discounts")
}
//you get 10% discount if you spend $100 in purchasing items

/* 
5- Day of the Week:
    - If it's Monday or Friday, and it's not a holiday, go to work.
    - Otherwise, it's a day off.*/

    let day="Monday";
    let holiday=true;
    if((day==="Monday" || day==="Friday")&& !holiday){
        console.log("go to work");
    }
    else{
        console.log(" it's a day off.")
    }
// it's a day off.

/*
6- Product Availability:
    - If a product has more than 20 units in stock, it's available for purchase.
    - Otherwise, it's out of stock.*/

    let stock=20;
    if(stock>20){
        console.log("it's available for purchase.")
    }
    else{
        console.log("it's out of stock")
    }
    //it's out of stock