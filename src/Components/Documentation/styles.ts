import { SxProps, Theme } from '@mui/material';

export const flexRowCenter: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'top',
};

export const flexColumnCenter: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'left',
  gap: '2rem',
};

export const wrapperDocumentation: SxProps<Theme> = {
  color: 'black',
};

export const schemaHeading: SxProps<Theme> = {
  width: '100%',
  fontSize: '1.8rem',
  fontWeight: '600',
  color: '#1a1a1a',
  padding: '1rem',
};

export const sectionHeading: SxProps<Theme> = {
  width: '100%',
  borderBottom: '1px solid #eee',
  fontSize: '2rem',
  fontWeight: '800',
  color: '#1a1a1a',
  padding: '1rem',
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
  // padding: '0.2rem',
};

export const wrapperDocsSection: SxProps<Theme> = {
  ...flexRowCenter,
  justifyContent: 'space-between',
  alignItems: 'top',
  background: '#9e9d9d',
  // border: `1px solid #eee`,
  width: '100%',
};

export const wrapperNextDocsSection: SxProps<Theme> = {
  transform: 'translateZ(0)',
  transition: 'opacity 1s',

  border: `1px solid #eee`,
  padding: '0 2rem',
};

export const wrapperSubSection: SxProps<Theme> = {
  // border: `1px solid #eee`,
  padding: '0 2rem',
};
