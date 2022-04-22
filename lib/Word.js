const Letter = require("./Letter");

class Word {
  constructor(letters)
  {
      this.letters = [];
      for(let char of letters.split(""))
      {
        let newLetter = new Letter(char);
        this.letters.push(newLetter);
      }
  }

  guessLetter(char)
  {
      let foundGuess = false;
      for(let letter of this.letters)
      {
          if (letter.guess(char))
          {
            letter.visible = true;
            foundGuess = true;
          }
      }
      return foundGuess;
  }

  guessedCorrectly()
  {
    for(let letter of this.letters)
    {
        if (!letter.visible)
        {
          return false;
        }
    }
    return true;
  }
}

module.exports = Word;
