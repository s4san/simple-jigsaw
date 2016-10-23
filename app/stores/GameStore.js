import alt from '../alt';
import GameActions from '../actions/GameActions';
import GameGridCreator from '../game/GameGridCreator';

class GameStore {
  constructor() {
    this.bindListeners({
      createGame: GameActions.gameDataReceived
    });
    this.state = {
      grid: []
    };
  }

  createGame(data) {
    let gridCreator = new GameGridCreator(data);
    gridCreator.makeGrid();
    console.log(gridCreator.getGrid());
    this.setState({
      grid: gridCreator.getGrid()
    });
  }
}

export default alt.createStore(GameStore, 'GameStore');
