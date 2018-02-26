import React, { Component } from 'react';
import './education-entry.css';
import DateToString from '../DateToString';

class EducationEntry extends Component {
  render() {

    const { period_start, period_end, degree, school, description } = this.props.education;

    return (
      <div>
        <h3 className="study-period"><DateToString date={period_start}/> - <DateToString date={period_end}/></h3>
        <h2>{degree} at {school}</h2>
        <p className="description">{description}</p>
      </div>
    );
  }
}

export default EducationEntry;
