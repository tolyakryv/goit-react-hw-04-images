import React from 'react';
const ImageGalleryItem = ({ id, webImg }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        id={id}
        className="ImageGalleryItem-image"
        src={webImg}
        alt={id}
      ></img>
    </li>
  );
};
export default ImageGalleryItem;
