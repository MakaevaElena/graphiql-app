import * as React from 'react';
import { Box, Typography } from '@mui/material';

import { useAppSelector } from '../../store/slices/hooks';
import { schemaHeading, schemaTitle, wrapperDocumentation } from './styles';
import { RootSchema } from '../../common-types/schema.types';
import DocsSection from './DocsSection';
import { setDocsIsOpen } from '../../store/slices/UISlice';
import { useDispatch } from 'react-redux';

const Documentation: React.FC = () => {
  const dispatch = useDispatch();
  const docsIsOpen = useAppSelector((state) => state.UIData.docsIsOpen);
  const schema: RootSchema = useAppSelector((store) => store.UIData.schema);
  console.log('Documentation', schema);
  const queryType = schema.queryType;
  const mutationType = schema.mutationType;
  const subscriptionType = schema.subscriptionType;
  const typeMap = schema.types;
  const directives = schema.directives;
  // {__schema{types{name,fields{name}}}}

  const handleDocsMenu = () => {
    dispatch(setDocsIsOpen(!docsIsOpen));
  };

  return (
    <Box>
      <Typography variant="h4" sx={schemaTitle} onClick={handleDocsMenu}>
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
            heading={'Directives:'}
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
