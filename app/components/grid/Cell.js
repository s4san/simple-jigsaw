import React from 'react';

export default class Cell extends React.Component {
  setDim(node) {
    if(node) {
      node.style.height = node.getBoundingClientRect().width + "px";
    }
  }
  render() {
    return (
      <div ref={this.setDim.bind(this)} className="cell flex align-center justify-center">
        {this.props.content}
      </div>
    );
  }
}

Cell.defaultProps = {
  content: '0-0'
};

Cell.propTypes = {
  content: React.PropTypes.string.isRequired
};
