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
import ReplayIcon from '@mui/icons-material/Replay';
import { setDocsIsOpen } from '../../store/slices/UISlice';
import { useAppSelector } from '../../hooks/store';

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
  const baseUrl = useAppSelector((store) => store.ApiData.baseUrl);
  const schema = useFetchSchemaQuery(baseUrl);
  const { isError } = useFetchSchemaQuery(baseUrl);
  const docsIsOpen = useAppSelector((state) => state.UIData.docsIsOpen);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    let baseUrl = formData.get('baseUrl');
    baseUrl = baseUrl === null ? '' : baseUrl?.toString() ?? '';

    dispatch(setBaseUrl(baseUrl));
    dispatch(setDocsIsOpen(false));
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
        disabled={!!!schema.data && isError}
      >
        Schema
      </Fab>
    </Box>
  );
};

export default Endpoint;
