const alphanumeric = "abcdefghijklmnopqrstuvwxyz1234567890";

function isAlphanumeric(char)
{
    return alphanumeric.indexOf(char.toLowerCase()) >= 0;
}

class Letter {
  constructor(value)
  {
      this.value = value;
      this.visible = !(isAlphanumeric(value));
  }

  toString()
  {
      return this.visible ? this.value : "_";
  }

  guess(char)
  {
      return char.toLowerCase() === this.value.toLowerCase();
  }

  getSolution()
  {
      return this.value.toLowerCase();
  }
}

module.exports = Letter;
