import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import Navbar from './navbar';
import Main from './main';

export class Appl extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Navbar />
          <Main />
        </div>
      </Router>
    );
  }
}

export default connect()(Appl);
