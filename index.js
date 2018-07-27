var Word = require("./word.js");
var inquirer = require("inquirer");

var choicesStable = [
    "panache",
    "pizzaz",
    "proscutto",
    "pringle",
    "pants"
];

var chosen = "";
var servedWord = "";

function wordChooser(){
    var random = Math.floor(Math.random()*5);
    chosen = choicesStable[random];
    servedWord = new Word(chosen);
};


wordChooser();



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
            console.log(`Ta Da! you've correctly guessed the word ${chosen}.`)
            inquirer.prompt([
                {
                    type: "list",
                    name: "restart",
                    message:  "do you want to play again?",
                    choices:  ['yes', 'no']
                }
            ]).then(function(response){
                if(response.restart === "yes"){
                    wordChooser();
                    gameCycle();
                }else{
                    console.log(`have a nice day!`);
                }
            });

        }
    });
};


gameCycle();