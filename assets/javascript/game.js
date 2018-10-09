

let blankWords = [];

const zodiac = ["dragon", "snake", "pig", "monkey", "horse", "sheep", "rat", "rooster", "ox", "tiger", "rabbit", "dog"];

let randomNum = Math.floor(Math.random() * zodiac.length);

let chooseRand = zodiac[randomNum];
console.log(chooseRand);

function guessNumber(argument) {
	for(let i = 0; i < chooseRand.length; i++ ) {
		blankWords.push("_");
	}
	return blankWords;
}

console.log(guessNumber());

document.getElementById("winNum").addEventListener("keydown",guessNumber);




