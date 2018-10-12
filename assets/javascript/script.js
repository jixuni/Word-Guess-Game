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
htmlMagicWord.textContent = magicWord.join(" ");

document.onkeyup = function(event){
    for(var i = 0; i < chooseWord.length; i++){
        if(event.key == chooseWord[i]){
            magicWord.splice([i], 1, event.key);
        }
    }
}
console.log(chooseWord);
