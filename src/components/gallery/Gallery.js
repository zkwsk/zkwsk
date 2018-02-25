import React, { Component } from 'react';
import './gallery.css';
import baguetteBox from 'baguettebox.js';
import GalleryItem from './GalleryItem';

const elementsPerRow = 3;

class Gallery extends Component {
  componentDidMount() {
    // Instantiate a "lightbox Gallery"
    baguetteBox.run('.gallery');
  }

  // Layout logic. One item: full-width, two-items: 1/2 grid, < 3 items: 1/3 grid
  getLayout(length) {

    if (length < 1) {
      return false;
    }

    if (length <= elementsPerRow) {
      return length;
    } else {
      return elementsPerRow;
    }
  }

  render() {
    const { gallery } = this.props;

    return (
      <div className="gallery">
        <h3 className="gallery__heading">Screenshots:</h3>
        <ul>
          {gallery.map((picture, i) => (
            <GalleryItem key={i} picture={picture} layout={this.getLayout(gallery.length)}/>
          ))}
        </ul>
      </div>
    );
  }
}

export default Gallery;

