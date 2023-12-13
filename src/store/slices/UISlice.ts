import { createSlice } from '@reduxjs/toolkit';
import { UIState } from '../store.types';

const initialState: UIState = {
  docsIsOpen: false,
  schema: {
    directives: [],
    mutationType: [],
    queryType: {},
    subscriptionsType: {},
    types: [],
    description: '',
  },
};

const UISlice = createSlice({
  name: 'UI',
  initialState,
  reducers: {
    setDocsIsOpen: (state, action) => {
      state.docsIsOpen = action.payload;
    },
    setSchema: (state, action) => {
      state.schema = action.payload;
    },
  },
});

export const { setDocsIsOpen, setSchema } = UISlice.actions;
export default UISlice.reducer;
