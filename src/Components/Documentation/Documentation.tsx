import * as React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Link,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useAppSelector } from '../../store/slices/hooks';
import { schemaHeading, wrapperDocumentation } from './styles';
import { RootSchema } from '../../common-types/schema.types';

const Documentation: React.FC = () => {
  const schema: RootSchema = useAppSelector((store) => store.UIData.schema);
  console.log('Documentation', schema);
  const queryType = schema.queryType;
  const mutationType = schema.mutationType;
  const subscriptionType = schema.subscriptionType;
  const typeMap = schema.types;
  const directives = schema.directives;
  // {__schema{types{name,fields{name}}}}

  return (
    <Box>
      <Typography variant="h4" sx={schemaHeading}>
        Documentation
      </Typography>
      <Box sx={wrapperDocumentation}>
        <Typography sx={schemaHeading}>
          {schema.description ||
            'A GraphQL schema provides a root type for each kind of operation.'}
        </Typography>
        {queryType ? (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={schemaHeading} variant="h4">
                Query type:
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Link href="#">{queryType.name}</Link>
            </AccordionDetails>
          </Accordion>
        ) : null}

        {mutationType && (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={schemaHeading} variant="h4">
                Mutation:
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Link href="#">
                <Typography sx={schemaHeading} variant="h4">
                  {mutationType.name}
                </Typography>
              </Link>
            </AccordionDetails>
          </Accordion>
        )}

        {subscriptionType && (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={schemaHeading} variant="h4">
                Subscription:
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Link href="#">
                <Typography sx={schemaHeading} variant="h4">
                  {subscriptionType.name}
                </Typography>
              </Link>
            </AccordionDetails>
          </Accordion>
        )}

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={schemaHeading} variant="h4">
              All Schema Types:{' '}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {typeMap && (
              <div>
                {Object.values(typeMap).map((type) => {
                  return (
                    <div key={type.name}>
                      <Link href="#">{type.name}</Link>
                    </div>
                  );
                })}
              </div>
            )}
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={schemaHeading} variant="h4">
              Directives:{' '}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {directives && (
              <div>
                {Object.values(directives).map((directive) => {
                  return (
                    <div key={directive.name}>
                      <Link href="#">{directive.name}</Link>
                    </div>
                  );
                })}
              </div>
            )}
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Documentation;
