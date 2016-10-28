import React from 'react';
import Grid from './grid/Grid';
import Scorecard from './Scorecard';
import GameActions from '../actions/GameActions';
/**
 * Export The Home Component for '/' Route
 **/
export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.params = props.location.query;
    this.playerID = parseInt(this.params.id, 10) || 1;
  }

  componentDidMount() {
    GameActions.setActivePlayerID(this.playerID);
  }

  render() {
    return (
      <div className="container">
        <Scorecard player={this.playerID}/>
        <Grid />
      </div>
    );
  }

}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired
};
