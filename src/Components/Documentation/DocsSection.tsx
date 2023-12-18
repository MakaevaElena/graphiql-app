import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { schemaHeading, schemaTypes, wrapperDocsSection } from './styles';
import {
  Direc,
  Field,
  MutationType,
  QueryType,
  Type,
} from '../../common-types/schema.types';

type DocsSectionProps = {
  heading: string;
  types:
    | Direc[]
    | MutationType
    | QueryType
    | QueryType[]
    | Type
    | Type[]
    | Field
    | Field[];
};

const DocsSection: React.FC<DocsSectionProps> = ({ heading, types }) => {
  return (
    <Accordion>
      <AccordionSummary
        sx={wrapperDocsSection}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography sx={schemaHeading} variant="h4">
          {heading}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {types && (
          <Box>
            {Object.values(types).map((type, i) => {
              if (type) {
                if (type.hasOwnProperty('fields') && type.fields !== null) {
                  return (
                    <Box key={i}>
                      <DocsSection
                        heading={`${type.name}: { fields }`}
                        types={type.fields}
                      />
                    </Box>
                  );
                }
                if (type.hasOwnProperty('args') && type.args.length > 0) {
                  return (
                    <Box key={i}>
                      <DocsSection
                        heading={`${type.name} ( ...args )`}
                        types={type.args}
                      />
                    </Box>
                  );
                } else
                  return (
                    <div key={`${Math.random()}-${type.name}-${i}`}>
                      <Typography sx={schemaTypes} variant="h4">
                        {type.name}
                      </Typography>
                    </div>
                  );
              }
            })}
          </Box>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default DocsSection;
