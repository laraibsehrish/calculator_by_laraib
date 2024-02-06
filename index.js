#! /usr/bin/env node 
//excute program in node shebang 
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimations from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let neon_title = chalkAnimations.neon('Lets start calculating with Laraib');
    await sleep();
    neon_title.stop();
    console.log("╔════════════════════════════╗\n" +
        "║   ASCII ART CALCULATOR     ║\n" +
        "╠════════════════════════════╣\n" +
        "║     7 |  8 |  9 |  +  | C  ║\n" +
        "║     4 |  5 |  6 |  -  | AC ║\n" +
        "║     1 |  2 |  3 |  *  | %  ║\n" +
        "║     0 |  . |  = |  /  | ±  ║\n" +
        "╚═══════════════════════════=╝");
}
await welcome();
async function askQuestion() {
    const ans = await inquirer.prompt([
        {
            type: "list",
            name: "operator",
            message: "Which operation do you want to perform?",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        },
        {
            type: "input",
            name: "number1",
            message: "Enter number 1:",
            validate: function (value) {
                const number = parseFloat(value);
                if (isNaN(number)) {
                    return "Please enter a valid number.";
                }
                return true;
            },
        },
        {
            type: "input",
            name: "number2",
            message: "Enter number 2:",
            validate: function (value) {
                const number = parseFloat(value);
                if (isNaN(number)) {
                    return "Please enter a valid number.";
                }
                return true;
            },
        },
    ]);
    if (ans.operator == "Addition") {
        let sum = parseFloat(ans.number1) + parseFloat(ans.number2);
        console.log(chalk.blue(`${ans.number1} + ${ans.number2} = ${sum}`));
    }
    else if (ans.operator == "Subtraction") {
        let sub = parseFloat(ans.number1) - parseFloat(ans.number2);
        console.log(chalk.blue(`${ans.number1} - ${ans.number2} = ${sub}`));
    }
    else if (ans.operator == "Multiplication") {
        let mul = parseFloat(ans.number1) * parseFloat(ans.number2);
        console.log(chalk.blue(`${ans.number1} * ${ans.number2} = ${mul}`));
    }
    else {
        let div = parseFloat(ans.number1) / parseFloat(ans.number2);
        console.log(chalk.blue(`${ans.number1} / ${ans.number2} = ${div}`));
    }
}
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer.prompt([
            {
                type: "input",
                name: "restart",
                message: chalk.yellow("Do you want to continue? (y/N)"),
            },
        ]);
    } while (again.restart == "y" || again.restart == "Y");
}
startAgain();
