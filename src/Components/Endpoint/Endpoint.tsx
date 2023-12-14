import * as React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { wrapperBaseUrl } from './styles';
import { setSchema } from '../../store/slices/UISlice';
import { useDispatch } from 'react-redux';
import INTROSPECION_QUERY from './Introspection';

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
          query: INTROSPECION_QUERY,
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
