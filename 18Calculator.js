console.log("Calculator By If Else In A Function");
console.log("************************************");
function Calculator(numb1, numb2, sign) {
    if (sign === "+") {
        console.log(`Addition: ${numb1} ${sign} ${numb2}`);
        return numb1 + numb2;
    }
    if (sign === "-") {
        console.log(`Subtraction: ${numb1} ${sign} ${numb2}`);
        return numb1 - numb2;
    }
    if (sign === "*") {
        console.log(`Multiplication: ${numb1} ${sign} ${numb2}`);
        return numb1 * numb2;
    }
    if (sign === "/") {
        console.log(`Division: ${numb1} ${sign} ${numb2}`);
        return numb1 / numb2;
    }
    if (sign === "%") {
        console.log(`Remainder: ${numb1} ${sign} ${numb2}`);
        return numb1 % numb2;
    }
    if (sign === "**") {
        console.log(`Power: ${numb1} ${sign} ${numb2}`);
        return numb1 ** numb2;
    }
}
console.log(Calculator(4, 3, "**"));
//calculator by Switch Case
console.log("Calculator By Switch case In A Function");
console.log("************************************");
function Calculator_aid(value1, value2, sign) {
    switch (sign) {
        case "+":
            console.log(`Addition: ${value1} ${sign} ${value2}`);
            return value1 + value2;
            break;
        case "-":
            console.log(`Subtraction: ${value1} ${sign} ${value2}`);
            return value1 - value2;
            break;
        case "*":
            console.log(`Multiplication: ${value1} ${sign} ${value2}`);
            return value1 * value2;
            break;
        case "/":
            console.log(`Division: ${value1} ${sign} ${value2}`);
            return (value1 / value2).toFixed(2);
            break;
        case "%":
            console.log(`Remainder: ${value1} ${sign} ${value2}`);
            return value1 % value2;
            break;
        case "**":
            console.log(`Power: ${value1} ${sign} ${value2}`);
            return value1 ** value2;
            break;
        default:
            return `Invalid Data`;
    }
}
console.log(Calculator_aid(2, 6, "*"));
export {};
