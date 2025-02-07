import styles from './ImageCard.module.css';

interface Image {
  urls: {
    small: string;
  };
  alt_description: string;
}

interface ImageCardProps {
  image: Image;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => (
  <div className={styles.imageCard}>
    <img src={image.urls.small} alt={image.alt_description} />
  </div>
);

export default ImageCard;
