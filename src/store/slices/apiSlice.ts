import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ApiState } from '../store.types';
import Storage from '../../utils/Storage/Storage';

const initialState: ApiState = {
  baseUrl: Storage.recallEndpoint() || '',
  errorMessage: '',
  isSchema: false,
  isProxy: false,
};

const ApiSlice = createSlice({
  name: 'UI',
  initialState,
  reducers: {
    setBaseUrl: (state, action: PayloadAction<string>) => {
      state.baseUrl = action.payload;
    },
    hasSchema: (state, action: PayloadAction<boolean>) => {
      state.isSchema = action.payload;
    },
    isProxyUsed: (state, action: PayloadAction<boolean>) => {
      state.isProxy = action.payload;
    },
  },
});

export const { setBaseUrl, hasSchema, isProxyUsed } = ApiSlice.actions;
export default ApiSlice.reducer;
