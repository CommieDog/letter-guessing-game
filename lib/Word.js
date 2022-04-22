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
}

module.exports = Word;
