import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './slices/formSlice';
import UIReducer from './slices/UISlice';
import QueryReducer from './slices/querySlice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    loginData: AuthReducer,
    UIData: UIReducer,
    querySlice: QueryReducer,
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
