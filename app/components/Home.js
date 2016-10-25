import React from 'react';
import Grid from './grid/Grid';
import GameActions from '../actions/GameActions';
/**
 * Export The Home Component for '/' Route
 **/
export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.params = props.location.query;
  }

  componentDidMount() {
    let playerID = parseInt(this.params.id, 10) || 1;
    GameActions.setActivePlayerID(playerID);
  }

  render() {
    return (
      <div className="container">
        <Grid />
      </div>
    );
  }

}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired
};
