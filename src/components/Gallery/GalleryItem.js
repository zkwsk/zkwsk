import React from 'react';
import Image from '../Image/Image';

const GalleryItem = ({index, picture, layout}) => (
  <li className={"gallery__item layout-" + layout}>
    <a href={picture.link} data-caption={picture.description}>
      <Image src={picture.link} altTxt={picture.description}>
      </Image>
    </a>
  </li>
);

export default GalleryItem;
