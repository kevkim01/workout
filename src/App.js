import React, { Component } from 'react';

import './App.css';

import LandPage from './components/landPage/landPage';
import NavBar from './components/navBar/navBar';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell, faCalendarAlt, faChartLine} from '@fortawesome/free-solid-svg-icons'
library.add(faDumbbell, faCalendarAlt, faChartLine)

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
