import Strings from '../../assets/errorMessages.json';
import styles from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <div className={styles.error__message}>{Strings.ERROR_MESSAGE.en}</div>
  );
};

export default ErrorMessage;
