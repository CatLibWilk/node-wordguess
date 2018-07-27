var Letter = require("./letter.js");
var displayedWord = "";

var Word = function(word){
    this.wordArray = [];
        for(var i=0; i<word.length; i++){
            var arrayLetter = new Letter(word[i]);
            this.wordArray.push(arrayLetter);
    };

    this.wordDisplay = function(){
        var wordString = "";
        for(var k = 0; k<this.wordArray.length; k++){
            wordString += this.wordArray[k].letter;
        }
        console.log(wordString);
    };

    this.letterGuess = function(letter){
        var displayedWord = "";
        for(var j=0; j<this.wordArray.length; j++){
            var check = this.wordArray[j].guessFun(letter);
            
        }

        for(var l=0; l<this.wordArray.length; l++){

            var charPlace =this.wordArray[l].display();

            if(charPlace !== "_"){
                this.wordArray[l].guessed = true;
            };
        }
        for (var m = 0; m<this.wordArray.length; m++){
            if(this.wordArray[m].guessed){
                displayedWord += " " + this.wordArray[m].letter + " ";
            }else{
                displayedWord += " " + "_" + " ";
            }
        }
        return displayedWord;
        console.log(displayedWord);
    };

};

// var word1 = new Word("disco");
// word1.letterGuess("d");
// word1.letterGuess("i");
// word1.letterGuess("s");
// word1.letterGuess("c");
// word1.letterGuess("o");

module.exports = Word;
// word1.wordArray[1].guessFun("i");



