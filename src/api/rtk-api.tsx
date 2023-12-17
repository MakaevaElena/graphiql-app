import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiRequest, RootSchema } from '../common-types/schema.types';
import INTROSPECION_QUERY from '../Components/Endpoint/Introspection';

export const rtkqApi = createApi({
  reducerPath: 'grathiQl',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({
    fetchSchema: builder.query<ApiRequest, string>({
      query: (baseUrl) => ({
        url: `${baseUrl}`,
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: {
          operationName: 'IntrospectionQuery',
          query: INTROSPECION_QUERY,
        },
      }),
    }),

    fetchGrathQl: builder.query<RootSchema, string>({
      query: (queryString) => ({
        url: `/`,
        method: 'POST',
        body: queryString,
      }),
    }),
  }),
});

export const { useFetchSchemaQuery, useFetchGrathQlQuery } = rtkqApi;
