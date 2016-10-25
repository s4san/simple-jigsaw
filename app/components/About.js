import React from 'react';
/**
 * Export The About Component for '/about' Route
 **/
export default class About extends React.Component {

  render() {
    return (
      <div className="container flex align-center justify-center">
        <p style={{margin:'1rem 0'}}>
          Developed by <a style={{paddingLeft:'5px'}} href="https://github.com/s4san/simple-jigsaw" target="_blank">Sandeep Kumar.</a>
        </p>
      </div>
    );
  }

}
