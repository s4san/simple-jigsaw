import React from 'react';
/**
 * Export The Invite Component for '/invite' Route
 **/
export default class About extends React.Component {

  render() {
    return (
      <nav className='container flex dir-col align-center justify-center'>
        <section className='flex dir-col align-center justify-center'>
          <h3>Invite your friends and start playing!</h3>
          <p>Use the below links to invite upto 4 more players.</p>
        </section>
        <ul className="flex dir-col align-center justify-between">
          <li className="flex align-center justify-center">
            <a href="/play?id=2" target="_blank">Invite Player 2</a>
          </li>
          <li className="flex align-center justify-center">
            <a href="/play?id=3" target="_blank">Invite Player 3</a>
          </li>
          <li className="flex align-center justify-center">
            <a href="/play?id=4" target="_blank">Invite Player 4</a>
          </li>
          <li className="flex align-center justify-center">
            <a href="/play?id=5" target="_blank">Invite Player 5</a>
          </li>
        </ul>
      </nav>
    );
  }

}
