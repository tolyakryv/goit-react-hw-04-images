import propTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import s from './ImageGallery.module.css';
const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={s.imageGallery}>
      {images.map(({ id, webformatURL }) => (
        <ImageGalleryItem
          openModal={openModal}
          key={id}
          id={id}
          webImg={webformatURL}
        />
      ))}
    </ul>
  );
};
export default ImageGallery;
ImageGallery.propTypes = {
  openModal: propTypes.func,
  images: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      webformatURL: propTypes.string.isRequired,
    })
  ),
};
