var Word = require("./word.js");
var inquirer = require("inquirer");

var servedWord = new Word("penis");
var gameOn = true;

function gameCycle(){
    inquirer.prompt({
        type: "input",
        name: "guess",
        message: "whats your guess?",

    }).then(function(response){
        var progress = servedWord.letterGuess(response.guess);
        if(progress.indexOf(response.guess) === -1){
            console.log(`Sorry, ${response.guess} is not a letter in this word.`);
            console.log(`Sor far ya got: ${progress}.`);
        }
        else{
            console.log(`Yup, you betcha, here's what ya got so far: ${progress}`)
        }
        // console.log(progress);
        if(progress.indexOf("_")!= -1){
            gameCycle();
        }else{
            console.log(`Ta Da! you've correctly guessed the word`);

        }
    });
};

gameCycle();