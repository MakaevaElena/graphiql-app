import theme from '../../ThemeProvider/ThemeProvider';

export const headerWrapper = {
  borderBottom: 1,
  borderColor: 'divider',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const arrowBtn = {
  background: theme.palette.primary.main,
  borderRadius: '50%',
  width: '2rem',
  height: '2rem',

  '&:hover': {
    bgcolor: theme.palette.primary.main,
  },
};

export const icon = {
  fontSize: '16px',
  color: '#fff',
};
