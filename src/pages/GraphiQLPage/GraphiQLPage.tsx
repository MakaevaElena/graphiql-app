import React from 'react';
import styles from './style.module.scss';

const GraphiQLPage: React.FC = () => {
  return (
    <>
      <h2 className={styles.tytle}>GraphiQL</h2>
      <div className={styles.graphiql__container}></div>
    </>
  );
};

export default GraphiQLPage;
