import ImageGalleryItem from 'components/ImageGalleryItem';
const ImageGallery = ({ images }) => {
  return (
    <ul className="ImageGallery">
      {images.map(({ id, webformatURL }) => (
        <ImageGalleryItem key={id} id={id} webImg={webformatURL} />
      ))}
    </ul>
  );
};
export default ImageGallery;
