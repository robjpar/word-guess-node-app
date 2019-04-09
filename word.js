var Letter = require('./letter.js');

function Word(word) {
  this.letters = [];
  var that = this;
  word.split('').forEach(function(letter) {
    that.letters.push(new Letter(letter));
  });

  this.toString = function() {
    var text = '';
    this.letters.forEach(function(letter) {
      text += ` ${letter} `;
    });
    return text;
  };

  this.isLetterGuessed = function(letter) {
    var guessed = false;
    this.letters.forEach(function(l) {
      if (l.isGuessed(letter)) {
        guessed = true;
      }
    });
    return guessed;
  };

  this.areAllLettersGuessed = function() {
    var allGuessed = true;
    this.letters.forEach(function(letter) {
      if (!letter.guessed) {
        allGuessed = false;
      }
    });
    return allGuessed;
  };
}

module.exports = Word;

// Testing... Executed only if run directly
if (require.main === module) {

  var word = new Word('abc');
  console.log('word: ' + word); // automatically calls word.toString()

  word.isLetterGuessed('d');
  console.log('word: ' + word); // automatically calls word.toString()

  word.isLetterGuessed('a');
  console.log('word: ' + word); // automatically calls word.toString()

  word.isLetterGuessed('c');
  console.log('word: ' + word); // automatically calls word.toString()
}
