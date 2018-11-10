import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import LoginForm from './login-form';

export default function LoginPage(props) {
  return (
    <section className="login">
      <LoginForm />
      No account? <Link to="profile/signup">signup</Link>
    </section>
  );
}

// import {Link} from 'react-router-dom';
// <section>
//   No account? <Link to="profile/signup">signup</Link>
// </section>
