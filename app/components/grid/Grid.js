import React from 'react';
import Row from './Row';
import GameActions from '../../actions/GameActions';
import GameStore from '../../stores/GameStore';

export default class Grid extends React.Component {

  constructor() {
    super();
    this.state = {
      grid: []
    };
    this.onStoreChange = this.onStoreChange.bind(this);
  }

  onStoreChange(gameData) {
    this.setState({
      grid: gameData.grid
    });
  }

  componentWillMount() {
    GameStore.listen(this.onStoreChange);
  }

  componentDidMount() {
    GameActions.createGame();
  }

  render() {
    return (
      <div className="grid flex dir-col justify-center">
        {
          this.state.grid.length
            ? this.state.grid.map((row, index) => <Row row={row} key={`${index}`} />)
            : <h1>Creating Game...</h1>
        }
      </div>
    );
  }
}
