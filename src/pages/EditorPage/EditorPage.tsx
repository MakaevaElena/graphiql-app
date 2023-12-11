import React from 'react';
import Container from '@mui/material/Container';
import { Box, Typography } from '@mui/material';
import {
  graphqlHeading,
  // wrapperDocumentation,
  wrapperEndpoint,
  wrapperGraphQL,
  wrapperHeadersEditor,
  wrapperRequestEditor,
  wrapperResponseSection,
  wrapperVariablesEditor,
} from './styles';

const EditorPage: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={graphqlHeading}>
        GraphiQL
      </Typography>
      <Box sx={wrapperGraphQL}>
        <Box sx={wrapperEndpoint}>1 Endpoint</Box>
        <Box sx={wrapperRequestEditor}>2 RequestEditor</Box>
        <Box sx={wrapperResponseSection}>3 ResponseSection</Box>
        <Box sx={wrapperVariablesEditor}>4 VariablesEditor</Box>
        <Box sx={wrapperHeadersEditor}>5 HeadersEditor</Box>
        {/* <Box sx={wrapperDocumentation}>6 Documentation</Box> */}
        {/* {children} */}
      </Box>
    </Container>
  );
};

export default EditorPage;
