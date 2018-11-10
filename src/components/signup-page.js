import React from 'react';
import {Link} from 'react-router-dom';

import SignupForm from './signup-form';

export default function SignupPage(props) {
  return (
    <section className="signup">
      <h2>Signup</h2>
      <SignupForm />
      Already have an account? <Link to="/profile/login">login</Link>
    </section>
  );
}
