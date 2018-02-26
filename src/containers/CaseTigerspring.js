import React, { Component } from 'react';

class Main extends Component {

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <main role="main">
        <h1>Case Tigerspring</h1>
      </main>
    );
  }
}

export default Main;
