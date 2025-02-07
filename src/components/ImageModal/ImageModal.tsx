import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import styles from './ImageModal.module.css';

ReactModal.setAppElement('#root');

interface ImageModalProps {
  image: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  return (
    <ReactModal isOpen={!!image} onRequestClose={onClose} className={styles.modal} overlayClassName={styles.overlay}>
      <img src={image} alt="Large view" />
    </ReactModal>
  );
};

ImageModal.propTypes = {
  image: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImageModal;
