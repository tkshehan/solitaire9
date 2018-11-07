import React from 'react';
import {connect} from 'react-redux';

import Nav from './nav';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <main>

        </main>
      </div>
    );
  }
}

export default connect()(App);
