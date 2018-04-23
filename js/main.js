
// create four objects, one for each card.
var cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }
];

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

console.log ("User flipped " + cards[cardId].rank);

cardsInPlay.push (cards[cardId].rank);

console.log(cards[cardId].cardImage)
console.log(cards[cardId].suit)


// if two cards played. 
if (cardsInPlay.length === 2) {

// call the checkForMatch function.
 checkForMatch();

}

};

// call for flipCard function,arguments is represent the index numbers of card array.
flipCard(0);
flipCard(2);



