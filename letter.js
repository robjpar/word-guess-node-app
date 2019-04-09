function Letter(letter) {
  this.letter = letter;
  this.guessed = this.letter === ' ' ? true : false;

  this.toString = function() {
    if (this.letter === ' ') {
      return ' ';
    } else if (this.guessed) {
      return this.letter;
    } else {
      return '_';
    }
  };

  this.isGuessed = function(letter) {
    if (letter.toLowerCase() === this.letter.toLowerCase()) {
      this.guessed = true;
      return true;
    }
    return false;
  };
}

module.exports = Letter;

// Testing... Executed only if run directly
if (require.main === module) {

  var letter = new Letter('a');
  console.log('letter: ' + letter); // automatically calls letter.toString()

  letter.isGuessed('b');
  console.log('letter: ' + letter); // automatically calls letter.toString()

  letter.isGuessed('a');
  console.log('letter: ' + letter); // automatically calls letter.toString()
}
