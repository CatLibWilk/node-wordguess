var Letter = function(letter){
    this.letter = letter;
    this.guessed
    this.guessFun = function(letter){
        if(!this.guessed){
            if(letter === this.letter){
                this.guessed = true;
            }else{
                this.guessed = false;
            }
        }
        return this.guessed;
    };
    this.display = function(){
        if(!this.guessed){
            return "_";
            console.log("_");
        }
        if(this.guessed){
            return `${this.letter}`;
            console.log(this.letter);
        }
    };
};

module.exports = Letter;