import React, { Component } from 'react';
import './gallery.css';

class Gallery extends Component {
  render() {

    const { gallery } = this.props;

    return (
      <div className="gallery">
        <h3 className="gallery-heading">Screenshots:</h3>
        <ul>
          {gallery.map((picture, i) => (
            <li key={i}><img src="https://zkwsk.ams3.digitaloceanspaces.com/zkwsk_assets/Fourpio_Wireframe.jpg" alt=""/></li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Gallery;
