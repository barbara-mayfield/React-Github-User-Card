import React, { Component } from 'react';
import './App.css';

import User from './User'
import Follower from './Follower'

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
