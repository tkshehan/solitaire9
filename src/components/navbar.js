import React from 'react';
import {BrowserRouter as Switch, Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <Switch>
      {// eslint-disable-next-line
        <nav role="navigation">
          <Link to="/rules">Rules</Link>
          <Link to="/game">Play</Link>
          <Link to="">Profile/Login</Link>
          <Link to="/scores">High Scores</Link>
        </nav>
      }
    </Switch>
  );
}
