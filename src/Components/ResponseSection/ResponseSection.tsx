import * as React from 'react';
import { Box } from '@mui/material';
import CodeMirror from '@uiw/react-codemirror';
import { nord } from '@uiw/codemirror-theme-nord';
import { sectionContainer, wrappwerTextEditor } from '../RequestEditor/styles';

const ResponseSection: React.FC = () => {
  const [value, setValue] = React.useState('');

  const getData = React.useCallback(async () => {
    const res = await fetch(
      'https://api.potterdb.com/v1/characters/?filter[name_cont_any]=draco'
    );
    const data = await res.json();
    console.log(data);
    setValue(JSON.stringify(data.data[0], null, 2));
    return;
  }, []);

  return (
    <Box sx={sectionContainer}>
      <Box sx={wrappwerTextEditor} id="viewer">
        <CodeMirror
          width="100%"
          minHeight="100%"
          theme={nord}
          value={value}
          readOnly={true}
        />
      </Box>
      <button onClick={getData}>get data</button>
    </Box>
  );
};

export default ResponseSection;
