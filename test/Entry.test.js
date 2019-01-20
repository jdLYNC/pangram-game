const { expect } = require('chai');
const Entry = require('../Entry');

describe('class Entry', () => {

  describe('static methods', () => {

    describe('scoreWord(word)', () => {

      it('should return a number', () => {
        expect(Entry.scoreWord('wow')).to.be.a('number');
      });

      it('should return a score equivalent to the length a word with no whitespace', () => {
        expect(Entry.scoreWord('wow')).to.equal(3);
      });
      
      it('should return a score equivalent to the length of the word minus whitespace for a word with whitespace', () => {
        expect(Entry.scoreWord('wow wow wow')).to.equal(9);
      });

      it('should not care if the word is a palindrome', () => {
        expect(Entry.scoreWord('wednesday')).to.equal(9);
      });

    });

    describe('getCharArr(word)', () => {

      it('should return an array', () => {
        expect(Entry.getCharArr('wow')).to.be.an('array');
      });
      
      it('should return an array of strings', () => {
        expect(Entry.getCharArr('wow')[0]).to.be.a('string');
      });
      
      it('should not contain whitespace', () => {
        expect(Entry.getCharArr('wow wow wow')).to.not.include(' ');
      });
      
      it('return an array of equivalent length to a word with no whitespace', () => {
        expect(Entry.getCharArr('wow wow wow')).to.not.include(' ');
      });
      
      it('should return an array of equivalent length to the word minus whitespace for a word with whitespace', () => {
        const charArr = Entry.getCharArr('wow wow wow');
        expect(charArr.length).to.equal(9);
      });

      it('should return exactly the same characters as a word with no whitespace', () => {
        expect(Entry.getCharArr('wow')).to.deep.equal(['w', 'o', 'w']);
      });
      
      it('should return exactly the same characters minus whitespace as a word with whitespace', () => {
        expect(Entry.getCharArr('wow wow')).to.deep.equal(['w', 'o', 'w', 'w', 'o', 'w']);
      });
      
      it('should return an array with characters in the same order as the passed word', () => {
        expect(Entry.getCharArr('abcdef')).to.deep.equal(['a', 'b', 'c', 'd', 'e', 'f']);
      });

    });

  });

  describe('instance methods', () => {

    describe('isPalindrome()', () => {

      it('should return a boolean', () => {
        const entry = new Entry({ word: 'apple' });
        expect(entry.isPalindrome()).to.be.a('boolean');
      });
      
      it('should return true for palindromes without spaces', () => {
        const entry = new Entry({ word: 'toot' });
        expect(entry.isPalindrome()).to.be.true;
      });
      
      it('should return true for palindromes with spaces', () => {
        const entry = new Entry({ word: 'toot toot' });
        expect(entry.isPalindrome()).to.be.true;
      });
      
      it('should return false for words that are not palindromes', () => {
        const entry = new Entry({ word: 'impossible' });
        expect(entry.isPalindrome()).to.be.false;
      });
      
    });
    
    describe('get points', () => {
      
      it('should return 0 for a word that is not a palindrome', () => {
        const entry = new Entry({ word: 'impossible' });
        expect(entry.points).to.equal(0);
      });
      
      it('should return points equivalent to the length of a palindrome without spaces', () => {
        const entry = new Entry({ word: 'saas' });
        expect(entry.points).to.equal(4);
      });
      
      it('should return points equivalent to the length of a palindrome minus spaces for a palindrome with spaces', () => {
        const entry = new Entry({ word: 'wow wow wow' });
        expect(entry.points).to.equal(9);
      });

    });

  });

});