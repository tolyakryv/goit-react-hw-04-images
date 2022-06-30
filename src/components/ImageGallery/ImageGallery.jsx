import ImageGalleryItem from 'components/ImageGalleryItem';
const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className="ImageGallery">
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
