import React from 'react';
import Cell from './Cell';

export default class Row extends React.Component {
  /**
   * Render Row
   **/
  render() {
    let row = this.props.index;
    return (
      <div className="row flex align-center justify-between">
        {
          this.props.row.map((cell, col) => <Cell content={cell.char} index={[row, col]} key={`${cell.char}-${col}`} />)
        }
      </div>
    )
  }

}

Row.defaultProps = {
  row: [],
  index: -1
};

Row.propTypes = {
  row: React.PropTypes.array.isRequired,
  index: React.PropTypes.number.isRequired
};
