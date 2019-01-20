/**
 * Class represents an individual entry and handles scoring palindrome scoring logic.
 */
class Entry {
  /**
   * Creates an entry class instance from an entry object.
   * @param {object} entry
   * @param {string} entry.name - Name of user who submitted entry.
   * @param {string} entry.word - Word user submitted as entry.
   */
  constructor({ name, word }) {
    Object.assign(this, {
      name,
      word: word.toLowerCase()
    });
  }

  /**
   * Creates character array for passed word, omitting whitespace.
   * @param {string} word - Word user submitted as entry.
   * @return {array} - Array of characters {string}.
   */
  static getCharArr(word) {
    return word.split(' ')
      .join('')
      .split('');
  }

  /**
   * Scores passed word based on length excluding whitespace.
   * @param {string} word - Word user submitted as entry.
   * @return {number} - Word score
   * @static
   */
  static scoreWord(word) {
    const charArr = Entry.getCharArr(word);
    return charArr.length;
  }

}

module.exports = Entry;