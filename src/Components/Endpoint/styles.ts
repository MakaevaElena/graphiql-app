import { SxProps, Theme } from '@mui/material';

export const flexRowCenter: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};

export const wrapperBaseUrl: SxProps<Theme> = {
  ...flexRowCenter,
  width: '100%',
  gap: '2rem',
};
