import React, { Component } from 'react';
import './cv-entry.css';
import DateToString from '../DateToString';

class CvEntry extends Component {
  render() {

    const { period_start, period_end, title, employer, description, tags } = this.props.position;

    return (
      <div>
        <h3 className="employment-period"><DateToString date={period_start}/> - <DateToString date={period_end}/></h3>
        <h2>{title} at {employer}</h2>
        <p className="description">{description}</p>
        <ul className="tags">
          {tags.map((tag, i) => (
            <li key={i}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CvEntry;
