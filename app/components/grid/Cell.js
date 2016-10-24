import React from 'react';
import Ink from 'react-ink';
import GameActions from '../../actions/GameActions';
import GameStore from '../../stores/GameStore';

export default class Cell extends React.Component {
  constructor() {
    super();
    this.state = {
      isSelected: false,
      isCorrect: false,
      heightSet: false
    };
    this.onStoreChange = this.onStoreChange.bind(this);
  }
  /**
   * Listen to Store Changes and update the grid accordingly
   **/
  onStoreChange(gameData) {
    let isSelected = !!gameData.currentRange.find(pos => pos[0] === this.props.index[0] && pos[1] === this.props.index[1]);
    let isCorrect =
      !!gameData.foundRanges.find(range => {
        return !!range.find(pos => pos[0] === this.props.index[0] && pos[1] === this.props.index[1])
      });
    this.setState({
      isSelected,
      isCorrect
    });
  }
  /**
   * Attach Store Change Listener
   **/
  componentWillMount() {
    GameStore.listen(this.onStoreChange);
  }
  /**
   * Unlisten on unmount
   **/
  componentWillUnmount() {
    GameStore.unlisten(this.onStoreChange);
  }
  /**
   * Make Cell a Perfect Square *after* rendering
   **/
  setDim(node) {
    if(node && !this.state.heightSet) {
      node.style.height = node.getBoundingClientRect().width + "px";
      this.setState({
        heightSet: true
      });
    }
  }
  /**
   * Select Cell
   **/
  selectCell(e) {
    if(!this.state.isSelected && !this.state.isCorrect) {
      GameActions.selectCell(this.props.index);
    }
  }
  /**
   * Render Cell
   **/
  render() {
    return (
      <div
        ref={this.setDim.bind(this)}
        className={`cell flex align-center justify-center ${this.state.isSelected ? 'selected' : ''} ${this.state.isCorrect ? 'correct' : ''}`}
        onClick={this.selectCell.bind(this)}
      >
        <Ink />
        {this.props.content}
      </div>
    );
  }
}

Cell.defaultProps = {
  content: 'A',
  index: [-1, -1]
};

Cell.propTypes = {
  content: React.PropTypes.string.isRequired,
  index: React.PropTypes.array.isRequired
};
