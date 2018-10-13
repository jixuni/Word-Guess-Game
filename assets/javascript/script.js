var correctGuess = [];
var wrongGuess = [];

var lifeLeft = 7;
var magicWord = [];
var playerGuess = [];
var winningCounter = 0;
var htmlMagicWord = document.getElementById("magic_word");
var htmlWrongGuess = document.getElementById("wrong_guess");

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

var randomNum = Math.floor(Math.random() * zodiac.length);

var chooseWord = zodiac[randomNum];

function randomWord(){
    for(var i = 0; i < chooseWord.length; i ++){
        magicWord.push("_");
    }
    return magicWord;
}
randomWord();

var htmlMagicWord = document.getElementById("magic_word");
var htmlWrongGuess = document.getElementById("wrong_guess");
htmlMagicWord.textContent = magicWord.join(" "); // the .join method removes the , next to the _ 

document.onkeyup = function(event){
    playerGuess = event.key

    if (chooseWord.indexOf(playerGuess) > -1){
        for(var i = 0; i < chooseWord.length; i++){
            if(chooseWord[i] === playerGuess) {
                magicWord[i] = playerGuess;
                winningCounter ++;
                console.log(magicWord);
                console.log(playerGuess);
                winnerOrLoser();
            }
        }
    } else{
        wrongGuess.push(playerGuess);
        lifeLeft--;
        console.log(lifeLeft);
        winnerOrLoser();
    }


}
console.log(chooseWord);
function winnerOrLoser() {
    if (winningCounter === chooseWord.length){
        alert("You win");
    } else if(lifeLeft === 0){
        alert("you lose");
    }
}


