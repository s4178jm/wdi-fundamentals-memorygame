console.log("Up and running!");


const cards = ["queen","queen","king","king"];
const cardsInPlay = [];
let cardOne = cards [0];
let cardTwo = cards [2];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
console .log("User flipped queen");
console .log("User flipped king");
if (cardsInPlay[0] === cardsInPlay[1] ){
		alert("You found a match!");
	}	else {
		alert("Sorry, try again.");
	}
