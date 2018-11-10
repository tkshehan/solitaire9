import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import SignupForm from './signup-form';

export function SignupPage(props) {
  if (props.loggedIn) {
    return <Redirect to="/profile" />;
  }
  return (
    <section className="signup">
      <h2>Signup</h2>
      <SignupForm />
      Already have an account? <Link to="/profile/login">login</Link>
    </section>
  );
}

const mapStateToProps = (state) => ({
  loggedIn: state.auth.currentUser !== null,
});

export default connect(mapStateToProps)(SignupPage);
