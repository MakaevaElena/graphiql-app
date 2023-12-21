import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { useAppSelector } from '../../store/slices/hooks';
import { schemaTitle, wrapperDocumentation } from './styles';
import DocsSection from './DocsSection';
import { setDocsIsOpen } from '../../store/slices/UISlice';
import { useDispatch } from 'react-redux';
import { useFetchSchemaQuery } from '../../api/rtk-api';

const Documentation: React.FC = () => {
  const dispatch = useDispatch();
  const docsIsOpen = useAppSelector((state) => state.UIData.docsIsOpen);
  const baseUrl = useAppSelector((store) => store.ApiData.baseUrl);
  // const { data } = useFetchSchemaQuery(baseUrl);

  // const queryString = JSON.stringify({
  //   query: `data {
  //     __schema{
  //       types{
  //         name
  //       }
  //     }
  //   }`,
  // });

  // const { data } = useFetchGrathQlQuery({ baseUrl, queryString });
  const { data } = useFetchSchemaQuery(baseUrl);
  const schema = data?.data.__schema;
  // console.log('data', data);
  // console.log('schema', schema);

  // const queryType = schema?.queryType;
  const mutationType = schema?.mutationType;
  const subscriptionType = schema?.subscriptionType;
  const types = schema?.types;
  // const directives = schema?.directives;

  const handleDocsMenu = () => {
    dispatch(setDocsIsOpen(!docsIsOpen));
  };

  return (
    <Box>
      <Typography variant="h4" sx={schemaTitle} onClick={handleDocsMenu}>
        Documentation
      </Typography>
      <Box sx={wrapperDocumentation}>
        {/* <Typography sx={schemaHeading}>
          {schema?.description ||
            'A GraphQL schema provides a root type for each kind of operation.'}
        </Typography> */}

        {/* {queryType ? (
          < heading={'Query type:'} types={queryType} />
        ) : null} */}

        {mutationType ? (
          <DocsSection heading={'Mutation:'} types={mutationType} />
        ) : null}

        {subscriptionType ? (
          <DocsSection heading={'Subscription:'} types={subscriptionType} />
        ) : null}

        {types ? <DocsSection heading={'Queries:'} types={types} /> : null}

        {/* {directives ? (
          <DocsSection heading={'Directives:'} types={directives} />
        ) : null} */}
      </Box>
    </Box>
  );
};

export default Documentation;
