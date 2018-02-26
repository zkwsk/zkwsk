import React, { Component } from 'react';
import './gallery.css';
import baguetteBox from 'baguettebox.js';
import GalleryItem from './GalleryItem';

const elementsPerRow = 3;

class Gallery extends Component {
  componentDidMount() {
    // Instantiate a "lightbox Gallery"
    const galleries = baguetteBox.run('.gallery');

    const galleryButtons = document.querySelectorAll('.gallery__button');

    for (let i = 0; i < galleryButtons.length; i++) {
      galleryButtons[i].addEventListener('click', (e)=> {
        e.preventDefault();

        baguetteBox.show(0, galleries[i]);
      });
    }
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

    const { gallery, hidden, id } = this.props;
    let galleryBtn;

    if (hidden) {
      galleryBtn = <a href={`#${id}`} className="gallery__button">Screenshots</a>
    }

    return (
      <div className="gallery" id={id}>
        {galleryBtn}
        <div className={`gallery-container${hidden ? '--hidden' : '' }`}>
          <h3 className="gallery__heading">Screenshots:</h3>
          <ul>
            {gallery.map((picture, i) => (
              <GalleryItem key={i} picture={picture} layout={this.getLayout(gallery.length)}/>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Gallery;

