import * as React from 'react';
import { Box, Typography } from '@mui/material';

import { useAppSelector } from '../../store/slices/hooks';
import { schemaHeading, wrapperDocumentation } from './styles';
import { RootSchema } from '../../common-types/schema.types';
import DocsSection from './DocsSection';

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
          <DocsSection heading={'Query type:'} names={[queryType.name]} />
        ) : null}

        {mutationType ? (
          <DocsSection heading={'Mutation:'} names={[mutationType.name]} />
        ) : null}

        {subscriptionType ? (
          <DocsSection heading={'Mutation:'} names={[subscriptionType.name]} />
        ) : null}

        {typeMap ? (
          <DocsSection
            heading={'All Schema Types:'}
            names={Object.values(typeMap).map((type) => {
              return type.name;
            })}
          />
        ) : null}

        {directives ? (
          <DocsSection
            heading={'All Schema Types:'}
            names={Object.values(directives).map((directive) => {
              return directive.name;
            })}
          />
        ) : null}
      </Box>
    </Box>
  );
};

export default Documentation;
