import alt from '../alt';
import ValidWords from '../sources/words';

class GameActions {
  gameDataReceived(data) {
    return data;
  }
  createGame() {
    ValidWords.fetch().then(
      data => this.actions.gameDataReceived(data)
    );
  }
}

export default alt.createActions(GameActions);
