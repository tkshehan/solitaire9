import React from 'react';
import {Link} from 'react-router-dom';

export default function Signup(props) {
  return (
    <section className="signup">
      <h2>Signup</h2>
      <form action="#">
        <label for="username">Username
          <input type="text" name="username" id="username" />
        </label>
        <label for="password">Password
          <input type="text" name="password" id="password" />
        </label>
      </form>
      Already have an account? <Link to="/profile/login">login</Link>
    </section>
  );
}
