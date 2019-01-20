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
}

module.exports = Scoreboard;