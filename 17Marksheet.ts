//MarkSheet using If-else in function



console.log("Mark Sheet By If Else In A Function")
console.log("**********************************")

function Marksheet(Urdu: number, English: number, Maths: number) {

  let total = 300;
  console.log(`Total: ${total}`);
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  console.log("MarksObtained:", sum);
  let percentage = (sum / total) * 100;
console.log(`Percentage:${percentage}`);
if (percentage>90 && percentage <100){
    return 'You get A+ Grade'
}
else if(percentage >80 && percentage<90){
    return `you get A Grade`
}
else if (percentage >70  && percentage <80)
    return `you get B Grade`

else if (percentage >60 && percentage <70)
    return `you get C Grade`

else if (percentage >50 && percentage< 60)
    return `you get D Grade`

else if (percentage >40 && percentage< 50)
    return `you get E Grade`

else{
    return `Failed`
}
}


console.log(Marksheet(95, 80, 100));

console.log("\n")
//MarkSheet by using switch case

console.log("Mark Sheet By Switch In A Function")
console.log("**********************************")

function Mark_Sheet(English:number,Urdu:number,Maths:number){
    
let TotakMarksObtained:number=0;
for (let i = 0; i < arguments.length; i++) {
    TotakMarksObtained+=arguments[i];
    
}
console.log("Total Marks Obtained:",TotakMarksObtained);
let totalMarks:number=300;
console.log("Total Marks:", totalMarks);
let percentage:number=(TotakMarksObtained/totalMarks)*100;
console.log("Percentage:",percentage);

switch(true){
    case (percentage >= 90 && percentage <= 100) :
        return `You got A+ Grade.`
        break;

        
    case (percentage >= 80 && percentage <= 90) :
        return `You got A Grade.`
        break;

        
    case (percentage >= 70 && percentage <= 80) :
        return `You got B Grade.`
        break;

        
    case (percentage >= 60 && percentage <= 70) :
        return `You got C Grade.`
        break;

        
    case (percentage >= 50 && percentage <= 60) :
        return `You got D Grade.`
        break;

        
    case (percentage >= 40 && percentage <= 50) :
        return `You got E Grade.`
        break;

        
    case (percentage >= 30 && percentage <= 40) :
        return `You are Failed.`
        break;
        
    

        default : 
        return `Invalid Data`
}
}
console.log(Mark_Sheet(80,56,86))