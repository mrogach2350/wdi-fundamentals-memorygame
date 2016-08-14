var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';

var gameBoard = document.getElementById('game-board');


function createBoard(){
  for (var i = 0; i < 4; i++){
    var cardElement = document.createElement("div");
    cardElement.className = "card";
    gameBoard.appendChild(cardElement);
  }
}

createBoard();
// if (cardOne === cardTwo) {
//   alert('You found a match!');
// } else {
//   alert('Sorry, try again.');
// }

console.log('We are linked.');
console.log(gameBoard)
