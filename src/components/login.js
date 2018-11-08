import React from 'react';
import {Link} from 'react-router-dom';

export default function Login(props) {
  return (
    <section className="login">
      <h2>Login</h2>
      <form>
        <label for="username">Username
          <input type="text" name="username" id="username" />
        </label>
        <label for="password">Password
          <input type="text" name="password" id="password" />
        </label>
      </form>
      No account? <Link to="profile/signup">signup</Link>
    </section>
  );
}
