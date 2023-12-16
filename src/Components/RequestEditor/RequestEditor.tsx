import { FC, useState } from 'react';
import { Box, Fab } from '@mui/material';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import CodeMirror from '@uiw/react-codemirror';
import { nord } from '@uiw/codemirror-theme-nord';
import {
  cleanBtn,
  prettifyBtn,
  sectionContainer,
  wrappwerTextEditor,
} from './styles';
import { useAppDispatch } from '../../store/slices/hooks';
import { updateQuery } from '../../store/slices/querySlice';
import formatGraphQLQuery from '../../utils/formatGraphQLQuery';

const RequestEditor: FC = () => {
  const dispatch = useAppDispatch();
  const [codeValue, setCodeValue] = useState('');

  function onSave(value: string) {
    dispatch(updateQuery(value));
    const formatedValue = formatGraphQLQuery(value);
    setCodeValue(formatedValue);
  }

  function onClean() {
    dispatch(updateQuery(''));
    setCodeValue('');
  }

  function onChange(value: string) {
    setCodeValue(value);
  }

  return (
    <Box sx={sectionContainer} width="100%">
      <Fab sx={prettifyBtn} onClick={() => onSave(codeValue)}>
        <AutoFixHighOutlinedIcon />
      </Fab>
      <Fab sx={cleanBtn} onClick={onClean}>
        <DeleteForeverOutlinedIcon />
      </Fab>
      <Box sx={wrappwerTextEditor} id="editor">
        <CodeMirror
          width="100%"
          minHeight="100%"
          theme={nord}
          value={codeValue}
          onChange={onChange}
        />
      </Box>
    </Box>
  );
};

export default RequestEditor;
