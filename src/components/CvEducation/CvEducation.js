import React, { Component } from 'react';
import './cv-education.css';
import EducationEntry from '../EducationEntry/EducationEntry';

import data from '../../data';


class CvEducation extends Component {
  render() {

    const educations = data.cv.education;

    return (
      <div className="cv-education">
        <h2>Education</h2>
        <p>I have a mixed educational background that started out in music and ended up studying a combination of design,
        technology and business. I am an avid learner and have a GPA of 9.7 from CBS (Danish 7-point grading scale).</p>
        <ul className="education">
          {educations.map((education, i) => (
            <li className="education-entry" key={i}><EducationEntry education={education}/></li>
          ))}
        </ul>

      </div>
    );
  }
}

export default CvEducation;
