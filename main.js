#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.magenta.bold("\n Welcome to CodeWithFahad - Currency Convertor\n"));
// define the list of currencys and thier exhange rate
let exhange_rate = {
    "USD": 1,
    "EUR": 0.9,
    "OMR": 0.38,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 278,
};
//promt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from:",
        choices: ["USD", "EUR", "OMR", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices: ["USD", "EUR", "OMR", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);
// perform currency conversion by using formula
let from_amount = exhange_rate[user_answer.from_currency];
let to_amount = exhange_rate[user_answer.to_currency];
let amount = user_answer.amount;
// formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// display the converted amount
console.log(`Converted Amount = ${converted_amount.toFixed(2)}`);
