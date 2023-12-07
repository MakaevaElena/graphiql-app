import DevCard from '../../Components/DevCard/DevCard';
import styles from './style.module.scss';

const WelcomePage: React.FC = () => {
  return (
    <>
      <h2 className={styles.title}>Welcome to GraphiQL</h2>
      <div className={styles['graphiql__container']}>
        <DevCard
          name="Lera"
          bio="Lorem"
          location="Tel-Aviv"
          imgSrc="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
          gitHub="http://www.google.com"
          contribution="Frontend"
        />
      </div>
    </>
  );
};

export default WelcomePage;
