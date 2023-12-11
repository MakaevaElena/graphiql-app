import { createSlice } from '@reduxjs/toolkit';
import { AuthDataState } from '../store.types';

const initialState: AuthDataState = {
  data: {
    name: '',
    email: '',
    password: '',
    passwordRepeat: '',
  },
};

const dataSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
