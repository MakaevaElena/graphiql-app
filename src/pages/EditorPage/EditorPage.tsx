import Container from '@mui/material/Container';
import { Box, Typography } from '@mui/material';
import { useAppSelector } from '../../store/slices/hooks';
import {
  graphqlHeading,
  wrapperDocumentation,
  wrapperEndpoint,
  wrapperGraphQL,
  wrapperHeadersEditor,
  wrapperRequestEditor,
  wrapperResponseSection,
  wrapperVariablesEditor,
} from './styles';
import Documentation from '../../Components/Documentation/Documentation';
import HeadersEditor from '../../Components/HeadersEditor/HeadersEditor';
import VariablesEditor from '../../Components/VariablesEditor/VariablesEditor';
import ResponseSection from '../../Components/ResponseSection/ResponseSection';
import RequestEditor from '../../Components/RequestEditor/RequestEditor';
import Endpoint from '../../Components/Endpoint/Endpoint';

const EditorPage: React.FC = () => {
  const docsIsOpen = useAppSelector((state) => state.UIData.docsIsOpen);

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={graphqlHeading}>
        GraphiQL
      </Typography>
      <Box sx={wrapperGraphQL}>
        <Box sx={wrapperEndpoint}>
          <Endpoint />
        </Box>
        <Box sx={wrapperRequestEditor}>
          <RequestEditor />
        </Box>
        <Box sx={wrapperResponseSection}>
          <ResponseSection />
        </Box>
        <Box sx={wrapperVariablesEditor}>
          <VariablesEditor />
        </Box>
        <Box sx={wrapperHeadersEditor}>
          <HeadersEditor />
        </Box>
        <Box sx={wrapperDocumentation}>{docsIsOpen && <Documentation />}</Box>
      </Box>
    </Container>
  );
};

export default EditorPage;
