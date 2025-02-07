import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';

interface Image {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string; // Додаємо це поле, щоб збігалося з App.tsx
}

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (url: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  if (images.length === 0) return null;

  return (
    <ul className={styles.gallery}>
      {images.map((image) => (
        <li key={image.id} onClick={() => onImageClick(image.urls.regular)}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
