import React, { Component } from 'react';
import './signUp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class App extends Component {
  render() {
    return (
      <div>
        <div><NavBar/></div>
        <LandPage/>
      </div>
    );
  }
}

export default App;
