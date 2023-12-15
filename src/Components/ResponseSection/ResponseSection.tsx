import * as React from 'react';
import { Box, Typography } from '@mui/material';
import CodeMirror from '@uiw/react-codemirror';
import { nord } from '@uiw/codemirror-theme-nord';
import { useAppSelector } from '../../store/slices/hooks';

function formatGraphQLQuery(queryString: string) {
  const lines = queryString
    .trim()
    .split('\n')
    .map((line) => line.trim())
    .filter((el) => el !== '')
    .join('')
    .split(/({|})/)
    .map((line, i) => {
      line.trim();
      if (
        !line.includes('(') &&
        !line.includes(')') &&
        !line.includes('[') &&
        !line.includes(']')
      ) {
        console.log('line', line, i);
        return line.split(' ').join('\n');
      } else return line;
    });

  let depth = 0;
  const formattedLines = lines.map((line, i, arr) => {
    const trimmedLine = line.trim();
    if (trimmedLine === '{') {
      depth += 2;
      return ' {\n' + ' '.repeat(depth);
    } else if (trimmedLine === '}') {
      depth >= 2 ? (depth -= 2) : (depth = 0);
      return depth === 0 && i !== arr.length - 1
        ? '\n}'
        : '\n' + ' '.repeat(depth) + '}';
    } else if (trimmedLine.includes('\n')) {
      return trimmedLine.replaceAll('\n', `${'\n' + ' '.repeat(depth)}`);
    } else
      return arr[i - 1] === '}' && arr[i + 1] !== '}'
        ? '\n' + ' '.repeat(depth) + trimmedLine
        : trimmedLine;
  });
  console.log('formattedLines', formattedLines);
  return formattedLines.join('').trim();
}

const ResponseSection: React.FC = () => {
  const { value } = useAppSelector((state) => state.querySlice);

  return (
    <Box>
      <Typography variant="h4">ResponseSection</Typography>
      <CodeMirror
        width="100%"
        minHeight="50%"
        theme={nord}
        value={formatGraphQLQuery(value)}
        readOnly={true}
      />
    </Box>
  );
};

export default ResponseSection;
