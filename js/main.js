
// Create an array for all cards
var cards = ['queen', 'queen', 'king', 'king'];

// creat an array to hold the cards that are in play.
var cardsInPlay = [];

// create a variable to represent the first card.
var cardOne = cards[0];

// add card 1 to the cardsInPlay array.
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);



// create a variable to represent the seconed card.
var cardTwo = cards[2];

// add card 2 to the cardsInPlay array
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);


// if two cards match. 
if (cardsInPlay.length === 2) {

  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}