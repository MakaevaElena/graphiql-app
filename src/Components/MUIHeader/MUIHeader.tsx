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
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import Switch from '@mui/material/Switch';
import UIStrings from '../../assets/UIStrings.json';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { ChangeOnScrollProps, MUIHeaderProps } from './MUIHeader.types.ts';
import Language from '../../enum/language';
import { useDataContext } from '../../DataContext/useDataContext';

const ScrollHandler = (props: ChangeOnScrollProps) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(props.children, {
    style: {
      height: trigger ? 90 : 100,
      backgroundColor: trigger ? '#a0a0a081' : '#1a1a1a',
      transition: trigger ? '0.5s' : '0.5s',
      boxShadow: 'none',
    },
  });
};

const ChangeOnScroll = (props: ChangeOnScrollProps) => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

const MUIHeader: React.FC<MUIHeaderProps> = () => {
  const { language, pageName, setLanguage, athority } = useDataContext();

  const pages = Object.values(pageName);

  const isLogin = athority.isLogin();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const changeLang = () => {
    setLanguage(language === Language.En ? Language.Ru : Language.En);
  };

  return (
    <ChangeOnScroll>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: '#1a1a1a',
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
                  <MenuItem key={i} onClick={handleCloseNavMenu}>
                    <Link to={`/${page}`}>
                      <div id={`${page}`}>
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
                    <div id={`${page}`}>
                      <Typography textAlign="center">{page} </Typography>
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
              <Box
                sx={{
                  display: { xs: 'flex' },
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography
                  textAlign="center"
                  sx={{
                    color: 'white',
                    fontFamily: 'menlo',
                  }}
                >
                  {UIStrings.RuLanguage[language]}
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
                  {UIStrings.EnLanguage[language]}
                </Typography>
              </Box>

              {!isLogin ? (
                <IconButton>
                  <LoginIcon sx={{ color: 'white' }} />
                </IconButton>
              ) : (
                <IconButton>
                  <LogoutIcon sx={{ color: 'white' }} />
                </IconButton>
              )}

              <Avatar alt="Remy Sharp" src="" />

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
              ></Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ChangeOnScroll>
  );
};

export default MUIHeader;
