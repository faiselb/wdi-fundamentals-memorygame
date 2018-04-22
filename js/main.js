
// Create an array for all cards
var cards = ['queen', 'queen', 'king', 'king'];

// creat an array to hold the cards that are in play.
var cardsInPlay = [];


// function to check the matching
var checkForMatch = function() {

// if two cards match 
if (cardsInPlay[0] === cardsInPlay[1]) {
 alert ("You found a match!");
} else {
  alert ("Sorry, try again.");

}

};




// function for flipping a card.
var flipCard = function (cardId) {

console.log ("User flipped " + cards[cardId]);

 cardsInPlay.push (cards[cardId]);

// if two cards played. 
if (cardsInPlay.length === 2) {

// call the checkForMatch function.
 checkForMatch();

}

};

// call for flipCard function,arguments is represent the index numbers of card array.
flipCard(0);
flipCard(2);



