import { Box, Icon, Link, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DevCard from '../../Components/DevCard/DevCard';
import styles from './style.module.scss';
import CustomButton from '../../Components/CustomButton/CustomButton';
import CardsContent from '../../assets/CardsContent.json';
import { useDataContext } from '../../DataContext/useDataContext';
import UIContent from '../../assets/UIStrings.json';

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
      <Typography
        variant="h4"
        sx={{ color: '#eee', fontStyle: 'normal', textAlign: 'center', pb: 2 }}
      >
        {UIContent.WelcomeHeading[language]}
      </Typography>
      {isLogin ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: '#eee',
              fontStyle: 'normal',
              textAlign: 'center',
              pb: 2,
            }}
          >
            {UIContent.WelcomeTextAuth[language]}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 20,
              justifyContent: 'center',
              alignItems: 'center',
              pb: 30,
              pt: 30,
            }}
          >
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
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: '#eee',
              fontStyle: 'normal',
              textAlign: 'center',
              pb: 2,
            }}
          >
            {UIContent.WelcomeTextNotAuth[language]}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              justifyContent: 'center',
              alignItems: 'center',
              pb: 1,
            }}
          >
            <CustomButton
              data-testid="get-started"
              variant="contained"
              title={UIContent.GetStarted[language]}
              sx={{ ml: 1, background: '#177486', color: '#fff' }}
              onClick={() => {
                navigator('/editor');
              }}
            />
          </Box>
        </Box>
      )}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 4,
          border: 1,
          borderColor: '#eee',
          p: 1,
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ color: '#eee', fontStyle: 'normal', textAlign: 'left' }}
        >
          {UIContent.WelcomeAbout[language]}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: '#eee', fontStyle: 'normal', textAlign: 'left' }}
        >
          {UIContent.WelcomeScholl[language]}
        </Typography>

        {devCardsContent.map((dev) => (
          <DevCard
            key={dev[language].name}
            data-testid="dev"
            name={dev[language].name}
            bio={dev[language].bio}
            location={dev[language].location}
            imgSrc={dev[language].imgSrc}
            gitHub={dev[language].gitHub}
            contribution={dev[language].contribution}
          />
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
