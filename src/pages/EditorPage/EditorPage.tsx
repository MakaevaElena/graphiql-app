import Container from '@mui/material/Container';
import {
  Box,
  CircularProgress,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useAppSelector } from '../../hooks/store';
import {
  graphqlHeading,
  graphqlHeadingMobile,
  wrapperDocumentation,
  wrapperEndpoint,
  wrapperGraphQL,
  wrapperGraphQLMobile,
  wrapperHelpersEditor,
  wrapperHelpersEditorMobile,
  wrapperRequestEditor,
  wrapperRequestEditorMobile,
  wrapperResponseSection,
  wrapperResponseSectionMobile,
} from './styles';
import ResponseSection from '../../Components/ResponseSection/ResponseSection';
import RequestEditor from '../../Components/RequestEditor/RequestEditor';
import Endpoint from '../../Components/Endpoint/Endpoint';
import { useDataContext } from '../../DataContext/useDataContext';
import { tabs, tabsLabels } from '../../utils/const';
import CustomTabPanel from '../../Components/CustomTabPanel/CustomTabPanel';
import { Suspense, lazy } from 'react';

const Documentation = lazy(
  () => import('../../Components/Documentation/Documentation')
);

const EditorPage: React.FC = () => {
  const { language } = useDataContext();
  const docsIsOpen = useAppSelector((state) => state.UIData.docsIsOpen);
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="xl">
      <Typography
        variant={isMobileView ? 'h5' : 'h4'}
        sx={
          isMobileView
            ? { ...graphqlHeading, ...graphqlHeadingMobile }
            : graphqlHeading
        }
      >
        GraphiQL
      </Typography>
      <Box
        sx={
          isMobileView
            ? { ...wrapperGraphQL, ...wrapperGraphQLMobile }
            : wrapperGraphQL
        }
      >
        <Box sx={wrapperEndpoint}>
          <Endpoint />
        </Box>
        <Box
          sx={
            isMobileView
              ? { ...wrapperRequestEditor, ...wrapperRequestEditorMobile }
              : wrapperRequestEditor
          }
        >
          <RequestEditor />
        </Box>
        <Box
          sx={
            isMobileView
              ? { ...wrapperHelpersEditor, ...wrapperHelpersEditorMobile }
              : wrapperHelpersEditor
          }
        >
          <CustomTabPanel tabsLabels={tabsLabels[language]} tabsPanels={tabs} />
        </Box>
        <Box
          sx={
            isMobileView
              ? { ...wrapperResponseSection, ...wrapperResponseSectionMobile }
              : wrapperResponseSection
          }
        >
          <ResponseSection />
        </Box>
        <Box sx={wrapperDocumentation}>
          {docsIsOpen && (
            // todo вместе с useLazyFetchSchemaQuery перестал работать Suspense
            <Suspense fallback={<CircularProgress color="inherit" />}>
              <Documentation />
            </Suspense>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default EditorPage;
