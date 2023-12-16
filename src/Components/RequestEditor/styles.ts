import { SxProps, Theme } from '@mui/material';
import theme from '../../ThemeProvider/ThemeProvider';

export const sectionContainer: SxProps<Theme> = {
  position: 'relative',
  display: 'flex',
  width: '100%',
  height: '100%',
  background: '#2e3440',
};

export const wrappwerTextEditor: SxProps<Theme> = {
  background: '#2e3440',
  color: 'black',
  width: '100%',
  height: '100%',
  textAlign: 'left',
};

export const prettifyBtn: SxProps<Theme> = {
  background: theme.palette.primary.light,
  borderRadius: '0.5rem',
  width: '4rem',
  height: '4rem',
  padding: '0.5rem',
  position: 'absolute',
  top: 0,
  right: 0,
  '&:hover': {
    bgcolor: theme.palette.primary.main,
  },
};
export const cleanBtn: SxProps<Theme> = {
  background: theme.palette.secondary.light,
  borderRadius: '0.5rem',
  width: '4rem',
  height: '4rem',
  padding: '0.5rem',
  position: 'absolute',
  top: '4.5rem',
  right: 0,
  '&:hover': {
    bgcolor: theme.palette.secondary.main,
  },
};
