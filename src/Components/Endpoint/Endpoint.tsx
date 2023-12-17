import * as React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { wrapperBaseUrl } from './styles';
import { setBaseUrl } from '../../store/slices/apiSlice';
import { useDispatch } from 'react-redux';
import { useFetchGrathQlQuery } from '../../api/rtk-api';
import { useAppSelector } from '../../store/slices/hooks';
// import INTROSPECION_QUERY from './Introspection';
// import { useFetchSchemaQuery } from '../../api/rtk-api';
// import { useAppSelector } from '../../store/slices/hooks';

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

  const queryString = JSON.stringify({
    query: `query {
      characters{
        info{
          count
        }
      }
    }`,
  });
  const baseUrl = useAppSelector((store) => store.ApiData.baseUrl);
  const { data } = useFetchGrathQlQuery({ baseUrl, queryString });
  console.log('test request rick&morty', data);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    let baseUrl = formData.get('baseUrl');
    baseUrl = baseUrl === null ? '' : baseUrl?.toString() ?? '';

    dispatch(setBaseUrl(baseUrl));
    // makeRequest(baseUrl);
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
