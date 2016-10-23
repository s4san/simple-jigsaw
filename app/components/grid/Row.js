import React from 'react';
import Cell from './Cell';

export default class Row extends React.Component {

  render() {
    return (
      <div className="row flex align-center justify-between">
        {
          this.props.row.map((cell, index) => <Cell content={cell.char} key={`${cell.char}-${index}`} />)
        }
      </div>
    )
  }

}

Row.defaultProps = {
  row: []
};

Row.propTypes = {
  row: React.PropTypes.array.isRequired
};
