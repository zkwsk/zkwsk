import React, { Component } from 'react';
import './cv-header.css';

const logo_url = require('../../svg/zkwsk_logo.svg');

class CvHeader extends Component {
  render() {
    return (
      <div className="header-cv">
        <h1>Curriculum Vitae</h1>
      </div>
    );
  }
}

export default CvHeader;
