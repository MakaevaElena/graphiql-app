import Container from '@mui/material/Container';
import { Box, Typography } from '@mui/material';
import { useAppSelector } from '../../hooks/store';
import {
  graphqlHeading,
  wrapperDocumentation,
  wrapperEndpoint,
  wrapperGraphQL,
  wrapperHelpersEditor,
  wrapperRequestEditor,
  wrapperResponseSection,
} from './styles';
import Documentation from '../../Components/Documentation/Documentation';
import ResponseSection from '../../Components/ResponseSection/ResponseSection';
import RequestEditor from '../../Components/RequestEditor/RequestEditor';
import Endpoint from '../../Components/Endpoint/Endpoint';
import { useDataContext } from '../../DataContext/useDataContext';
import { tabs, tabsLabels } from '../../utils/const';
import CustomTabPanel from '../../Components/CustomTabPanel/CustomTabPanel';
const EditorPage: React.FC = () => {
  const { language } = useDataContext();
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
        <Box sx={wrapperHelpersEditor}>
          <CustomTabPanel tabsLabels={tabsLabels[language]} tabsPanels={tabs} />
        </Box>
        <Box sx={wrapperResponseSection}>
          <ResponseSection />
        </Box>
        <Box sx={wrapperDocumentation}>{docsIsOpen && <Documentation />}</Box>
      </Box>
    </Container>
  );
};

export default EditorPage;
