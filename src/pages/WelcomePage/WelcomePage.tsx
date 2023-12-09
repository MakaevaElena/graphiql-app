import { Box, Icon, Link, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DevCard from '../../Components/DevCard/DevCard';
import styles from './style.module.scss';
import CustomButton from '../../Components/CustomButton/CustomButton';
import CardsContent from '../../assets/CardsContent.json';
import { useDataContext } from '../../DataContext/useDataContext';
import UIContent from '../../assets/UIStrings.json';
import {
  welcomeHeading,
  welcomeSubTitle,
  welcomeTitle,
  wrapperAuth,
  wrapperButtons,
  wrapperMainSection,
} from './styles';

const WelcomePage: React.FC = () => {
  const navigator = useNavigate();
  const { language, authority } = useDataContext();
  const isLogin = authority.isLogin();

  const devCardsContent = [
    {
      Ru: CardsContent.Sergey.Ru,
      En: CardsContent.Sergey.En,
    },
    {
      Ru: CardsContent.Elena.Ru,
      En: CardsContent.Elena.En,
    },
    {
      Ru: CardsContent.Valeriia.Ru,
      En: CardsContent.Valeriia.En,
    },
  ];

  return (
    <>
      <Typography variant="h4" sx={welcomeHeading}>
        {UIContent.WelcomeHeading[language]}
      </Typography>
      {!isLogin ? (
        <Box sx={wrapperAuth}>
          <Typography variant="h5" sx={welcomeTitle}>
            {UIContent.WelcomeTextNotAuth[language]}
          </Typography>
          <Box sx={wrapperButtons}>
            <CustomButton
              data-testid="sign-in"
              variant="contained"
              title={UIContent.SignIn[language]}
            />
            <CustomButton
              data-testid="sign-up"
              variant="outlined"
              title={UIContent.SignUp[language]}
              color="secondary"
            />
          </Box>
        </Box>
      ) : (
        <Box sx={wrapperAuth}>
          <Typography variant="h5" sx={welcomeTitle}>
            {UIContent.WelcomeTextAuth[language]}
          </Typography>
          <Box sx={wrapperButtons}>
            <CustomButton
              data-testid="get-started"
              title={UIContent.GetStarted[language]}
              onClick={() => {
                navigator('/editor');
              }}
            />
          </Box>
        </Box>
      )}
      <Box sx={wrapperMainSection}>
        <Typography variant="subtitle1" sx={welcomeSubTitle}>
          {UIContent.WelcomeAbout[language]}
        </Typography>
        <Typography variant="subtitle1" sx={welcomeSubTitle}>
          {UIContent.WelcomeScholl[language]}
        </Typography>

        {devCardsContent.map((dev) => (
          <DevCard props={dev[language]} />
        ))}

        <Link href="https://rs.school/react/">
          <Icon sx={{ width: 100, height: 80 }}>
            <img
              alt="Rolling Scopes School Logo"
              className={styles['logo-img']}
              src="https://rollingscopes.com/images/logo_rs_text.svg"
            />
          </Icon>
        </Link>
      </Box>
    </>
  );
};

export default WelcomePage;
