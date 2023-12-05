import React from 'react';
import styles from './style.module.scss';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <h2 className={styles.tytle}>Page Not Found</h2>
      <div className={styles['not-found-page__container']}></div>
    </>
  );
};

export default NotFoundPage;
