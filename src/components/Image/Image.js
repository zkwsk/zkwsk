import React, { Component } from 'react';
import LazyLoad from 'react-lazy-load';

class Image extends Component {
  render() {

    const { title, caption, className, src, altTxt, width, height, fallbackColor = '#fff' } = this.props;

    const img = <img className={className} src={src} alt={altTxt} title={title}/>;

    const style = { backgroundColor: fallbackColor};

    if (caption) {
      return (
          <figure className="image__container" style={style}>
            <LazyLoad width={width} height={height}>
            {img}
            </LazyLoad>
            <figcaption className="image__caption"></figcaption>
          </figure>
      );
    } else {
      return (
        <figure style={style}>
          <LazyLoad width={width} height={height}>
            {img}
          </LazyLoad>
        </figure>
      )
    }

  }
}

export default Image;
