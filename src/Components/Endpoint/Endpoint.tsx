import * as React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { wrapperBaseUrl } from './styles';
import { setSchema } from '../../store/slices/UISlice';
import { useDispatch } from 'react-redux';

// const BASE_URL = `https://rickandmortyapi.com/`;
// const BASE_URL = `https://rickandmortyapi.com/graphql/`;
// const BASE_URL = `https://graphqlzero.almansi.me/api/`;
// const BASE_URL = `https://graphql-pokemon2.vercel.app/`;

const Endpoint: React.FC = () => {
  const dispatch = useDispatch();
  const makeRequest = async (url: string) => {
    try {
      const res = await fetch(url, {
        // mode: 'no-cors',
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          operationName: 'IntrospectionQuery',
          // query: '{ posts { title } }',
          query:
            'query IntrospectionQuery {\n  __schema {\n    queryType {\n      name\n    }\n    mutationType {\n      name\n    }\n    subscriptionType {\n      name\n    }\n    types {\n      ...FullType\n    }\n    directives {\n      name\n      description\n      locations\n      args {\n        ...InputValue\n      }\n    }\n  }\n}\n\nfragment FullType on __Type {\n  kind\n  name\n  description\n  fields(includeDeprecated: true) {\n    name\n    description\n    args {\n      ...InputValue\n    }\n    type {\n      ...TypeRef\n    }\n    isDeprecated\n    deprecationReason\n  }\n  inputFields {\n    ...InputValue\n  }\n  interfaces {\n    ...TypeRef\n  }\n  enumValues(includeDeprecated: true) {\n    name\n    description\n    isDeprecated\n    deprecationReason\n  }\n  possibleTypes {\n    ...TypeRef\n  }\n}\n\nfragment InputValue on __InputValue {\n  name\n  description\n  type {\n    ...TypeRef\n  }\n  defaultValue\n}\n\nfragment TypeRef on __Type {\n  kind\n  name\n  ofType {\n    kind\n    name\n    ofType {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n          ofType {\n            kind\n            name\n            ofType {\n              kind\n              name\n              ofType {\n                kind\n                name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n',
          variables: {},
        }),
      });
      const data = await res.json();
      dispatch(setSchema(data.data.__schema));
      // return console.log(data.data);
    } catch (error) {
      return console.log(error);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let baseUrl = data.get('baseUrl');
    baseUrl = baseUrl === null ? '' : baseUrl?.toString() ?? '';
    makeRequest(baseUrl);
  };

  return (
    <Box
      sx={wrapperBaseUrl}
      component="form"
      onSubmit={handleSubmit}
      noValidate
    >
      <Typography variant="h4">Endpoint</Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        id="baseUrl"
        name="baseUrl"
        autoFocus
      />
      <Button type="submit">Apply Endpoint</Button>
    </Box>
  );
};

export default Endpoint;
