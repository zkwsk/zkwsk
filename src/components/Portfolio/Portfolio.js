import React, { Component } from 'react';
import './portfolio.css';
import PortfolioItem from "./PortfolioItem";
import data from '../../data';

class Portfolio extends Component {
  render() {

    const positions = data["cv"]["positions"];

    return (
      <div className="portfolio-page">
        <h2>People I have worked with</h2>
        <p className="portfolio-description">
          This is a selection of companies I have done work for, either as an employee, freelancer or as a startup co-founder.
        </p>
        <div className="portfolio-list">
        {positions.map((position, i) => (
          <PortfolioItem position={position} key={i} />
        ))}
        </div>
      </div>
    );
  }
}

export default Portfolio;
