import styles from './image-gallery-item.module.css';

const ImageGalleryItem = () => {
  return (
    <li className={styles.item}>
      <img src="" alt="" className={styles.image} />
    </li>
  );
};

export default ImageGalleryItem;
