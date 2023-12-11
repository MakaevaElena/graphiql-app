import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { wrapperDocs } from './styles';

const Documentation: React.FC = () => {
  return (
    <Box sx={wrapperDocs}>
      <Typography variant="h4">Documentation</Typography>
    </Box>
  );
};

export default Documentation;
