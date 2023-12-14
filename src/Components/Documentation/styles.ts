import { SxProps, Theme } from '@mui/material';

export const flexRowCenter: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};

export const wrapperDocumentation: SxProps<Theme> = {
  color: 'black',
};

export const schemaHeading: SxProps<Theme> = {
  width: '100%',
  borderBottom: '1px solid #eee',
  fontSize: '2rem',
  fontWeight: '600',
  color: '#1a1a1a',
  padding: '1rem',
};

export const schemaTypes: SxProps<Theme> = {
  fontSize: '1.5rem',
  fontWeight: '600',
  color: '#1a1a1a',
  padding: '0.5rem',
};
