import { createSlice } from '@reduxjs/toolkit';
import { ApiState } from '../store.types';

const initialState: ApiState = {
  baseUrl: '',
  schema: {
    directives: [],
    mutationType: {
      name: '',
    },
    queryType: {
      fields: [],
      name: '',
    },
    types: [],
    description: '',
    subscriptionType: {
      name: '',
    },
  },
};

const ApiSlice = createSlice({
  name: 'UI',
  initialState,
  reducers: {
    setBaseUrl: (state, action) => {
      state.baseUrl = action.payload;
    },
    setSchema: (state, action) => {
      state.schema = action.payload;
    },
  },
});

export const { setBaseUrl, setSchema } = ApiSlice.actions;
export default ApiSlice.reducer;
