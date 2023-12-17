import { Box } from '@mui/material';
import CodeEditor from '../CodeEditor/CodeEditor';
import { FC } from 'react';
import { json, jsonParseLinter } from '@codemirror/lang-json';
import { linter } from '@codemirror/lint';
import { useAppDispatch, useAppSelector } from '../../store/slices/hooks';
import { updateVariables } from '../../store/slices/querySlice';

const VariablesEditor: FC = () => {
  const dispatch = useAppDispatch();
  const { variables } = useAppSelector((state) => state.querySlice);

  return (
    <Box>
      <CodeEditor
        extensions={[json(), linter(jsonParseLinter())]}
        readOnly={false}
        codeValue={variables}
        onChange={(event) => dispatch(updateVariables(event))}
      />
    </Box>
  );
};

export default VariablesEditor;
