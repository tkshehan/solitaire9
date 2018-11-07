import React from 'react';
import {connect} from 'react-redux';

import Nav from './nav';

export class App extends React.Component {
  render() {
    return (
      <Nav />,
      <main>
      </main>
    );
  }
}

export default connect()(App);
