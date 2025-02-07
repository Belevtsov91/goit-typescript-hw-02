import { RotatingLines } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => (
  <div className={styles.loader}>
    <RotatingLines strokeColor="blue" strokeWidth="5" animationDuration="0.75" width="50" visible />
  </div>
);

export default Loader;
