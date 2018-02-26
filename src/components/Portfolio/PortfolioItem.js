import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Gallery from "../Gallery/Gallery";

class PortfolioItem extends Component {
  render() {

    const {employer, portfolio, label, tags, gallery} = this.props.position;
    const {show, link, icon, description } = portfolio;

    if (!show) {
      return null;
    }

    // Conditionally rendered elements
    let img, modifier, labelElm, linkElm, caseBtn, galleryElm = '';

    const bgColor = portfolio['background-color'];
    const dropColor = portfolio['backdrop-color'];

    if (label) {
      modifier = 'dark';
      labelElm = <span className="label">{label}</span>;
      caseBtn = <Link to={'/cases/dr'} className="portfolio-item__case-btn">Show case</Link>;
    }

    if (link) {
      linkElm = <div className="employer-link"><a href={link}>Visit {employer}'s website</a></div>
    }

    if (gallery) {
      galleryElm = <Gallery gallery={gallery}/>
    }


    return (
      <div className={`portfolio-item${modifier ? '--' + modifier : ''} layout-3`}>
        <div className="center-wrapper">
          <div className="portfolio-header" style={{backgroundColor: dropColor}}>
            {labelElm}
            <img src={icon} alt="logo" style={{backgroundColor: bgColor}}/>
          </div>
        </div>
        <div className="portfolio-item__description">
          <h2 className="portfolio-item__employer">{employer}</h2>
          <p>{description}</p>
          {caseBtn}
          {linkElm}
          <div className="portfolio-item__tag-container">
            <h4 className="portfolio-item__tag-heading">Tags:</h4>
            <ul className="portfolio-item__tag-list">
              {tags.map((tag, i) => (
                <li className="portfolio-item__tag-list-item" key={i}>{tag}</li>
              ))}
            </ul>
          </div>
          {galleryElm}
        </div>
      </div>
    );
  }
}

export default PortfolioItem;
