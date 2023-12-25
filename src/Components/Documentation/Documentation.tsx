import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { schemaTitle, wrapperDocumentation } from './styles';
import DocsSection from './DocsSection';
import { setDocsIsOpen } from '../../store/slices/UISlice';
import { useDispatch } from 'react-redux';
import { useFetchSchemaQuery } from '../../api/rtk-api';
import { useAppSelector } from '../../hooks/store';

const Documentation: React.FC = () => {
  const dispatch = useDispatch();
  const docsIsOpen = useAppSelector((state) => state.UIData.docsIsOpen);
  const baseUrl = useAppSelector((store) => store.ApiData.baseUrl);
  const { data, isError } = useFetchSchemaQuery(baseUrl);
  const schema = data?.data.__schema;
  // console.log('schema', schema);
  const mutationType = schema?.mutationType;
  const subscriptionType = schema?.subscriptionType;
  const types = schema?.types;

  const handleDocsMenu = () => {
    dispatch(setDocsIsOpen(!docsIsOpen));
  };

  return (
    isError || (
      <Box>
        <Typography variant="h4" sx={schemaTitle} onClick={handleDocsMenu}>
          Documentation
        </Typography>
        <Box sx={wrapperDocumentation}>
          {mutationType ? (
            <DocsSection heading={'Mutation:'} types={mutationType} />
          ) : null}

          {subscriptionType ? (
            <DocsSection heading={'Subscription:'} types={subscriptionType} />
          ) : null}

          {types ? <DocsSection heading={'Queries:'} types={types} /> : null}
        </Box>
      </Box>
    )
  );
};

export default Documentation;
