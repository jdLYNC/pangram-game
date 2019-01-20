const { expect } = require('chai');
const Scoreboard = require('../Scoreboard');
const Entry = require('../Entry');

describe('class Scoreboard', () => {

  describe('instance methods', () => {

    describe('getTopEntries()', () => {

      it('should return an array', () => {
        const scoreboard = new Scoreboard();
        expect(scoreboard.getTopEntries(0)).to.be.an('array');
      });
      
      it('should return an array of Entries', () => {
        const scoreboard = new Scoreboard(new Entry({ name: 'Josh', word: 'wizard' }));
        const [topEntry] = scoreboard.getTopEntries(1);
        expect(topEntry).to.be.an.instanceOf(Entry);
      });
      
      it('should return as many entries as the passed number if the number is less than or equal the total', () => {
        const entries = [
          new Entry({ name: 'Josh', word: 'wizard' }),
          new Entry({ name: 'Josh', word: 'blizzard' })
        ];
        const scoreboard = new Scoreboard(...entries);
        const topEntries = scoreboard.getTopEntries(1);
        expect(topEntries.length).to.equal(1);
      });
      
      it('should return the total number of entries if this is less than the passed number', () => {
        const entries = [
          new Entry({ name: 'Josh', word: 'wizard' }),
          new Entry({ name: 'Josh', word: 'blizzard' })
        ];
        const scoreboard = new Scoreboard(...entries);
        const topEntries = scoreboard.getTopEntries(3);
        expect(topEntries.length).to.equal(2);
      });
      
      it('should return entries ordered by score (highest first)', () => {
        const entries = [
          new Entry({ name: 'Josh', word: 'yay' }),
          new Entry({ name: 'Jeff', word: 'eeeeee' }),
          new Entry({ name: 'Jim', word: 'dog' })
        ];
        const scoreboard = new Scoreboard(...entries);
        const topEntries = scoreboard.getTopEntries(3);
        expect(topEntries[0]).to.equal(entries[1]);
        expect(topEntries[2]).to.equal(entries[2]);
      });
      
    });
    
    describe('getTopScores()', () => {
      
      it('should return score objects without the word property', () => {
        const scoreboard = new Scoreboard(new Entry({ name: 'Josh', word: 'wizard' }));
        const [topScore] = scoreboard.getTopScores(1);
        expect(topScore).to.not.have.property('word');
      });
      
      it('should return score objects with the points property', () => {
        const scoreboard = new Scoreboard(new Entry({ name: 'Josh', word: 'wizard' }));
        const [topScore] = scoreboard.getTopScores(1);
        expect(topScore).to.have.property('points');
      });
      
      it('should return as many entries as the passed number if the number is less than or equal the total', () => {
        const entries = [
          new Entry({ name: 'Josh', word: 'wizard' }),
          new Entry({ name: 'Josh', word: 'blizzard' })
        ];
        const scoreboard = new Scoreboard(...entries);
        const topEntries = scoreboard.getTopScores(1);
        expect(topEntries.length).to.equal(1);
      });

      it('should return the total number of entries if this is less than the passed number', () => {
        const entries = [
          new Entry({ name: 'Josh', word: 'wizard' }),
          new Entry({ name: 'Josh', word: 'blizzard' })
        ];
        const scoreboard = new Scoreboard(...entries);
        const topEntries = scoreboard.getTopScores(3);
        expect(topEntries.length).to.equal(2);
      });

      it('should return entries ordered by score (highest first)', () => {
        const entries = [
          new Entry({ name: 'Josh', word: 'yay' }),
          new Entry({ name: 'Jeff', word: 'eeeeee' }),
          new Entry({ name: 'Jim', word: 'dog' })
        ];
        const scoreboard = new Scoreboard(...entries);
        const topEntries = scoreboard.getTopScores(3);
        expect(topEntries[0].name).to.equal('Jeff');
        expect(topEntries[2].name).to.equal('Jim');
      });

    });

  });

});