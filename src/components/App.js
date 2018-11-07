import React from 'react';
import {connect} from 'react-redux';

import Navbar from './navbar';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <main>

        </main>
      </div>
    );
  }
}

export default connect()(App);
