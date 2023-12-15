import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const querySlice = createSlice({
  name: 'query',
  initialState: {
    value: '',
  },
  reducers: {
    updateQuery(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { updateQuery } = querySlice.actions;
export default querySlice.reducer;
