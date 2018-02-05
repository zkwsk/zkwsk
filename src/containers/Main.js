import React, { Component } from 'react';
import Logo from '../components/LogoPage/LogoPage';
import Introduction from '../components/IntroductionPage/IntroductionPage';
import Portfolio from "../components/Portfolio/Portfolio";
import ContactPage from "../components/ContactPage/ContactPage";
import { Link } from 'react-router-dom';
import './main.css';

class Main extends Component {
  render() {
    return (
      <main role="main">
        <Logo></Logo>
        <Introduction></Introduction>
        <Portfolio/>
        <div className="go-to-cv">
          <p>If you are interested in more details you can investigate my full CV below.</p>
          <Link className="btn btn-cv" to={'/cv'}>View CV</Link>
        </div>
        <ContactPage/>
      </main>
    );
  }
}

export default Main;
