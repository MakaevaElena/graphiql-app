import * as React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { wrapperBaseUrl } from './styles';
import { setSchema } from '../../store/slices/UISlice';
import { useDispatch } from 'react-redux';
import INTROSPECION_QUERY from './Introspection';

// const endpoints = [
//   'https://graphql-pokemon2.vercel.app/',
//   'https://graphqlzero.almansi.me/api/',
//   'https://rickandmortyapi.com/graphql/',
//   'https://www.universe.com/graphiql',
//   'https://api.catalysis-hub.org/graphql',
//   'https://countries.trevorblades.com/',
// ];

const Endpoint: React.FC = () => {
  const dispatch = useDispatch();

  const makeRequest = async (url: string) => {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          query: `query {
            characters{
              info{
                count
              }
            }
          }`,
        }),
        credentials: 'omit',
      });
      const data = await res.json();
      return console.log(data);
    } catch (error) {
      return console.log(error);
    }
  };

  const getSchema = async (url: string) => {
    try {
      const res = await fetch(url, {
        // mode: 'no-cors',
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          operationName: 'IntrospectionQuery',
          query: INTROSPECION_QUERY,
        }),
        credentials: 'omit',
      });
      const data = await res.json();
      dispatch(setSchema(data.data.__schema));
    } catch (error) {
      return console.log(error);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let baseUrl = data.get('baseUrl');
    baseUrl = baseUrl === null ? '' : baseUrl?.toString() ?? '';
    getSchema(baseUrl);
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
      {/* <Autocomplete
        id="baseUrl"
        fullWidth
        sx={{ width: 300 }}
        options={endpoints}
        autoHighlight
        getOptionLabel={(option) => option}
        renderOption={(_, option) => <Box component="li">{option}</Box>}
        renderInput={(params) => (
          <TextField
            margin="normal"
            required
            name="baseUrl"
            label="Choose a endpoint"
            inputProps={{
              ...params.inputProps,
              autoComplete: '', // disable autocomplete and autofill
            }}
          />
        )}
      /> */}

      <Button type="submit">Apply Endpoint</Button>
    </Box>
  );
};

export default Endpoint;
