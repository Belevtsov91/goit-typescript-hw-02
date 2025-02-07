import styles from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => (
  <button className={styles.button} onClick={onClick}>
    Load More
  </button>
);

export default LoadMoreBtn;
