import React from 'react';
import {Link} from 'react-router-dom';


export default function Navbar(props) {
  return (
    // eslint-disable-next-line
    <nav role="navigation">
      <Link to="/rules">Rules</Link>
      <Link to="/game">Play</Link>
      <Link to="/scores">High Scores</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}
