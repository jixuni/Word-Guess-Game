
//set a plank array 
let blankWords = [];

// These are my hangman words store in const zodiac 
const zodiac = ["dragon", "snake", "pig", "monkey", "horse", "sheep", "rat", "rooster", "ox", "tiger", "rabbit", "dog"];

// random generator rounded down to nearest whole number, picks randomly an index in zodiac
let randomNum = Math.floor(Math.random() * zodiac.length);

// This allows chooseRand to be assign to random index in zodiac and the corresponding string attach to that index
let chooseRand = zodiac[randomNum];
console.log(chooseRand);

//Function loops through chooseRend and append "_" to blank words base on the the length of the string. Also returns blankWords
function guessNumber() {
	for(let i = 0; i < chooseRand.length; i++ ) {
		blankWords.push("_");
	}
	return blankWords;
}

window.addEventListener("keydown", checkKeyPress);

function checkKeyPress(key){
	if(key.keyCode == "65"){
		console.log(String.fromCharCode(key.keyCode));
	}
}

console.log(guessNumber());






