import Container from '@mui/material/Container';
import { Box, Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store/slices/hooks';
import {
  graphqlHeading,
  wrapperDocsButton,
  wrapperDocumentation,
  // wrapperDocumentation,
  wrapperEndpoint,
  wrapperGraphQL,
  wrapperHeadersEditor,
  wrapperRequestEditor,
  wrapperResponseSection,
  wrapperVariablesEditor,
} from './styles';
import { setDocsIsOpen } from '../../store/slices/UISlice';
import Documentation from '../../Components/Documentation/Documentation';

// const currentPath = location.pathname;

const EditorPage: React.FC = () => {
  const dispatch = useDispatch();
  const docsIsOpen = useAppSelector((state) => state.UIData.docsIsOpen);

  const handleDocsMenu = () => {
    dispatch(setDocsIsOpen(!docsIsOpen));
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={graphqlHeading}>
        GraphiQL
      </Typography>
      <Box sx={wrapperGraphQL}>
        <Box sx={wrapperEndpoint}>1 Endpoint</Box>
        <Box sx={wrapperDocsButton}>
          <Button onClick={handleDocsMenu}>
            {/* <Link to={`/editor/docs`}> */}
            <Typography>6 Docs menu</Typography>
            {/* </Link> */}
          </Button>
        </Box>
        <Box sx={wrapperRequestEditor}>2 RequestEditor</Box>
        <Box sx={wrapperResponseSection}>3 ResponseSection</Box>
        <Box sx={wrapperVariablesEditor}>4 VariablesEditor</Box>
        <Box sx={wrapperHeadersEditor}>5 HeadersEditor</Box>
        <Box sx={wrapperDocumentation}>{docsIsOpen && <Documentation />}</Box>
      </Box>
    </Container>
  );
};

export default EditorPage;
