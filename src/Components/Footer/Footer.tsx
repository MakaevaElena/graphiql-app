import { AppBar, Box, Icon, Link, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import styles from './styles.module.scss';

const Footer: React.FC = () => {
  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: '#1a1a1a', flex: '0 0 auto' }}
      >
        <Container maxWidth="xl" fixed>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 2,
              justifyContent: 'center',
              alignItems: 'center',
              // borderRadius: 4,
              // border: 1,
              // borderColor: '#eee',
              p: 1,
            }}
          >
            <Link href="https://rs.school/react/">
              <Icon sx={{ width: 80, height: 80 }}>
                <img
                  alt="Rolling Scopes School Logo"
                  className={styles['logo-img']}
                  src="https://rollingscopes.com/images/logo_rs_text.svg"
                />
              </Icon>
            </Link>
            <Link href="https://github.com/MakaevaElena/graphiql-app">
              <Icon sx={{ width: 50, height: 80 }}>
                <img
                  alt="Github Logo"
                  className={styles['logo-img']}
                  src="src\assets\img\github.png"
                />
              </Icon>
            </Link>
            <Typography
              variant="h6"
              sx={{
                color: '#eee',
                fontStyle: 'normal',
                textAlign: 'center',
                fontSize: '1rem',
                // verticalAlign: 'center',
              }}
            >
              2024&copy; Up&GoTeam
            </Typography>
          </Box>
        </Container>
      </AppBar>
    </>
  );
};

export default Footer;
