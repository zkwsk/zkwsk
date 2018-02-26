import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navigation-component.css';

class NavigationComponent extends Component {
  render() {
    return (
      <div className="get-back-home">
        <p>Get back to my main portfolio page.</p>
        <Link className="get-back-home__btn" to={'/'}>Go to portfolio</Link>
        <hr/>
        <p>Find me on social media.</p>
        <a className="get-back-home__btn--light" href="https://github.com/zkwsk/">Github</a>
        <a className="get-back-home__btn--light" href="https://www.linkedin.com/in/zakiwasik/">Linkedin</a>
      </div>
    );
  }
}

export default NavigationComponent;
