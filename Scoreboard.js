/**
 * Class representing the game scoreboard, stores entries and handles logic for recalling them.
 * @extends Array
 */
class Scoreboard extends Array{
  /**
   * Creates a scoreboard instance, optionally with entries preloaded.
   * @param  {...Entry} entries - Any starting entries preloaded to the scoreboard.
   */
  constructor(...entries) {
    super(...entries);
  }

  /**
   * Sorts and returns entries based on highest points.
   * @param {number} n - Number of entries to return.
   * @return {array} - Top scoring entries {Entry}.
   */
  getTopEntries(n) {
    return this
      .sort((entryA, entryB) => entryB.points - entryA.points)
      .slice(0, n);
  }

  /**
   * Generates a specific top scores array omitting the entry.word property for returning to the Angular app.
   * @param {number} n - Number of entries to return.
   * @return {array} - Array of top score objects.
   */
  getTopScores(n) {
    return this
      .getTopEntries(n)
      .map(({ name, points }) => ({
        name, points
      }));
  }
}

module.exports = Scoreboard;