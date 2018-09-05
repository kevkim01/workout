import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import './navBar.css';
import smallLogo from '../../assets/images/acme_logo.jpg';

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar is-white">
      <div class="navbar-begin">
        <img src={smallLogo} margin='auto' width='150px' height='50px' alt="Logo"></img>
      </div>
        <div class="navbar-end">
          <a class="navbar-item">
            log in
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
