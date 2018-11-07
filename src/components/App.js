import React from 'react';
import {connect} from 'react-redux';

import Nav from './nav';

export class App extends React.Component {
  render() {
    return (
      <Nav />

    );
  }
}

export default connect()(App);
