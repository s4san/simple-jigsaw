import alt from '../alt';
import ValidWords from '../sources/words';

/**
 * All In-Game Actions Go Here
 **/

class GameActions {
  /**
   * Ask the store to create game once data to be populated is received
   **/
  gameDataReceived(data) {
    return data;
  }
  /**
   * Create a Game By Simulating fetch request to get words
   **/
  createGame() {
    ValidWords.fetch().then(
      data => this.actions.gameDataReceived(data)
    );
  }
  /**
   * Select a Cell
   **/
  selectCell(pos) {
    return pos;
  }
}

export default alt.createActions(GameActions);
