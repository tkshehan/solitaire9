import React from 'react';
import {connect} from 'react-redux';

export class App extends React.Component {
  render() {
    return (
      <h1> Demo </h1>
    );
  }
}

export default connect()(App);
