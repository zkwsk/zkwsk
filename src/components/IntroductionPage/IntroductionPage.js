import React, { Component } from 'react';
import './introduction-page.css';


class IntroductionPage extends Component {
  render() {
    return (
      <div className="introduction-page">
        <h2>Design for the user and create business value.</h2>
        <div className="venn-diagram">
          <div className="circle-business"><span className="label">Business</span></div>
          <div className="circle-design"><span className="label">Design</span></div>
          <div className="circle-technology"><span className="label">Technology</span></div>
        </div>
        <p className="introduction">
          I use my mixed background in design, technology and business to engage users and help you build a stronger business.
        </p>
      </div>
    );
  }
}

export default IntroductionPage;
