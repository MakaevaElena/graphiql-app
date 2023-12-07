import { Box, Icon, Link, Typography } from '@mui/material';
import DevCard from '../../Components/DevCard/DevCard';
import styles from './style.module.scss';
import { developers } from './developers';

const WelcomePage: React.FC = () => {
  return (
    <>
      <Typography
        variant="h4"
        sx={{ color: '#eee', fontStyle: 'normal', textAlign: 'center', pb: 2 }}
      >
        Welcome to GraphiQL
      </Typography>
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
          GraphiQL is an in-browser tool for writing, validating, and testing
          GraphQL queries. Type queries into this side of the screen, and you
          will see intelligent typeaheads aware of the current GraphQL type
          schema and live syntax and validation errors highlighted within the
          text.
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: '#eee', fontStyle: 'normal', textAlign: 'left' }}
        >
          This progect was created by a group of developers from the Rolling
          Scopes Scholl.
        </Typography>

        {developers.map((dev) => <DevCard
          data-testid="dev"
          name={dev.name}
          bio={dev.bio}
          location={dev.location}
          imgSrc={dev.imgSrc}
          gitHub={dev.gitHub}
          contribution={dev.contribution}
        />)}
       
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
