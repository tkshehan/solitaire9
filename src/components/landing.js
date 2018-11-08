import React from 'react';
import {Link} from 'react-router-dom';

export default function Landing(props) {
  return (
    <section className="landing">
      <h2>Landing</h2>
      <p>
        The rules of pyramid solitaire, and how to interact with the board.
      </p>
      <h4><Link to="/game/guest">Play as a guest</Link></h4>
      <h4><Link to="profile/signup">Signup</Link></h4>
      <h4><Link to="profile/login">Login</Link></h4>
    </section>
  );
}

