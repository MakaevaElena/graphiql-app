import { SxProps, Theme } from '@mui/material';

export const wrapperComponent = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 10,
  border: '1px solid white',
  padding: '1rem',
};

export const wrapperDocs: SxProps<Theme> = {
  ...wrapperComponent,
  gridColumn: '7/9',
  gridRow: '2/13',
  zIndex: '3',
};
