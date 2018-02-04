import React, { Component } from 'react';
import './portfolio-item.css';
import DateToString from '../DateToString';
import Gallery from "../gallery/Gallery";

class PortfolioItem extends Component {
  render() {

    const {period_start, period_end, title, employer, description, portfolio, label, tags, gallery} = this.props.position;
    const {show, link, icon } = portfolio;

    if (!show) {
      return null;
    }

    // Conditionally rendered elements
    let img, header, modifier, labelElm, linkElm, caseBtn, galleryElm = '';

    const bgColor = portfolio['background-color'];
    const dropColor = portfolio['backdrop-color'];

    if (label) {
      modifier = 'dark';
      labelElm = <span className="label">{label}</span>;
      caseBtn = <a className="case-btn btn" href="#">Show case</a>;
    }

    if (link) {
      linkElm = <div className="employer-link"><a href={link}>Visit {employer}'s website</a></div>
    }

    if (gallery) {
      galleryElm = <Gallery gallery={gallery}/>
    }


    return (
      <div className={"portfolio-item " + modifier}>
        <div className="center-wrapper">
          <div className="portfolio-header" style={{backgroundColor: dropColor}}>
            {labelElm}
            <img src={icon} alt="logo" style={{backgroundColor: bgColor}}/>
          </div>
        </div>
        <div className="description">
          <h2 className="employer">{employer}</h2>
          <p>{description}</p>
          {caseBtn}
          {linkElm}
          <h4 className="tag-heading">Tags:</h4>
          <ul className="tags">
            {tags.map((tag, i) => (
              <li key={i}>{tag}</li>
            ))}
          </ul>
          {galleryElm}
        </div>
      </div>
    );
  }
}

export default PortfolioItem;
