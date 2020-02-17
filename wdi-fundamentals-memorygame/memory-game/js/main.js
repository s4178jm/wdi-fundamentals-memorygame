console.log("Up and running!");


const cards = [
{
	rank:"queen",
	suit:"hearts",
	cardImage:"images/queen-of-hearts.png"
},
{
	rank:"queen",
	suit:"diamonds",
	cardImage:"images/queen-of-diamonds.png"
},
{
	rank:"king",
	suit:"hearts",
	cardImage:"images/king-of-hearts.png"
},
{
	rank:"king",
	suit:"diamonds",
	cardImage:"images/king-of-diamonds.png"
}
];
const cardsInPlay = [];
function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		console.log("You found a match!");
	}	else {
		console.log("Sorry, try again.");
	}
}
function flipcard(cardID){
	console.log("User flipped " + cards[cardID].rank);
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);
	cardsInPlay.push(cards[cardID].rank);
	checkForMatch();
};

flipcard(0);
flipcard(1);

