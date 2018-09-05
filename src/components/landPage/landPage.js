import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './landPage.css'
import 'bulma/css/bulma.css'

class LandPage extends Component {
  render() {
    return (
      <div className ='pageContainer'>
        <div className='imageContainer'>
          <div className='directiveContainer'>
            <div id='directiveText'>
              Going to the gym is hard enough
            </div>
            <div>
              <a class="button is-primary" id="directiveButton"> get started </a>
            </div>
          </div>
        </div>
        <div className='textContainer'>
          <div className='columns'>
            <div class='column'>
              <div id="icons">
                <FontAwesomeIcon icon="dumbbell" size="3x" />
              </div>
              <div id="textbox">
                <h1 id="textboxHeader">find a workout program</h1>
                <h1>Choose from many popular workout programs including: Starting Strength, Push Pull Legs, and Westside. Or build your own!</h1>
              </div>
            </div>
            <div class='column'>
              <div id="icons">
                <FontAwesomeIcon icon="calendar-alt" size="3x" />
              </div>
              <div id="textbox">
                <h1 id="textboxHeader">personalize your schedule</h1>
                <h1>Too tired to work out on the weekends? Modify your workout program to fit your schedule.</h1>
              </div>
            </div>
            <div class='column'>
              <div id="icons">
                <FontAwesomeIcon icon="chart-line" size="3x" />
              </div>
              <div id="textbox">
                <h1 id="textboxHeader">stay motivated</h1>
                <h1>Stay on course and keep track of your improvement by recording progress pictures, lift numbers, and your weight </h1>
              </div>
            </div>
          </div>
        </div>
      </div>


    );
  }
}

export default LandPage;
