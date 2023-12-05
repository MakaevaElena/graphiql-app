import { createSlice } from '@reduxjs/toolkit';
import { LoginFormState } from '../../store/types';

const initialState: LoginFormState = {
  data: [
    {
      name: '',
      email: '',
      password: '',
      password_repeat: '',
    },
  ],
};

const dataSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
