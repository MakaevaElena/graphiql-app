import { Box } from '@mui/material';
import CodeEditor from '../CodeEditor/CodeEditor';
import { FC } from 'react';
import { json, jsonParseLinter } from '@codemirror/lang-json';
import { linter } from '@codemirror/lint';
import { useAppDispatch, useAppSelector } from '../../store/slices/hooks';
import { updateHeaders } from '../../store/slices/querySlice';

const HeadersEditor: FC = () => {
  const dispatch = useAppDispatch();
  const { headers } = useAppSelector((state) => state.querySlice);

  return (
    <Box>
      <CodeEditor
        extensions={[json(), linter(jsonParseLinter())]}
        readOnly={false}
        codeValue={headers}
        onChange={(event) => dispatch(updateHeaders(event))}
      />
    </Box>
  );
};

export default HeadersEditor;
