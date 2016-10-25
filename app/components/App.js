import React from 'react';
import Navbar from './Navbar';
/**
 * Export App - The Root Component
 **/
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}
