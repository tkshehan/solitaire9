import React from 'react';
import {BrowserRouter as Switch, Link} from 'react-router-dom';

export default function Landing(props) {
  return (
    <Switch>
      <section className="landing">
        <h2>Landing</h2>
        <p>
          The rules of pyramid solitaire, and how to interact with the board.
        </p>
        <h4><Link to="/game">Play as a guest</Link></h4>
        <h4><Link to="/signup">Signup</Link></h4>
        <h4><Link to="/login">Login</Link></h4>
      </section>
    </Switch>
  );
}

