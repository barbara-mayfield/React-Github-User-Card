import React, { Component } from 'react';
import User from './User'
import Follower from './Follower'
import './App.css';

class App extends Component {
  render () {
    return (
      <>
      <h1>Github User Cards</h1>

      <User />
      <Follower />
      </>
    )
  }
}

export default App;
