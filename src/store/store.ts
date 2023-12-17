import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './slices/formSlice';
import UIReducer from './slices/UISlice';
import ApiReducer from './slices/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { rtkqApi } from '../api/rtk-api';

export const store = configureStore({
  reducer: {
    loginData: AuthReducer,
    UIData: UIReducer,
    ApiData: ApiReducer,
    [rtkqApi.reducerPath]: rtkqApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkqApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
