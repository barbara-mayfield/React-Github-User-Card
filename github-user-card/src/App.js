import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import User from './User'

class App extends Component {
  render () {
    return (
      <>
      <h1>Github User Cards</h1>
      <User />
      </>
    )
  }
}

export default App;
