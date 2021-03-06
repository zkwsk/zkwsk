import React, { Component } from 'react';
import CvHeader from '../components/CvHeader/CvHeader';
import CvMetaData from '../components/CvMetaData/CvMetaData';
import Contact from '../components/ContactPage/ContactPage';
import CvEntry from '../components/CvEntry/CvEntry';
import CvEducation from '../components/CvEducation/CvEducation';
import NavigationComponent from '../components/NavigationComponent/NavigationComponent';
import data from '../data';

import './cv.css';

class CV extends Component {

  componentDidMount () {
    window.scrollTo(0, 0)
  }

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
        <p>I have a great passion for music. I listen, playing, write and produce music and I collect instruments. The result
        can be seen and heard on my <a href="https://www.instagram.com/funkylaundry">Instagram profile</a>.</p>
        <p>I can mention numerous ways in which music has also affected my professional career, but the most profound is
          that I believe that the late hours practicing piano as teenager is what taught me the persistence to learn
          computer programming.</p>
        <NavigationComponent/>
        <Contact/>
      </div>
    );
  }
}

export default CV;
