import React, { Component } from 'react';
import Contact from '../components/ContactPage/ContactPage'
import NavigationComponent from '../components/NavigationComponent/NavigationComponent'
import data from '../data';
import Gallery from '../components/Gallery/Gallery';
import './case.css';

class Main extends Component {

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <main role="main">
        <header className="case-header header-tigerspring">
          <h1>Tigerspring Records</h1>
        </header>
        <div className="showroom">
          <h2>Showroom</h2>
          <p>I did frontend development and UX Design (in partnership with a visual designer) for Tigerspring. Below you will find screenshots of prototypes as well as the finished product.</p>
          <ul>
            <Gallery gallery={data.cv.positions[6].case.gallery}/>
          </ul>
        </div>
        <div className="case-content">
          <ul>
            <li>
              <h3>Tigerspring Records "getaway project"</h3>
              <p>In 2013 I was lucky to be able to join a team of 4 other developers, a designer, a project manager, an IT architect and two founders on a "getaway trip" to Mauritius.</p>
              <p>I took on the combined role as frontend developer and UX designer and together with another designer we gathered the requirements, build personas, scenarios, wireframes and eventually I build the frontend for the product.</p>
              <p>The aim was to build a product to distrupt the way the A&R process works in record companies. The product would gamify and crowdsource the work of screening unreleased artists and based on an artists success on the platform they would be given a record contract.</p>
              <p>We spend 7 weeks building a working prototype with a lot of quirks and bugs. It took another two years before the product was eventually launched, but at that time I had left the project and unfortunately the products was never able to build the required user-base to fullfil its goal and does not exist any longer.</p>
            </li>
          </ul>
        </div>
        <NavigationComponent/>
        <Contact/>
      </main>
    );
  }
}

export default Main;
