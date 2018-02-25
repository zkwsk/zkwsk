import React, { Component } from 'react';
import './gallery.css';
import baguetteBox from 'baguettebox.js';

class Gallery extends Component {
  componentDidMount() {
    // Instantiate a "lightbox Gallery"
    baguetteBox.run('.gallery');
  }

  render() {
    const { gallery } = this.props;

    let layout = 1;

    if (gallery.length === 2) {
      layout = 2
    }
    if (gallery.length <= 3) {
      layout = 3;
    }

    return (
      <div className="gallery">
        <h3 className="gallery-heading">Screenshots:</h3>
        <ul>
          {gallery.map((picture, i) => (
            <li key={i} className={"layout-" + layout}>
              <a href={picture.link} data-caption={picture.description}>
                <img src={picture.link} alt={picture.description}/>
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Gallery;

