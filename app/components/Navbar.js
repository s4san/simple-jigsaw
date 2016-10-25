import React from 'react';
import Link from 'react-router/lib/Link';
import Ink from 'react-ink';
import NewGame from './NewGame';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className='container flex dir-col align-center justify-center'>
        <header className="flex align-center justify-center">
          <h1>Ninja JigSaw</h1>
        </header>
        <ul className="flex align-center justify-between">
          <li className="flex align-center justify-center">
            <NewGame />
          </li>
          <Link to={ {pathname: '/play', query: {id: 1}} }>
            <li className="flex align-center justify-center">
              <Ink />
              Continue Game
            </li>
          </Link>
          <Link to='/invite'>
            <li className="flex align-center justify-center">
              <Ink />
              Invite
            </li>
          </Link>
          <Link to='/about'>
            <li className="flex align-center justify-center">
              <Ink />
              About
            </li>
          </Link>
        </ul>
      </nav>
    );
  }
}
