function NumberGuessingGame(userinput:number){
    let SystemGeneratedNumber:number= Math.floor(Math.random()*11);
    console.log(SystemGeneratedNumber);

    if(userinput===SystemGeneratedNumber){
        return "Congratulations, You Won"
    }
    else{

        return "You Lost, Try Again"
    }
} 
console.log(NumberGuessingGame(5));