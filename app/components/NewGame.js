import React from 'react';
import Ink from 'react-ink';

export default class NewGame extends React.Component {

  clearCache() {
    localStorage.clear();
    this.context.router.push('/play');
    window.location.reload();
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
