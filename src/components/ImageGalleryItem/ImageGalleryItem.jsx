import propTypes from 'prop-types';
import React from 'react';
import './ImageGalleryItem.css';
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
ImageGalleryItem.propTypes = {
  id: propTypes.number.isRequired,
  webImg: propTypes.string.isRequired,
  openModal: propTypes.func.isRequired,
};
