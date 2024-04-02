#! /usr/bin/env node
import inquirer from "inquirer";


const randomNumber =Math.floor(Math.random() * 6 + 1);

console.log("welcome to a number guessing game");

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message:"Please guess a number between 1-10: ",

    },
]);

if(answer.userGuessedNumber === randomNumber){
    console.log("congratulations! you guesses right number.")

} else{
    console.log("you guess wrong number")

}