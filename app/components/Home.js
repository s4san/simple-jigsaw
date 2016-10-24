import React from 'react';
import Grid from './grid/Grid';
/**
 * Export The Home Component for '/' Route
 **/
export default class Home extends React.Component {

  render() {
    return (
      <div className="container">
        <Grid />
      </div>
    );
  }

}
