import React from 'react';

export default function Navbar(props) {
  return (
    // eslint-disable-next-line
    <nav role="navigation">
      <a href="/rules">Rules</a>
      <a href="/game">Play</a>
      <a href="">Profile/Login</a>
      <a href="/scores">High Scores</a>
    </nav>
  );
}
