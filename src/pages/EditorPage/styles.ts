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

export const graphqlHeading = {
  color: 'primary',
  textAlign: 'center',
  pb: 10,
};

export const wrapperGraphQL: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  // gridTemplateRows: 'repeat(12, 1fr)',
  gridAutoRows: '8.7vh',
  gap: 10,
  border: '1px solid white',
  padding: '1rem',
};

export const wrapperEndpoint: SxProps<Theme> = {
  ...wrapperComponent,
  gridColumn: '1/9',
  gridRow: '1/2',
};

export const wrapperRequestEditor: SxProps<Theme> = {
  ...wrapperComponent,
  gridColumn: '1/5',
  gridRow: '2/5',
};

export const wrapperResponseSection: SxProps<Theme> = {
  ...wrapperComponent,
  gridColumn: '5/9',
  gridRow: '2/5',
};

export const wrapperVariablesEditor: SxProps<Theme> = {
  ...wrapperComponent,
  gridColumn: '1/3',
  gridRow: '5/9',
};

export const wrapperHeadersEditor: SxProps<Theme> = {
  ...wrapperComponent,
  gridColumn: '3/5',
  gridRow: '5/9',
};

// export const wrapperDocumentation: SxProps<Theme> = {
//   ...wrapperComponent,
// };
