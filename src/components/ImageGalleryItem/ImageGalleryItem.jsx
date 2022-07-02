import propTypes from 'prop-types';
import React from 'react';
import s from './ImageGalleryItem.module.css';
const ImageGalleryItem = ({ id, webImg, openModal }) => {
  return (
    <li
      className={s.imageGalleryItem}
      onClick={() => {
        openModal(id);
      }}
    >
      <img
        id={id}
        className={s.imageGalleryItemImage}
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
