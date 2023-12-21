import * as React from 'react';
import { Box, Fab, TextField } from '@mui/material';
import {
  endpointField,
  openDocsButton,
  submitButton,
  wrapperBaseUrl,
} from './styles';
import { setBaseUrl } from '../../store/slices/apiSlice';
import { useDispatch } from 'react-redux';
import { useFetchSchemaQuery } from '../../api/rtk-api';
import { useAppSelector } from '../../store/slices/hooks';
import ReplayIcon from '@mui/icons-material/Replay';
import { setDocsIsOpen } from '../../store/slices/UISlice';

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

  // const queryString = JSON.stringify({
  //   query: `query {
  //     characters{
  //       info{
  //         count
  //       }
  //     }
  //   }`,
  // });
  const baseUrl = useAppSelector((store) => store.ApiData.baseUrl);
  // const { data } = useFetchGrathQlQuery({ baseUrl, queryString });
  // console.log('test request rick&morty', data);
  const schema = useFetchSchemaQuery(baseUrl);
  // console.log('data?.data.__schema.types', data?.data.__schema?.types);

  const docsIsOpen = useAppSelector((state) => state.UIData.docsIsOpen);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    let baseUrl = formData.get('baseUrl');
    baseUrl = baseUrl === null ? '' : baseUrl?.toString() ?? '';

    dispatch(setBaseUrl(baseUrl));
  };

  const handleDocsMenu = () => {
    dispatch(setDocsIsOpen(!docsIsOpen));
  };

  return (
    <Box
      sx={wrapperBaseUrl}
      component="form"
      onSubmit={handleSubmit}
      noValidate
    >
      <TextField
        sx={endpointField}
        margin="normal"
        required
        fullWidth
        id="baseUrl"
        name="baseUrl"
        autoFocus
      />
      <Fab sx={submitButton} type="submit">
        <ReplayIcon />
      </Fab>
      <Fab
        sx={openDocsButton}
        onClick={handleDocsMenu}
        disabled={!!!schema.data}
      >
        Schema
      </Fab>
    </Box>
  );
};

export default Endpoint;
