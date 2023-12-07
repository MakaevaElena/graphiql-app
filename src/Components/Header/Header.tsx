import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import Switch from '@mui/material/Switch';
import { UIStrings } from '../../assets/UIStrings.tsx';
import { useContext } from 'react';
import Context from '../../context/context.tsx';
import useScrollTrigger from '@mui/material/useScrollTrigger';

interface ChangeOnScrollProps {
  children: React.ReactElement;
}

const ScrollHandler = (props: ChangeOnScrollProps) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(props.children, {
    style: {
      height: trigger ? 90 : 100,
      backgroundColor: trigger ? '#a0a0a081' : '#1a1a1a',
      // color: trigger ? 'black' : 'white',
      transition: trigger ? '0.5s' : '0.5s',
      boxShadow: 'none',
      // padding: '10px 0px',
    },
  });
};

const ChangeOnScroll = (props: ChangeOnScrollProps) => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

const Header: React.FC = () => {
  const isLogin = false;
  const { lang, setLang } = useContext(Context);

  const pages = [
    UIStrings.Welcome[+lang],
    UIStrings.Login[+lang],
    UIStrings.Editor[+lang],
  ];
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const changeLang = () => {
    setLang(!lang);
  };

  return (
    <ChangeOnScroll>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: '#1a1a1a',
          // border: '1px solid white',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        enableColorOnDark
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon
              sx={{
                display: { xs: 'none', md: 'flex' },
                mr: 1,
              }}
            />

            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'menlo',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              GraphiQL
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page, i) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link key={i + 1} to={`/${page}`}>
                      <div key={page} id={`${page}`}>
                        <Typography
                          textAlign="center"
                          sx={{
                            color: 'black',
                            fontFamily: 'menlo',
                          }}
                        >
                          {page}
                        </Typography>
                      </div>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'menlo',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              GraphiQL
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page, i) => (
                <Button
                  key={`button-${page}`}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: 'black',
                    display: 'block',
                  }}
                >
                  <Link key={i + 1} to={`/${page}`}>
                    <div key={page} id={`${page}`}>
                      <Typography
                        textAlign="center"
                        sx={
                          {
                            // color: 'red',
                            // fontFamily: 'menlo',
                          }
                        }
                      >
                        {page}{' '}
                      </Typography>
                    </div>
                  </Link>
                </Button>
              ))}
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: 'flex',
                  justifyContent: 'flex-end',
                  gap: '2rem',
                },
              }}
            >
              <Box sx={{ display: { xs: 'flex' } }}>
                <Typography
                  textAlign="center"
                  sx={{
                    color: 'white',
                    fontFamily: 'menlo',
                  }}
                >
                  {UIStrings.RusLang[+lang]}
                </Typography>

                <Switch
                  defaultChecked
                  size="medium"
                  color="default"
                  onChange={changeLang}
                />

                <Typography
                  textAlign="center"
                  sx={{
                    color: 'white',
                    fontFamily: 'menlo',
                  }}
                >
                  {UIStrings.EngLang[+lang]}
                </Typography>
              </Box>

              {!isLogin ? (
                <IconButton>
                  <LoginIcon sx={{ color: 'white' }} />
                  {/* <Typography
                  textAlign="center"
                  sx={{
                    color: 'white',
                    fontFamily: 'menlo',
                  }}
                >
                  Login
                </Typography> */}
                </IconButton>
              ) : (
                <IconButton>
                  <LogoutIcon sx={{ color: 'white' }} />
                  {/* 
                <Typography
                  textAlign="center"
                  sx={{
                    color: 'white',
                    fontFamily: 'menlo',
                  }}
                >
                  Logout{' '}
                </Typography> */}
                </IconButton>
              )}

              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="" />
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ChangeOnScroll>
  );
};

export default Header;
