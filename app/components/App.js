import React from 'react';
/**
 * Export App - The Root Component
 **/
export default class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
