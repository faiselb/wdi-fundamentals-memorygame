
// array to stor all cards---four objects, one for each card.
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

// array to hold the cards that are in play.
var cardsInPlay = [];


// function to store the steps to check for a match.
var checkForMatch = function () {


// Check to see if two cards match
if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
};



// function to store all steps that should happen when the user flips a card.

var flipCard = function () {

// Get the data-id of the card.
cardId = this.getAttribute('data-id');
  console.log(cardId);

cardsInPlay.push(cards[cardId].rank);

// Display the card's image
  this.setAttribute('src', cards[cardId].cardImage);


// Check if user played two cards. 
if (cardsInPlay.length === 2) {

// call checkForMatch function, after user played two cards
 checkForMatch();


}

};


// function to create a new game board
var createBoard = function () {

// loop through the cards array.
for (var i = 0; i < cards.length; i++) {
  // create an img element 
  var cardElement = document.createElement('img');

// adding src attribute & attribute value 
  cardElement.setAttribute('src', 'images/back.png');

// Set the card's 'data-id' attribute to be the index of the current element.
  cardElement.setAttribute('data-id', i);

// add a click event to the cardElement.
cardElement.addEventListener('click', flipCard);


// append the current cardElement to the game board
   document.getElementById('game-board').appendChild(cardElement);

}


}

// call the createBoard function to create the board
createBoard();


