const alphanumeric = "abcdefghijklmnopqrstuvwxyz1234567890";

function isAlphanumeric(char)
{
    return alphanumeric.indexOf(char.toLowerCase()) >= 0;
}

class Letter {
  constructor(char)
  {
      this.char = char;
      this.visible = !(isAlphanumeric(char));
  }

  toString()
  {
      return this.visible ? this.char : "_";
  }

  guess(char)
  {
      return char.toLowerCase() === this.char.toLowerCase();
  }

  getSolution()
  {
      return this.char.toLowerCase();
  }
}

module.exports = Letter;
