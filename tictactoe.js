// Required modules
const readline = require('readline');

// Create interface for user input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Create Tic Tac Toe board
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

// Player turn tracker
let player = 'X';

// Function to display the board
function displayBoard() {
  console.log(board[0][0] + '|' + board[0][1] + '|' + board[0][2]);
  console.log('-+-+-');
  console.log(board[1][0] + '|' + board[1][1] + '|' + board[1][2]);
  console.log('-+-+-');
  console.log(board[2][0] + '|' + board[2][1] + '|' + board[2][2]);
}

// Function to check for a win
function checkWin() {
  // Check rows for a win
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
      return true;
    }
  }

  // Check columns for a win
  for (let i = 0; i < 3; i++) {
    if (board[0][i] === player && board[1][i] === player && board[2][i] === player) {
      return true;
    }
  }

  // Check diagonals for a win
  if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
    return true;
  }
  if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
    return true;
  }

  return false;
}

// Function to prompt the player for their move
function promptMove() {
  rl.question(`Player ${player}, enter your move (row, column): `, (input) => {
    let [row, col] = input.split(',');
    row = parseInt(row);
    col = parseInt(col);

    // Check for valid input
    if (isNaN(row) || isNaN(col) || row < 0 || row > 2 || col < 0 || col > 2 || board[row][col] !== ' ') {
      console.log('Invalid input. Please try again.');
      promptMove();
    } else {
      // Update the board with the player's move
      board[row][col] = player;

      // Check for a win
      if (checkWin()) {
        console.log(`Player ${player} wins!`);
        displayBoard();
        rl.close();
        return;
      }
    }
      // Check for a tie
      let tie = true;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j] === ' ') {
            tie = false;
            break;
          }
        }
      }
      if (tie) {
        console.log('It\'s a tie!');
        displayBoard();
        rl.close();
        return;
      }
    
      // Switch to the other player's turn
      player = player === 'X' ? 'O' : 'X';
 
  })}
