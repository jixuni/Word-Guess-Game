
var correctGuess = [];
var htmlCorrectGuess = document.getElementById("correct_guesses");

var wrongGuess = [];
var htmlWrongGuess = document.getElementById("already_guessed");


//set a blank array 
var blankWords = [];

// These are my hangman words store in const zodiac 
var zodiac = ["dragon", "snake", "pig", "monkey", "horse", "sheep", "rat", "rooster", "ox", "tiger", "rabbit", "dog"];

// random generator rounded down to nearest whole number, picks randomly an index in zodiac
var randomNum = Math.floor(Math.random() * zodiac.length);

// This allows chooseRand to be assign to random index in zodiac and the corresponding string attach to that index
let chooseRand = zodiac[randomNum];
console.log(chooseRand);

//Function loops through chooseRend and append "_" to blank words base on the the length of the string. Also returns blankWords
function guessNumber() {
	for(var i = 0; i < chooseRand.length; i++ ) {
		blankWords.push("_");
	}
	return blankWords;
}
guessNumber();
console.log(blankWords);

var replaceContent = document.getElementById("magic_word");
replaceContent.textContent = blankWords.join(" ");// removes the ,  between _


document.onkeyup = function(event){
	for(var i = 0; i < chooseRand.length; i++){
		console.log(event.key)
		if(event.key === chooseRand[i]){
			correctGuess.push(event.key);
			console.log("correct guess", correctGuess);
			correctGuess = htmlCorrectGuess.textContent;
		}
		if(event.key !== chooseRand[i] && event.key !== wrongGuess){
			wrongGuess.push(event.key);
			htmlWrongGuess.textContent = wrongGuess;
			console.log("wrong guess", wrongGuess);
		}
	}
}

