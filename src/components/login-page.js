import React from 'react';
import {Link} from 'react-router-dom';

import LoginForm from './login-form';

export default function LoginPage(props) {
  return (
    <section className="login">
      <h2>Login</h2>
      <LoginForm />
      No account? <Link to="profile/signup">signup</Link>
    </section>
  );
}
