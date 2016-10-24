import React from 'react';
import Row from './Row';
import GameActions from '../../actions/GameActions';
import GameStore from '../../stores/GameStore';

/**
 * Utility to clone an Object
 * @TODO Move this to global utils
 **/
let clone = (o) => JSON.parse(JSON.stringify(o))

export default class Grid extends React.Component {
  /**
   * Grid constructor
   **/
  constructor() {
    super();
    this.state = {
      grid: []
    };
    this.onStoreChange = this.onStoreChange.bind(this);
  }
  /**
   * Listen to Store Changes and update the grid accordingly
   **/
  onStoreChange(gameData) {
    this.setState({
      grid: gameData.grid
    });
  }
  /**
   * Attach Store Change Listener
   **/
  componentWillMount() {
    GameStore.listen(this.onStoreChange);
  }
  /**
   * Create Game After Mounting the Grid Component
   **/
  componentDidMount() {
    GameActions.createGame();
  }
  /**
   * Unlisten on unmount
   **/
  componentWillUnmount() {
    GameStore.unlisten(this.onStoreChange);
  }
  /**
   * Event Handler for Cell Selection
   * Better to handle by event bubbling instead of click listener on each cell
   **/
  selectChar(e) {
    if(e.target.classList.contains('cell')) { //Validates if the element is indeed a cell
      // let grid = clone(this.state.grid);
      // grid[]
    }
  }
  /**
   * Render Grid
   * @TODO Animated Creating Game... component instead of a simple h1
   **/
  render() {
    return (
      <div className="grid flex dir-col justify-center" onClick={this.selectChar.bind(this)}>
        {
          this.state.grid.length
            ? this.state.grid.map((row, index) => <Row row={row} key={`${index}`} index={index} />)
            : <h1>Creating Game...</h1>
        }
      </div>
    );
  }
}
