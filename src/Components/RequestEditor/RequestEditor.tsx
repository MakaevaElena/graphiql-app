import * as React from 'react';
import { Box, Typography } from '@mui/material';
import EditorJS from '@editorjs/editorjs';

const RequestEditor: React.FC = () => {
  const editor = new EditorJS({
    holder: 'editor',
    minHeight: 0,
  });

  console.log(editor);

  return (
    <Box>
      <Typography variant="h4">RequestEditor</Typography>
      <Box id="editor"></Box>
    </Box>
  );
};

export default RequestEditor;
