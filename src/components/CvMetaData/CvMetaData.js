import React, { Component } from 'react';
import './cv-metadata.css'

class CvMetaData extends Component {
  render() {
    return (
      <div className="cv-metadata">
        <div className="metadata">

          <img src="https://zkwsk.ams3.digitaloceanspaces.com/zkwsk_assets/zawa_crop.png" alt=""/>
          <ul>
            <li>Name: Zaki Wasik</li>
            <li>Hometown: DK2500, Valby, Denmark</li>
            <li>Phone: +45 2076 8587</li>
            <li>Email: zakiwa@gmail.com</li>
            <li>Born: 02-05-1984</li>
          </ul>
          <p>Languages spoken:</p>
          <ul className="languages">
            <li>Danish (native)</li>
            <li>English (very high proficiency)</li>
            <li>German (basic understanding, spoken and written)</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CvMetaData;
