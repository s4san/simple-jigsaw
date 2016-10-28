import React from 'react';
import GameActions from '../../actions/GameActions';
import GameStore from '../../stores/GameStore';

export default class Cell extends React.Component {
  constructor() {
    super();
    this.state = {
      isSelected: false,
      isCorrect: false
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
    if(this.props.occupied) {
      GameStore.listen(this.onStoreChange);
    }
  }
  /**
   * Unlisten on unmount
   **/
  componentWillUnmount() {
    if(this.props.occupied) {
      GameStore.unlisten(this.onStoreChange);
    }
  }
  /**
   * Select Cell
   **/
  selectCell(e) {
    if(this.props.occupied && !this.state.isSelected && !this.state.isCorrect) {
      GameActions.selectCell(this.props.index);
    }
  }
  pressCell(e) {
    if(!this.props.occupied) {
      this.setState({
        isWrong: true
      });
    }
  }
  unpressCell(e) {
    if(!this.props.occupied && this.state.isWrong) {
      GameActions.selectCell(this.props.index);
      this.setState({
        isWrong: false
      });
    }
  }
  /**
   * Render Cell
   **/
  render() {
    let className = `${this.state.isSelected ? ' selected' : ''}${this.state.isCorrect ? ' correct' : ''}${this.state.isWrong ? ' wrong' : ''}`;
    return (
      <div
        className={`cell flex align-center justify-center${className}`}
        onClick={this.selectCell.bind(this)}
        onMouseDown={this.pressCell.bind(this)}
        onMouseOut={this.unpressCell.bind(this)}
      >
        {this.props.content}
      </div>
    );
  }
}

Cell.defaultProps = {
  content: 'A',
  index: [-1, -1],
  occupied: false
};

Cell.propTypes = {
  content: React.PropTypes.string.isRequired,
  index: React.PropTypes.array.isRequired,
  occupied: React.PropTypes.bool.isRequired
};
