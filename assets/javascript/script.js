var correctGuess = [];
var wrongGuess = [];

var lifeLeft = [];

var magicWord = [];

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

var randomNum = Math.floor(Math.random()* zodiac.length);

var chooseWord = zodiac[randomNum];

function randomWord(){
    for(var i = 0; i < chooseWord.length; i ++){
        magicWord.push("_");
    }
    return magicWord;
}
randomWord();
console.log(magicWord);

var htmlMagicWord = document.getElementById("magic_word");
var htmlWrongGuess = document.getElementById("wrong_guess")


document.onkeyup = function(event){
    for(var i = 0; i < chooseWord.length; i++){
        if(event.key == chooseWord[i]){
           magicWord[i] = chooseWord[i]; 
           htmlMagicWord.textContent = magicWord.join(" "); // the .join method removes the , next to the _ 
        }
        if(event.key !== magicWord[i]){
            wrongGuess.push(event.key);
            console.log(wrongGuess);
        }
    }
}
console.log(chooseWord);
