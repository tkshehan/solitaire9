import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Link, Route} from 'react-router-dom';

import Landing from './landing';

export class Main extends React.Component {
  render() {
    return (
      <main role="main">
        <header role="banner">
          <h1><Link to="/">Solitaire 9</Link></h1>
        </header>

        <Route exact path="/" component={Landing} />
        <Route exact path="/scores" />

        <Route path="/game" />
        <Route exact path="/profile/:profileId" />

        <Route exact path="/login" />
        <Route exact path="/signup" />
        <Route exact path="/signout" />
      </main>
    );
  }
}

export default connect()(Main);
