import React, { Component } from 'react';
import Logo from '../components/LogoPage/LogoPage';
import Introduction from '../components/IntroductionPage/IntroductionPage';

class Main extends Component {
  render() {
    return (
      <main role="main">
        <Logo></Logo>
        <Introduction></Introduction>
      </main>
    );
  }
}

export default Main;
