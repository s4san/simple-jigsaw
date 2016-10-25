import React from 'react';
import Ink from 'react-ink';

export default class NewGame extends React.Component {

  clearCache() {
    localStorage.removeItem('grid');
    localStorage.removeItem('gridMetadata');
    for(var i = 1; i <= 5; ++i) {
      if(localStorage.getItem(`${i}State`)) {
        localStorage.removeItem(`${i}State`);
      }
    }
    setTimeout(() => window.location.reload(), 200);
  }

  render() {
    return (
      <p onClick={this.clearCache.bind(this)}>New Game<Ink /></p>
    );
  }

}

NewGame.contextTypes = {
  router: React.PropTypes.object.isRequired
};
