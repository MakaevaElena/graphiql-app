import { FC, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import CodeMirror from '@uiw/react-codemirror';
import { nord } from '@uiw/codemirror-theme-nord';
import { wrappwerTextEditor } from './styles';
import { useAppDispatch } from '../../store/slices/hooks';
import { updateQuery } from '../../store/slices/querySlice';

// function convert(value: string) {
//   const stringArr = value
//     .trim()
//     .split('\n')
//     .map((line) => line.trim())
//     .filter((el) => el !== '')
//     .join('')
//     .split('{')
//     .join('{\n')
//     .split('}')
//     .join('\n}')
//     .split('\n');
//   const trimmedLines = stringArr.map((line) => line.trim());

//   let depth = 0;
//   const indentedLines = trimmedLines.map((line) => {
//     if (line.includes('}')) depth -= 2;
//     const spaces = ' '.repeat(Math.max(0, depth));
//     if (line.includes('{')) depth += 2;
//     return spaces + line;
//   });
//   const formattedQuery = indentedLines.join('\n');

//   console.log('stringArr', formattedQuery);

//   return formattedQuery;
// }
// function formatGraphQLQuery(queryString: string) {
//   const lines = queryString.split(/({|})/);

//   let depth = 0;
//   const formattedLines = lines.map((line) => {
//     const trimmedLine = line.trim();
//     if (trimmedLine === '{') {
//       depth += 2;
//       return '{\n' + ' '.repeat(depth);
//     } else if (trimmedLine === '}') {
//       depth -= 2;
//       return '\n' + ' '.repeat(depth) + '}';
//     } else {
//       return ' '.repeat(depth) + trimmedLine;
//     }
//   });

//   return formattedLines.join('').trim();
// }

// Example usage
// const originalQuery =
//   'query ($filmId: ID!, $planetId: ID!){film(filmID:$filmId){created director episodeID}planet(planetID: $planetId){name diameter}}';
// const formattedQuery = formatGraphQLQuery(originalQuery);

const RequestEditor: FC = () => {
  const dispatch = useAppDispatch();
  const [codeValue, setCodeValue] = useState('');

  const onSave = (value: string) => {
    // const newValue = formatGraphQLQuery(value);
    dispatch(updateQuery(value));
  };

  function onChange(value: string) {
    setCodeValue(value);
    console.log('value', value);
  }

  return (
    <Box width="100%">
      <Typography variant="h4">RequestEditor</Typography>
      <Box sx={wrappwerTextEditor} id="editor">
        <CodeMirror
          width="100%"
          minHeight="50%"
          theme={nord}
          value={codeValue}
          onChange={onChange}
        />
        <Button variant="contained" onClick={() => onSave(codeValue)}>
          OnSave
        </Button>
      </Box>
    </Box>
  );
};

export default RequestEditor;
