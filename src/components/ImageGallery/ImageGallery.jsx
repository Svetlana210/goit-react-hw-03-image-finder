import styles from './image-gallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = () => {
  return (
    <ul className={styles.gallery}>
      <ImageGalleryItem />
    </ul>
  );
};

export default ImageGallery;
