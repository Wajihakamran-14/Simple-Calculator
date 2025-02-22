import inquirer from "inquirer";
let answer = await inquirer.prompt([
    { message: "Enter first number :", type: "number", name: "firstNumber" },
    { message: "Enter second number :", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to perform Operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// Conditional statement IF-ELSE
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
} //tsx
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please select valid operator");
}
