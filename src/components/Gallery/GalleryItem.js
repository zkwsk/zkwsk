import React from 'react';

const GalleryItem = ({index, picture, layout}) => (
  <li className={"gallery__item--layout-" + layout}>
    <a href={picture.link} data-caption={picture.description}>
      <img src={picture.link} alt={picture.description}/>
    </a>
  </li>
);

export default GalleryItem;
