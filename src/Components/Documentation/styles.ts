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
  // borderBottom: '1px solid #eee',
  fontSize: '1.8rem',
  fontWeight: '600',
  color: '#1a1a1a',
  padding: '0.5rem',
};

export const schemaTitle: SxProps<Theme> = {
  ...schemaHeading,
  cursor: 'pointer',
};

export const schemaTypes: SxProps<Theme> = {
  fontSize: '1.8rem',
  fontWeight: '600',
  color: '#1a1a1a',
  // background: '#1a1a1a',
  padding: '0.2rem',
};

export const wrapperDocsSection: SxProps<Theme> = {
  background: '#9e9d9d',
};
