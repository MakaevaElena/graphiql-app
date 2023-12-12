import * as React from 'react';
import { Box, Typography } from '@mui/material';
import EditorJS from '@editorjs/editorjs';
import { wrappwerTextEditor } from './styles';
// import Header from '@editorjs/header';
// import List from '@editorjs/list';

const RequestEditor: React.FC = () => {
  const editor = new EditorJS({
    holder: 'editor',
    minHeight: 0,
    // tools: {
    //   header: {
    //     class: Header,
    //     inlineToolbar: ['link'],
    //   },
    //   list: {
    //     class: List,
    //     inlineToolbar: true,
    //   },
    // },
  });

  console.log(editor);

  return (
    <Box>
      <Typography variant="h4">RequestEditor</Typography>
      <Box sx={wrappwerTextEditor} id="editor"></Box>
    </Box>
  );
};

export default RequestEditor;
