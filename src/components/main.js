import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Redirect, Switch, Link, Route} from 'react-router-dom';

import Landing from './landing';
import Profile from './profile';
import Scores from './scores';
import LoginPage from './login-page';
import Signup from './signup';

export class Main extends React.Component {
  render() {
    return (
      <main role="main">
        <header role="banner">
          <h1><Link to="/">{'Solitaire 9'}</Link></h1>
        </header>
        <Switch>

          <Redirect from="/rules" to="/" />
          <Route exact path="/" component={Landing} />
          <Route exact path="/scores" component={Scores} />

          <Route exact path="/profile/login" component={LoginPage} />
          <Route exact path="/profile/signup" component={Signup} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/signout" />
          <Route path="/game" />
        </Switch>
      </main>
    );
  }
}

export default withRouter(connect()(Main));
