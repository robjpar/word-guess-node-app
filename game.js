var inquirer = require('inquirer');
var chalk = require('chalk');
var Word = require('./word.js');

const ANIMALS = [
  "American Beaver",
  "Brown Bear",
  "American Alligator",
  "American Moose",
  "Monarch Butterfly",
  "Nine-Banded Armadillo",
  "Tufted Titmouse",
  "Arctic Wolf",
  "Gila Monster",
  "Caribou",
  "Ruby-Throated Hummingbird",
  "Black-Footed Ferret"
];

const MAX_GUESSES = 10;
var animal = '';
var word = {};
var guessesRemaining = 0;

function restartGame() {
  animal = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
  word = new Word(animal);
  guessesRemaining = MAX_GUESSES;

  console.log(chalk.blue(
    '\n----------------------------------------------------------------------------------\n' +
    'W o r d   G u e s s   G a m e   -   A n i m a l s   of   N o r t h   A m e r i c a\n' +
    '----------------------------------------------------------------------------------\n'
  ));

  playNextRound();
}

function playNextRound() {
  inquirer
    .prompt([{
      name: 'letter',
      message: 'Guess a letter?',
      validate: function(value) {
        return /^[a-zA-Z-]$/.test(value); // lowercase, uppercase and hyphen
      }
    }])
    .then(function(answers) {
      if (word.isLetterGuessed(answers.letter)) {
        console.log(chalk.green('\nCORRECT!'));

      } else {
        console.log(chalk.red('\nINCORRECT!'));
        guessesRemaining--;
        console.log(chalk.red(`\n${guessesRemaining} incorrect guesses remaining!`));

      }

      console.log(`\n${word}\n`);

      if (guessesRemaining <= 0) {
        console.log(chalk.red('\nYou lost! Next word...'));
        restartGame();

      } else if (word.areAllLettersGuessed()) {
        console.log(chalk.green('\nYou got it right! Next word...'));
        restartGame();

      } else {
        playNextRound();

      }
    });
}

restartGame();
