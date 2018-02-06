import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CvHeader from '../components/CvHeader/CvHeader';
import CvMetaData from '../components/CvMetaData/CvMetaData';
import Contact from '../components/ContactPage/ContactPage';
import CvEntry from '../components/CvEntry/CvEntry';
import CvEducation from '../components/CvEducation/CvEducation';
import NavigationComponent from '../components/NavigationComponent/NavigationComponent';
import data from '../data';

import './cv.css';

class CV extends Component {
  render() {

    const positions = data.cv.positions;

    return (
      <div className="cv-page">
        <CvHeader/>
        <CvMetaData/>
        <h2>Profile</h2>
        <p>I am a generalist who enjoy exploring and combining multiple disciplines and I find that this tendency gives
          me a unique skill to approach problems from a number of different perspectives and symphatize with people from
          various backgrounds.</p>
        <p>I may not be able to learn one particular topic in the same depth as someone who is naturally inclined as a specialist,
        but I learn enough to navigate the topic very fast and I orient myself in a holistic way that allows me to keep
        on top of what is important.</p>
        <h2>Employment</h2>
        <p>Below you find the full list of companies I have worked for.</p>
        <ul className="cv-list">
        {positions.map((position, i) => (
          <li className="cv-entry" key={i}><CvEntry  position={position}/></li>
        ))}
        </ul>
        <CvEducation/>
        <h2>Hobbies and interests</h2>
        <p>I have a great passion for not only listening to, but also playing, writing and producing music. The result
        of which can be seen and heard on my <a href="https://www.instagram.com/funkylaundry">Instagram profile</a>.</p>
        <p>I no longer have ambitions of turning music into more than a hobby, but I can mention numerous ways in which
          music has also affected my professional career. The most profound is the fact that without practicing piano
          many hours a day as a teenager, I would most likely never have had the persistence and patience to learn
          computer programming.</p>
        <NavigationComponent/>
        <Contact/>
      </div>
    );
  }
}

export default CV;
