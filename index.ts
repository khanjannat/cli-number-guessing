#! /usr/bin/env node
import inquirer from "inquirer";

 // 1) computer will generate a random number

 // 2) User input for guessing number

 // 3) compare user input with computer generated number and show result

 const randomNumber = Math.floor(Math.random() * 6 + 1 );

console.log("Welcome to number Guessing Game");

const answer = await inquirer.prompt([

{
    name:"userGuessedNumber",
    type: "number",
    message: "Please guess a number between 1-6:",
},
]);

if (answer.userGuessedNumber === randomNumber){
    console.log("Congtratulation! you guessed right number.");
} else {
    console.log("you guessed wrong number");
}