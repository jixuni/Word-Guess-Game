
// Delcare my variables
var wrongGuess = [];

var lifeLeft = 7;
var magicWord = [];
var playerGuess = [];
var winningCounter = 0;
var htmlMagicWord = document.getElementById("magic_word");


const zodiac = [
    "dragon", 
    "snake", 
    "pig", 
    "monkey", 
    "horse", 
    "sheep", 
    "rat", 
    "rooster", 
    "ox", 
    "tiger", 
    "rabbit", 
    "dog"
];

// Function for the number of _ base on lenght of word
var randomNum = Math.floor(Math.random() * zodiac.length);

var chooseWord = zodiac[randomNum];

function randomWord(){
    for(var i = 0; i < chooseWord.length; i ++){
        magicWord.push("_");
    }
    return magicWord;
}
randomWord();



htmlMagicWord.textContent = magicWord.join(" "); // the .join method removes the , next to the _ 

// Main function to compare key press to index of chosen word
document.onkeyup = function(event){
    playerGuess = event.key

    if (chooseWord.indexOf(playerGuess) > -1){
        for(var i = 0; i < chooseWord.length; i++){
            if(chooseWord[i] === playerGuess) {
                magicWord[i] = playerGuess;
                winningCounter ++;
                youGotIt();
                //console.log(magicWord); bug fixing
                //console.log(playerGuess);bug fixing
                winnerOrLoser();
            }
        }
    } else{
        wrongGuess.push(playerGuess);
        lifeLeft--;
        //console.log(lifeLeft); bug fixing
        winnerOrLoser();
        replaceWrong();
        remainingLife();
    }


}
//console.log(chooseWord); bug fixing

// a counter to see if condition for win/lose is meet
function winnerOrLoser() {
    if (winningCounter === chooseWord.length){
        alert("You win");
    } else if(lifeLeft === 0){
        alert("you lose");
    }
}

// plays "bad" audio and appends the wrong guess to html
function replaceWrong(){
    var htmlWrongGuess = document.getElementById("wrong_guess");
    htmlWrongGuess.textContent = wrongGuess;
    document.getElementById("audio").play();
    
}
// outputs the life/guesses left
function remainingLife(){
    var guessLeft = document.getElementById("lifeLeft")
    guessLeft.textContent = lifeLeft;
}
// plays "good" audio and replace _ with correct letters
function youGotIt(){
    var htmlCorrectGuess = document.getElementById("magic_word");
    htmlCorrectGuess.textContent = magicWord.join(" ");
    document.getElementById("audio2").play();
}

// resets the game
function reset(){
    window.location.reload();
}

