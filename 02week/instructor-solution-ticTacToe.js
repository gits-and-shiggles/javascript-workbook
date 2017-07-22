//
// Conversation opened. 1 read message.
//
// Skip to content
// Using Gmail with screen readers
// 2
// Search
//
//
//
// Gmail
// COMPOSE
// Labels
// Inbox (718)
// Starred
// Important
// Sent Mail
// Drafts (40)
// Personal
// Travel
// More
// Hangouts
//
//
//
//
//   More
// 2 of 2,983
//
// Print all In new window
// Instructor Solutions
// Inbox
// x
//
// Matt Viteri <matt@austincodingacademy.com>
// Attachments6:19 PM (17 hours ago)
//
// to bcc: me
// Hey guys,
//
// Here are the instructor solutions for pig latin and tic tac toe!
//
// 2 Attachments
//
//
// Click here to Reply or Forward
// 10.62 GB (70%) of 15 GB used
// Manage
// Terms - Privacy
// Last account activity: 14 hours ago
// Details

'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  return (
    (board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn) ||
    (board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn) ||
    (board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn)
  );
}

function verticalWin() {
  return (
    (board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn) ||
    (board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn) ||
    (board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn)
  );
}

function diagonalWin() {
  return (
    (board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] === playerTurn) ||
    (board[2][0] === playerTurn && board[1][1] === playerTurn && board[0][2] === playerTurn)
  );
}

function checkForWin() {
  if ( horizontalWin() || verticalWin() || diagonalWin() ) {
    console.log('Player ' +  playerTurn + ' Won!'); // announce to the world
    return true;
  }
  return false;
}

function ticTacToe(row, column) {
  // Your code here
  board[row][column] = playerTurn;
  if (!checkForWin()) {
    playerTurn = (playerTurn === 'X') ? 'O' : 'X';
  }
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
// instructorSolution-ticTacToe.txt
// Open with
// Displaying instructorSolution-ticTacToe.txt.
