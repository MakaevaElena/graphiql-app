import { Box } from '@mui/material';
import CodeMirror, { Extension } from '@uiw/react-codemirror';
import { nord } from '@uiw/codemirror-theme-nord';
import { wrappwerTextEditor } from './styles';

const CodeEditor = ({
  readOnly,
  extensions,
  onChange,
  codeValue,
}: {
  readOnly: boolean;
  extensions?: Extension[];
  onChange?: (value: string) => void;
  codeValue: string;
}) => {
  return (
    <Box sx={wrappwerTextEditor} id="editor">
      <CodeMirror
        readOnly={readOnly}
        extensions={extensions}
        basicSetup={{ highlightActiveLine: false }}
        width="100%"
        minHeight="100%"
        theme={nord}
        value={codeValue}
        onChange={onChange}
      />
    </Box>
  );
};

export default CodeEditor;
