import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiRequest } from '../common-types/schema.types';
import INTROSPECION_QUERY from '../Components/Endpoint/Introspection';
import { IRequestHeaders, IRequestData } from './rtk-api.types';

export const rtkqApi = createApi({
  reducerPath: 'graphiQl',
  baseQuery: fetchBaseQuery(),
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
          headers: {
            'Content-type': 'application/json',
          },
        },
      }),
    }),

    mutateGrathQl: builder.mutation<
      ApiRequest,
      { baseUrl: string; queryString: string }
    >({
      query: ({ baseUrl, queryString }) => ({
        url: `${baseUrl}`,
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: queryString,
      }),
    }),

    fetchGrathQl: builder.query<ApiRequest, IRequestData>({
      query: ({ baseUrl, query, variables, requestHeaders }) => {
        const parsedHeaders = JSON.parse(
          requestHeaders || '{}'
        ) as IRequestHeaders;

        const headers = {
          'Content-Type': 'application/json',
          ...parsedHeaders,
        };

        const parsedVariables = JSON.parse(
          variables ?? '{}'
        ) as IRequestHeaders;

        return {
          url: `${baseUrl}`,
          method: 'POST',
          headers,
          body: { query, variables: parsedVariables, headers },
        };
      },
    }),
  }),
});

export const {
  useFetchSchemaQuery,
  useFetchGrathQlQuery,
  useLazyFetchGrathQlQuery,
  useLazyFetchSchemaQuery,
} = rtkqApi;
