import React, { Component } from 'react';
import './logo-page.css';

const logo_url = require('../../svg/zkwsk_logo.svg');

class LogoPage extends Component {
  render() {
    return (
      <div className="logo-page">
        <div className="branding">
          <img className="logo" alt="Zaki Wasik" src={logo_url}/>
          <h1 className="title">Web Developer<br/>UX Designer</h1>
        </div>
      </div>
    );
  }
}

export default LogoPage;
