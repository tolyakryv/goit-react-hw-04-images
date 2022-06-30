import React from 'react';
const ImageGalleryItem = ({ id, webImg, openModal }) => {
  return (
    <li
      className="ImageGalleryItem"
      onClick={() => {
        openModal(id);
      }}
    >
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
